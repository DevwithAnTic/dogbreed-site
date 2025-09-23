// Breed Loading and API Integration

async function loadBreeds() {
  try {
    const res = await fetch(window.AppConfig.BREEDS_ENDPOINT);
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
        window.AppConfig.allBreeds.push({
          id: id++,
          name: breed.charAt(0).toUpperCase() + breed.slice(1),
          breed_group: 'Dog',
          apiKey: breed,
          isMainBreed: true
        });

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

  } catch (error) {
    document.getElementById('results').innerHTML = '<p>Error loading breeds. Please try again.</p>';
  }
}

// Service Worker registration for caching
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(() => {
    console.log('Service Worker not available, using fallback caching');
  });
}

// Export for global access
window.loadBreeds = loadBreeds;