// Breed Details and Information Display

async function showDetails(breedId) {
  const breed = window.AppConfig.allBreeds.find(b => b.id == breedId);
  if (!breed) return;

  // Check if this is a main breed with sub-breeds
  let subBreeds = [];
  
  if (breed.isMainBreed) {
    // If this is a main breed, find its sub-breeds
    subBreeds = window.AppConfig.allBreeds.filter(b => 
      !b.isMainBreed && b.parentBreed === breed.apiKey
    );
  } else {
    // If this is a sub-breed, find other sub-breeds of the same parent
    subBreeds = window.AppConfig.allBreeds.filter(b => 
      !b.isMainBreed && b.parentBreed === breed.parentBreed && b.id !== breed.id
    );
  }

  // Get breed information
  const breedInfo = getBreedInformation(breed);

  // Show enhanced details with tabs
  document.getElementById('results').innerHTML = `
    <div style="grid-column: 1/-1; background: var(--card-dark); border-radius: 12px; border: 1px solid var(--border-dark); color: var(--text-dark); overflow: hidden;">
      <!-- Header Section -->
      <div style="padding: 20px; border-bottom: 1px solid var(--border-dark);">
        <!-- Back Button -->
        <div style="margin-bottom: 16px;">
          <button onclick="renderBreeds(window.AppConfig.filteredBreeds)" 
            style="display: flex; align-items: center; gap: 8px; background: var(--border-dark); hover:background: var(--subtext-dark); color: var(--text-dark); border: none; padding: 8px 16px; border-radius: 8px; cursor: pointer; transition: background-color 0.2s ease; font-size: 14px;"
            onmouseover="this.style.backgroundColor='var(--subtext-dark)'" 
            onmouseout="this.style.backgroundColor='var(--border-dark)'">
            <span class="material-icons" style="font-size: 18px;">arrow_back</span>
            <span>Back to Breeds</span>
          </button>
        </div>
        
        <!-- Breadcrumb -->
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px; color: var(--subtext-dark); font-size: 14px;">
          <span>Breeds</span>
          <span>/</span>
          <span>${breed.name}</span>
        </div>
        
        <div style="display: flex; gap: 24px; align-items: flex-start;">
          <div id="detail-img" style="width: 120px; height: 120px; background: var(--border-dark); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 2rem; flex-shrink: 0;">🐕</div>
          <div style="flex: 1;">
            <h1 style="color: var(--text-dark); margin: 0 0 8px 0; font-size: 2rem; font-weight: 700;">${breed.name}</h1>
            <p style="color: var(--subtext-dark); margin: 0 0 12px 0; font-size: 16px; line-height: 1.5;">${breedInfo.description}</p>
            <div style="color: var(--subtext-dark); font-size: 14px;">
              <span><strong>Origin:</strong> ${breedInfo.origin}</span> | 
              <span><strong>Size:</strong> ${formatBreedSizeWithConfidence(breed)}</span> | 
              <span><strong>Lifespan:</strong> ${breedInfo.lifespan}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab Navigation -->
      <div style="display: flex; border-bottom: 1px solid var(--border-dark);">
        <button class="tab-button active" onclick="switchTab('about')" data-tab="about" style="padding: 16px 24px; background: none; border: none; color: var(--text-dark); cursor: pointer; border-bottom: 2px solid var(--primary); font-weight: 600;">About</button>
        <button class="tab-button" onclick="switchTab('care')" data-tab="care" style="padding: 16px 24px; background: none; border: none; color: var(--subtext-dark); cursor: pointer; border-bottom: 2px solid transparent; font-weight: 600;">Care</button>
        ${subBreeds.length > 0 ? `<button class="tab-button" onclick="switchTab('variants')" data-tab="variants" style="padding: 16px 24px; background: none; border: none; color: var(--subtext-dark); cursor: pointer; border-bottom: 2px solid transparent; font-weight: 600;">Variants</button>` : ''}
        <button class="tab-button" onclick="switchTab('gallery')" data-tab="gallery" style="padding: 16px 24px; background: none; border: none; color: var(--subtext-dark); cursor: pointer; border-bottom: 2px solid transparent; font-weight: 600;">Gallery</button>
      </div>

      <!-- Tab Content -->
      <div style="padding: 24px;">
        <!-- About Tab -->
        <div id="about-tab" class="tab-content" style="display: block;">
          <div style="margin-bottom: 32px;">
            <h2 style="color: var(--text-dark); margin: 0 0 16px 0; font-size: 1.5rem; font-weight: 600;">About</h2>
            <p style="color: var(--subtext-dark); line-height: 1.6; margin-bottom: 24px;">${breedInfo.about}</p>
          </div>

          <div style="margin-bottom: 32px;">
            <h3 style="color: var(--text-dark); margin: 0 0 16px 0; font-size: 1.25rem; font-weight: 600;">Temperament</h3>
            <p style="color: var(--subtext-dark); line-height: 1.6; margin-bottom: 16px;">${breedInfo.temperament}</p>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              ${breedInfo.traits.map(trait => `
                <span style="background: var(--border-dark); color: var(--text-dark); padding: 4px 12px; border-radius: 16px; font-size: 14px;">${trait}</span>
              `).join('')}
            </div>
          </div>

          <div>
            <h3 style="color: var(--text-dark); margin: 0 0 16px 0; font-size: 1.25rem; font-weight: 600;">Appearance</h3>
            <p style="color: var(--subtext-dark); line-height: 1.6;">${breedInfo.appearance}</p>
          </div>
        </div>

        <!-- Care Tab -->
        <div id="care-tab" class="tab-content" style="display: none;">
          <div style="margin-bottom: 32px;">
            <h2 style="color: var(--text-dark); margin: 0 0 16px 0; font-size: 1.5rem; font-weight: 600;">Care & Health</h2>
            <p style="color: var(--subtext-dark); line-height: 1.6; margin-bottom: 24px;">${breedInfo.careIntro}</p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
            <div style="background: var(--background-dark); padding: 20px; border-radius: 8px;">
              <h3 style="color: var(--text-dark); margin: 0 0 12px 0; font-size: 1.1rem; font-weight: 600;">Exercise Needs</h3>
              <p style="color: var(--subtext-dark); line-height: 1.6; font-size: 14px;">${breedInfo.exercise}</p>
            </div>
            
            <div style="background: var(--background-dark); padding: 20px; border-radius: 8px;">
              <h3 style="color: var(--text-dark); margin: 0 0 12px 0; font-size: 1.1rem; font-weight: 600;">Grooming</h3>
              <p style="color: var(--subtext-dark); line-height: 1.6; font-size: 14px;">${breedInfo.grooming}</p>
            </div>
            
            <div style="background: var(--background-dark); padding: 20px; border-radius: 8px;">
              <h3 style="color: var(--text-dark); margin: 0 0 12px 0; font-size: 1.1rem; font-weight: 600;">Health</h3>
              <p style="color: var(--subtext-dark); line-height: 1.6; font-size: 14px;">${breedInfo.health}</p>
            </div>
            
            <div style="background: var(--background-dark); padding: 20px; border-radius: 8px;">
              <h3 style="color: var(--text-dark); margin: 0 0 12px 0; font-size: 1.1rem; font-weight: 600;">Training</h3>
              <p style="color: var(--subtext-dark); line-height: 1.6; font-size: 14px;">${breedInfo.training}</p>
            </div>
          </div>
        </div>

        ${subBreeds.length > 0 ? `
        <!-- Variants Tab -->
        <div id="variants-tab" class="tab-content" style="display: none;">
          <h2 style="color: var(--text-dark); margin: 0 0 24px 0; font-size: 1.5rem; font-weight: 600;">${breed.name} Variants</h2>
          <p style="color: var(--subtext-dark); margin-bottom: 24px;">Explore the different variants of ${breed.name} breeds. Each variant has its own unique characteristics while sharing the core traits of the ${breed.name} family.</p>
          
          <div id="subbreed-images" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px;">
            ${subBreeds.map(sub => `
              <div class="subbreed-item" style="text-align: center; cursor: pointer; background: var(--background-dark); padding: 16px; border-radius: 12px; transition: all 0.2s ease; border: 1px solid var(--border-dark);" onclick="showDetails('${sub.id}')" onmouseenter="prefetchBreedDetails('${sub.id}')" onmouseover="this.style.borderColor='var(--primary)'; this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='var(--border-dark)'; this.style.transform='translateY(0)'">
                <div class="subbreed-image" id="sub-img-${sub.id}" style="width: 100%; height: 160px; background: var(--border-dark); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin-bottom: 12px;">🐕</div>
                <h3 style="color: var(--text-dark); font-weight: 600; margin: 0 0 4px 0; font-size: 1rem;">${sub.name}</h3>
                <p style="color: var(--subtext-dark); font-size: 0.875rem; margin: 0;">Click to view details</p>
              </div>
            `).join('')}
          </div>
        </div>
        ` : ''}

        <!-- Gallery Tab -->
        <div id="gallery-tab" class="tab-content" style="display: none;">
          <h2 style="color: var(--text-dark); margin: 0 0 24px 0; font-size: 1.5rem; font-weight: 600;">Gallery</h2>
          <div id="breed-gallery" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px;">
            <!-- Gallery images will be loaded here -->
          </div>
        </div>
      </div>
    </div>
  `;

  // Load main breed image
  try {
    const response = await fetch(`${window.AppConfig.API_BASE_URL}/breed/${breed.apiKey}/images/random`);
    const data = await response.json();

    if (data.status === 'success') {
      const imgElement = document.getElementById('detail-img');
      if (imgElement) {
        imgElement.innerHTML = `<img src="${data.message}" alt="${breed.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;">`;
      }
    }
  } catch (error) {
    console.log(`Failed to load detail image for ${breed.name}`);
  }

  // Load gallery images
  loadGalleryImages(breed);

  // Load sub-breed images
  subBreeds.forEach(async (subBreed) => {
    try {
      const response = await fetch(`${window.AppConfig.API_BASE_URL}/breed/${subBreed.apiKey}/images/random`);
      const data = await response.json();

      if (data.status === 'success') {
        const imgElement = document.getElementById(`sub-img-${subBreed.id}`);
        if (imgElement) {
          imgElement.innerHTML = `<img src="${data.message}" alt="${subBreed.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">`;
        }
      }
    } catch (error) {
      console.log(`Failed to load sub-breed image for ${subBreed.name}`);
    }
  });
}

