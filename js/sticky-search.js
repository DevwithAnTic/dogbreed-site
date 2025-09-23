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

  // Scroll detection with debouncing
  function handleScroll() {
    const currentScrollY = window.scrollY;
    const scrollDifference = currentScrollY - lastScrollY;

    // Determine scroll direction
    if (scrollDifference < -10) { // Scrolling up with threshold
      isScrollingUp = true;
    } else if (scrollDifference > 10) { // Scrolling down with threshold
      isScrollingUp = false;
    }

    // Show/hide sticky search bar based on conditions
    const shouldShowStickyBar = isScrollingUp && currentScrollY > 200; // Show after scrolling past 200px

    if (shouldShowStickyBar) {
      stickySearchBar.classList.add('visible');
    } else {
      stickySearchBar.classList.remove('visible');
    }

    lastScrollY = currentScrollY;

    // Clear timeout and set new one
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      // Hide sticky bar after user stops scrolling for 3 seconds
      if (!isScrollingUp || currentScrollY <= 200) {
        stickySearchBar.classList.remove('visible');
      }
    }, 3000);
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

  // Hide sticky bar when clicking outside or pressing escape
  document.addEventListener('click', (e) => {
    if (!stickySearchBar.contains(e.target)) {
      // Don't hide immediately, let the scroll logic handle it
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      stickySearchBar.classList.remove('visible');
      stickySearchInput.blur();
    }
  });

  // Focus behavior
  stickySearchInput.addEventListener('focus', () => {
    clearTimeout(scrollTimeout); // Don't auto-hide while focused
  });

  stickySearchInput.addEventListener('blur', () => {
    // Resume auto-hide behavior after blur
    scrollTimeout = setTimeout(() => {
      if (!isScrollingUp || window.scrollY <= 200) {
        stickySearchBar.classList.remove('visible');
      }
    }, 1000);
  });
}

// Export function for global access
window.setupStickySearchBar = setupStickySearchBar;