// Search and Filter Logic

function setupSearch() {
  document.getElementById('search').addEventListener('input', applyFilters);
}

function setupFilters() {
  const sizeFilter = document.getElementById('sizeFilter');
  const sortBy = document.getElementById('sortBy');
  const randomBreed = document.getElementById('randomBreed');
  const clearFilters = document.getElementById('clearFilters');

  // Standard event listeners
  sizeFilter.addEventListener('change', applyFilters);
  sortBy.addEventListener('change', applyFilters);

  // Random breed button functionality
  if (randomBreed) {
    randomBreed.addEventListener('click', () => {
      const mainBreeds = window.AppConfig.allBreeds.filter(breed => breed.isMainBreed);
      if (mainBreeds.length > 0) {
        const randomBreedData = mainBreeds[Math.floor(Math.random() * mainBreeds.length)];
        showDetails(randomBreedData.id);
        announceFilterChange(`Showing random breed: ${randomBreedData.name}`);
      }
    });
  }

  // Clear filters button functionality
  if (clearFilters) {
    clearFilters.addEventListener('click', () => {
      // Clear all filters
      document.getElementById('search').value = '';
      sizeFilter.value = '';
      sortBy.value = 'name';
      
      // Apply filters to show all breeds
      applyFilters();
      announceFilterChange('All filters cleared, showing all breeds');
    });
  }

  // Enhanced keyboard navigation for size filter
  sizeFilter.addEventListener('keydown', (e) => {
    // Allow quick navigation with number keys
    switch (e.key) {
      case '1':
        e.preventDefault();
        sizeFilter.value = '';
        applyFilters();
        announceFilterChange('All sizes selected');
        break;
      case '2':
        e.preventDefault();
        sizeFilter.value = 'small';
        applyFilters();
        announceFilterChange('Small breeds selected - typically under 25 pounds');
        break;
      case '3':
        e.preventDefault();
        sizeFilter.value = 'medium';
        applyFilters();
        announceFilterChange('Medium breeds selected - typically 25 to 60 pounds');
        break;
      case '4':
        e.preventDefault();
        sizeFilter.value = 'large';
        applyFilters();
        announceFilterChange('Large breeds selected - typically over 60 pounds');
        break;
      case 'Escape':
        e.preventDefault();
        sizeFilter.value = '';
        applyFilters();
        announceFilterChange('Size filter cleared, showing all breeds');
        break;
    }
  });

  // Enhanced keyboard navigation for sort
  sortBy.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      sortBy.value = 'name';
      applyFilters();
      announceFilterChange('Sort reset to alphabetical order');
    }
  });

  // Add keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.altKey && e.key.toLowerCase() === 'h') {
      e.preventDefault();
      toggleAccessibilityHelp();
    } else if (e.altKey && e.key.toLowerCase() === 'r') {
      e.preventDefault();
      if (randomBreed) {
        randomBreed.click();
      }
    }
  });
}

function applyFilters() {
  const query = document.getElementById('search').value.toLowerCase().trim();
  const sizeFilter = document.getElementById('sizeFilter').value.toLowerCase().trim();
  const sortBy = document.getElementById('sortBy').value;

  // Start with appropriate breed set based on search
  let filtered;
  
  if (query) {
    // When searching, include all breeds (main + sub-breeds)
    filtered = [...window.AppConfig.allBreeds];
    filtered = filtered.filter(breed => {
      const name = breed.name.toLowerCase();
      const breedGroup = (breed.breed_group || '').toLowerCase();
      return name.includes(query) || breedGroup.includes(query);
    });
  } else {
    // When not searching, show only main breeds
    filtered = window.AppConfig.allBreeds.filter(breed => breed.isMainBreed);
  }

  // Filter by size using enhanced classification system
  if (sizeFilter) {
    filtered = filtered.filter(breed => {
      try {
        const breedSize = getBreedSize(breed).toLowerCase();
        return breedSize === sizeFilter;
      } catch (error) {
        console.warn(`Error classifying breed ${breed.name}:`, error);
        // Default to medium if classification fails
        return sizeFilter === 'medium';
      }
    });
  }

  // Sort results
  switch (sortBy) {
    case 'name':
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      filtered.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'random':
      // Use Fisher-Yates shuffle for better randomization
      for (let i = filtered.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
      }
      break;
    default:
      // Keep original order
      break;
  }

  window.AppConfig.filteredBreeds = filtered;
  renderBreeds(window.AppConfig.filteredBreeds);

  // Show/hide clear filters button based on active filters
  const clearFiltersBtn = document.getElementById('clearFilters');
  if (clearFiltersBtn) {
    const hasActiveFilters = query || sizeFilter || sortBy !== 'name';
    if (hasActiveFilters) {
      clearFiltersBtn.classList.remove('hidden');
      clearFiltersBtn.classList.add('flex');
    } else {
      clearFiltersBtn.classList.add('hidden');
      clearFiltersBtn.classList.remove('flex');
    }
  }
}

/**
 * Announces filter changes to screen readers
 * @param {string} message - The message to announce
 */
function announceFilterChange(message) {
  // Create or update live region for screen reader announcements
  let liveRegion = document.getElementById('filterAnnouncements');
  if (!liveRegion) {
    liveRegion = document.createElement('div');
    liveRegion.id = 'filterAnnouncements';
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.style.cssText = 'position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;';
    document.body.appendChild(liveRegion);
  }

  // Clear and set new message
  liveRegion.textContent = '';
  setTimeout(() => {
    liveRegion.textContent = message;
  }, 100);
}

// Export functions for global access
window.setupSearch = setupSearch;
window.setupFilters = setupFilters;
window.applyFilters = applyFilters;
window.announceFilterChange = announceFilterChange;