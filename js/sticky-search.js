// Sticky Search Bar Functionality

function setupStickySearchBar() {
  const stickySearchBar = document.getElementById('stickySearchBar');
  const stickySearchInput = document.getElementById('stickySearch');
  const mainSearchInput = document.getElementById('search');

  // Check if elements exist
  if (!stickySearchBar || !stickySearchInput || !mainSearchInput) {
    console.warn('Sticky search bar elements not found, skipping setup');
    return;
  }

  // Sticky search bar initialized successfully

  let lastScrollY = window.scrollY;
  let isScrollingUp = false;
  let scrollTimeout;

  // Sync search inputs
  function syncSearchInputs(sourceInput, targetInput) {
    targetInput.value = sourceInput.value;
    applyFilters();
  }

  // Add event listeners to sync both search inputs
  mainSearchInput.addEventListener('input', () => {
    syncSearchInputs(mainSearchInput, stickySearchInput);
  });

  stickySearchInput.addEventListener('input', () => {
    syncSearchInputs(stickySearchInput, mainSearchInput);
  });

  // Check if we're on the details page
  function isOnDetailsPage() {
    const resultsContainer = document.getElementById('results');
    if (!resultsContainer) return false;
    
    // Check if the results container has breed detail content
    const hasBreedDetail = resultsContainer.querySelector('.breed-detail-container');
    return hasBreedDetail !== null;
  }

  // Scroll detection with debouncing
  function handleScroll() {
    const currentScrollY = window.scrollY;
    const scrollDifference = currentScrollY - lastScrollY;

    // Don't show sticky search on details page
    if (isOnDetailsPage()) {
      hideSearchBar();
      return;
    }

    // Determine scroll direction
    if (Math.abs(scrollDifference) > 2) { // Only update direction for significant scrolls
      if (scrollDifference < 0) {
        isScrollingUp = true;
      } else {
        isScrollingUp = false;
      }
    }

    // Show sticky search bar when scrolling up after passing threshold
    const scrollThreshold = 80; // Show after scrolling past 80px
    const shouldShowStickyBar = isScrollingUp && currentScrollY > scrollThreshold;

    if (shouldShowStickyBar) {
      showSearchBar();
      // Clear any pending hide timeout when showing
      clearTimeout(scrollTimeout);
    } else if (!isScrollingUp && currentScrollY > scrollThreshold) {
      // Hide when scrolling down (but only if we're past the threshold)
      hideSearchBar();
      clearTimeout(scrollTimeout);
    } else if (currentScrollY <= scrollThreshold) {
      // Always hide if we're at the top
      hideSearchBar();
      clearTimeout(scrollTimeout);
    }

    lastScrollY = currentScrollY;

    // Auto-hide after 4 seconds of no scrolling (only if currently visible and scrolling up)
    if (shouldShowStickyBar) {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        hideSearchBar();
      }, 4000);
    }
  }

  // Helper functions for showing/hiding the search bar
  function showSearchBar() {
    stickySearchBar.classList.remove('-translate-y-full');
    stickySearchBar.classList.add('translate-y-0');
  }

  function hideSearchBar() {
    stickySearchBar.classList.remove('translate-y-0');
    stickySearchBar.classList.add('-translate-y-full');
  }

  // Throttled scroll event listener
  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  }

  // Add scroll event listener
  window.addEventListener('scroll', onScroll, { passive: true });

  // Initial check on page load
  if (isOnDetailsPage()) {
    hideSearchBar();
  }

  // Hide sticky bar when clicking outside or pressing escape
  document.addEventListener('click', (e) => {
    if (!stickySearchBar.contains(e.target)) {
      // Don't hide immediately, let the scroll logic handle it
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hideSearchBar();
      stickySearchInput.blur();
    }
  });

  // Focus behavior
  stickySearchInput.addEventListener('focus', () => {
    clearTimeout(scrollTimeout); // Don't auto-hide while focused
    // Update icon color on focus
    const icon = stickySearchBar.querySelector('.material-icons');
    if (icon) {
      icon.classList.remove('text-[var(--subtext-dark)]');
      icon.classList.add('text-[var(--primary)]');
    }
  });

  stickySearchInput.addEventListener('blur', () => {
    // Reset icon color on blur
    const icon = stickySearchBar.querySelector('.material-icons');
    if (icon) {
      icon.classList.remove('text-[var(--primary)]');
      icon.classList.add('text-[var(--subtext-dark)]');
    }
    // Resume auto-hide behavior after blur
    scrollTimeout = setTimeout(() => {
      if (!isScrollingUp || window.scrollY <= 100) {
        hideSearchBar();
      }
    }, 1000);
  });

  // Function to hide sticky search bar (called when navigating to details)
  function hideStickySearchBar() {
    hideSearchBar();
  }

  // Function to enable/disable sticky search bar
  function setStickySearchBarEnabled(enabled) {
    if (!enabled) {
      hideSearchBar();
    }
    // The scroll handler will check isOnDetailsPage() automatically
  }

  // Export functions to the sticky search bar object
  window.stickySearchBar = {
    hide: hideStickySearchBar,
    setEnabled: setStickySearchBarEnabled
  };
}



// Export function for global access
window.setupStickySearchBar = setupStickySearchBar;