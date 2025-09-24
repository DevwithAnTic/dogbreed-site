// Breed Loading and API Integration

async function loadBreeds() {
  try {
    console.log('Loading breeds from Dog CEO API...');
    const res = await fetch(window.AppConfig.BREEDS_ENDPOINT, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      cache: 'no-cache' // Prevent caching issues
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();

    if (data.status === 'success') {
      // Convert Dog CEO format to our format
      window.AppConfig.allBreeds = [];
      let id = 1;

      for (const [breed, subBreeds] of Object.entries(data.message)) {
        // Skip breeds that don't have valid images
        if (window.AppConfig.BREEDS_WITHOUT_IMAGES.includes(breed)) {
          console.log(`Skipping ${breed} - no images available in Dog CEO API`);
          continue;
        }

        // Always add the main breed
        const breedData = {
          id: id++,
          name: breed.charAt(0).toUpperCase() + breed.slice(1),
          breed_group: 'Dog',
          apiKey: breed,
          isMainBreed: true
        };
        
        // Log loading progress
        if (window.AppConfig.allBreeds.length % 20 === 0) {
          console.log(`Loaded ${window.AppConfig.allBreeds.length} breeds so far...`);
        }
        
        window.AppConfig.allBreeds.push(breedData);

        // Add sub-breeds if they exist
        if (subBreeds.length > 0) {
          subBreeds.forEach(subBreed => {
            window.AppConfig.allBreeds.push({
              id: id++,
              name: `${subBreed.charAt(0).toUpperCase() + subBreed.slice(1)} ${breed.charAt(0).toUpperCase() + breed.slice(1)}`,
              breed_group: 'Dog',
              apiKey: `${breed}/${subBreed}`,
              isMainBreed: false,
              parentBreed: breed
            });
          });
        }
      }
    }

    // Initially show only main breeds
    window.AppConfig.filteredBreeds = window.AppConfig.allBreeds.filter(breed => breed.isMainBreed);
    
    console.log(`✅ Successfully loaded ${window.AppConfig.allBreeds.length} total breeds`);
    console.log(`📋 Displaying ${window.AppConfig.filteredBreeds.length} main breeds`);
    
    renderBreeds(window.AppConfig.filteredBreeds);
    setupSearch();
    setupFilters();
    setupMobileGestures();
    setupAccessibilityFeatures();
    setupStickySearchBar();

    // Pre-populate breed size cache for better filtering performance
    console.log('Pre-populating breed size classifications for optimal filtering performance...');
    window.AppConfig.allBreeds.forEach(breed => {
      getBreedSize(breed); // This will populate the cache
    });

    // Initialize performance lookup tables for optimal classification speed
    initializeLookupTables();

    console.log(`🚀 Breed size cache populated with ${window.AppConfig.breedSizeCache.size} entries for optimal filtering`);

    // Initialization complete
    console.log('🎉 Dog Breed Explorer initialized successfully!');

  } catch (error) {
    console.error('Error loading breeds:', error);
    console.error('Error stack:', error.stack);
    document.getElementById('results').innerHTML = `
      <div class="text-center p-8">
        <p class="text-red-500 mb-4">Error loading breeds. Please try again.</p>
        <p class="text-sm text-gray-500">Check the console for more details.</p>
        <button onclick="loadBreeds()" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Retry
        </button>
      </div>
    `;
  }
}

// Service Worker disabled for debugging - remove cache issues
if ('serviceWorker' in navigator) {
  // Unregister any existing service workers
  navigator.serviceWorker.getRegistrations().then(registrations => {
    registrations.forEach(registration => {
      registration.unregister();
      console.log('Unregistered service worker');
    });
  });
}

// Export for global access
window.loadBreeds = loadBreeds;