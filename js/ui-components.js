// UI Components and Rendering Logic

// Preload critical assets
function preloadImage(url) {
  if (window.AppConfig.imageCache.has(url)) return Promise.resolve(window.AppConfig.imageCache.get(url));

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      window.AppConfig.imageCache.set(url, url);
      resolve(url);
    };
    img.onerror = reject;
    img.src = url;
  });
}

// Intersection Observer for lazy loading
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const breedId = img.dataset.breedId;
      const breed = window.AppConfig.allBreeds.find(b => b.id == breedId);
      if (breed) {
        loadBreedImage(breed, img);
        imageObserver.unobserve(img);
      }
    }
  });
}, { rootMargin: '50px' });

async function loadBreedImage(breed, imgElement) {
  try {
    imgElement.classList.add('loading');
    const apiUrl = `${window.AppConfig.API_BASE_URL}/breed/${breed.apiKey}/images/random`;
    
    // Debug logging for problematic breeds
    if (breed.apiKey === 'african' || breed.apiKey === 'german') {
      console.log(`🔍 Loading image for ${breed.name} (${breed.apiKey})`);
      console.log(`🔗 API URL: ${apiUrl}`);
    }
    
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      },
      cache: 'no-cache'
    });
    
    const data = await response.json();
    
    // Debug logging for problematic breeds
    if (breed.apiKey === 'african' || breed.apiKey === 'german') {
      console.log(`📊 API Response for ${breed.name}:`, data);
    }

    if (data.status === 'success') {
      await preloadImage(data.message);
      imgElement.innerHTML = `<img src="${data.message}" alt="${breed.name}" class="w-full h-48 object-cover">`;
      imgElement.classList.remove('loading');
      
      if (breed.apiKey === 'african' || breed.apiKey === 'german') {
        console.log(`✅ Successfully loaded image for ${breed.name}: ${data.message}`);
      }
    } else {
      imgElement.classList.remove('loading');
      console.warn(`❌ No image available for ${breed.name} (${breed.apiKey}):`, data);
    }
  } catch (error) {
    imgElement.classList.remove('loading');
    console.error(`❌ Failed to load image for ${breed.name} (${breed.apiKey}):`, error);
  }
}

// Hover prefetching for breed details
function prefetchBreedDetails(breedId) {
  if (window.AppConfig.prefetchQueue.has(breedId)) return;
  window.AppConfig.prefetchQueue.add(breedId);

  const breed = window.AppConfig.allBreeds.find(b => b.id == breedId);
  if (breed) {
    // Prefetch main breed image
    fetch(`${window.AppConfig.API_BASE_URL}/breed/${breed.apiKey}/images/random`)
      .then(r => r.json())
      .then(data => {
        if (data.status === 'success') {
          preloadImage(data.message);
        }
      })
      .catch(() => { });
  }
}

async function renderBreeds(breeds) {
  const results = document.getElementById('results');
  const breedCount = document.getElementById('breedCount');

  // Re-enable sticky search bar when returning to breed list
  if (window.stickySearchBar) {
    window.stickySearchBar.setEnabled(true);
  }

  // Update breed count
  breedCount.textContent = `Showing ${breeds.length} of ${window.AppConfig.allBreeds.filter(b => b.isMainBreed).length} dog breeds`;

  // Render with fixed-size placeholders to prevent layout shifts
  results.innerHTML = breeds.map(breed => `
    <div class="bg-[var(--card-dark)] rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300" 
         tabindex="0"
         role="button"
         aria-label="View details for ${breed.name}, ${breed.breed_group || 'Mixed'} breed"
         onclick="showDetails('${breed.id}')"
         onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();showDetails('${breed.id}');}"
         onmouseenter="prefetchBreedDetails('${breed.id}')">
      <div class="card-image loading w-full h-48 object-cover" 
           id="img-${breed.id}" 
           data-breed-id="${breed.id}">🐕</div>
      <div class="p-4">
        <h2 class="text-lg font-bold">${breed.name}</h2>
        <p class="text-sm text-[var(--subtext-dark)]">Size: <span class="text-[var(--primary)] font-medium">${formatBreedSizeWithConfidence(breed)}</span></p>
      </div>
    </div>
  `).join('');

  // Use Intersection Observer for lazy loading
  breeds.forEach(breed => {
    const imgElement = document.getElementById(`img-${breed.id}`);
    if (imgElement) {
      imageObserver.observe(imgElement);
    }
  });

  // Preload first few images immediately for above-the-fold content
  const visibleBreeds = breeds.slice(0, 6);
  visibleBreeds.forEach(async (breed) => {
    const imgElement = document.getElementById(`img-${breed.id}`);
    if (imgElement) {
      loadBreedImage(breed, imgElement);
    }
  });
}

// Export functions for global access
window.renderBreeds = renderBreeds;
window.prefetchBreedDetails = prefetchBreedDetails;
window.loadBreedImage = loadBreedImage;