// Tab switching functionality
function switchTab(tabName) {
  // Hide all tab contents
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => {
    content.style.display = 'none';
  });

  // Remove active class from all tab buttons
  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(button => {
    button.style.color = 'var(--subtext-dark)';
    button.style.borderBottomColor = 'transparent';
  });

  // Show selected tab content
  const selectedTab = document.getElementById(`${tabName}-tab`);
  if (selectedTab) {
    selectedTab.style.display = 'block';
  }

  // Activate selected tab button
  const selectedButton = document.querySelector(`[data-tab="${tabName}"]`);
  if (selectedButton) {
    selectedButton.style.color = 'var(--text-dark)';
    selectedButton.style.borderBottomColor = 'var(--primary)';
  }
}

// Load gallery images for a breed
async function loadGalleryImages(breed) {
  try {
    const response = await fetch(`${window.AppConfig.API_BASE_URL}/breed/${breed.apiKey}/images`);
    const data = await response.json();

    if (data.status === 'success' && data.message.length > 0) {
      const galleryContainer = document.getElementById('breed-gallery');
      if (galleryContainer) {
        // Limit to 12 images for performance
        const images = data.message.slice(0, 12);
        galleryContainer.innerHTML = images.map((imageUrl, index) => `
          <div style="background: var(--border-dark); border-radius: 8px; overflow: hidden; aspect-ratio: 1; cursor: pointer;" onclick="openImageModal('${imageUrl}', '${breed.name}')">
            <img src="${imageUrl}" alt="${breed.name} ${index + 1}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
          </div>
        `).join('');
      }
    }
  } catch (error) {
    console.log(`Failed to load gallery for ${breed.name}`);
    const galleryContainer = document.getElementById('breed-gallery');
    if (galleryContainer) {
      galleryContainer.innerHTML = '<p style="color: var(--subtext-dark); text-align: center; grid-column: 1/-1;">Unable to load gallery images</p>';
    }
  }
}

// Simple image modal for gallery
function openImageModal(imageUrl, breedName) {
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    cursor: pointer;
  `;
  
  modal.innerHTML = `
    <div style="position: relative; max-width: 90%; max-height: 90%;">
      <img src="${imageUrl}" alt="${breedName}" style="max-width: 100%; max-height: 100%; border-radius: 8px;">
      <button style="position: absolute; top: -40px; right: 0; background: none; border: none; color: white; font-size: 24px; cursor: pointer;">✕</button>
    </div>
  `;
  
  modal.onclick = () => document.body.removeChild(modal);
  document.body.appendChild(modal);
}

// Export functions for global access
window.showDetails = showDetails;
window.switchTab = switchTab;
window.loadGalleryImages = loadGalleryImages;
window.openImageModal = openImageModal;