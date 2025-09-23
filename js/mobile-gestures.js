// Mobile Gestures and Touch Support

function setupMobileGestures() {
  let startX = 0;
  let startY = 0;

  document.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  });

  document.addEventListener('touchend', (e) => {
    if (!e.changedTouches[0]) return;

    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const diffX = startX - endX;
    const diffY = startY - endY;

    // Handle horizontal swipes for tab navigation in detail view
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      const tabButtons = document.querySelectorAll('.tab-button');
      const activeTab = document.querySelector('.tab-button[style*="var(--primary)"]');
      
      if (tabButtons.length > 1 && activeTab) {
        const currentIndex = Array.from(tabButtons).indexOf(activeTab);
        let nextIndex;
        
        if (diffX > 0 && currentIndex < tabButtons.length - 1) {
          // Swipe left - next tab
          nextIndex = currentIndex + 1;
        } else if (diffX < 0 && currentIndex > 0) {
          // Swipe right - previous tab
          nextIndex = currentIndex - 1;
        }
        
        if (nextIndex !== undefined) {
          const nextTab = tabButtons[nextIndex];
          const tabName = nextTab.getAttribute('data-tab');
          if (tabName && window.switchTab) {
            window.switchTab(tabName);
          }
        }
      }
    }
  });

  // Pull to refresh (simple version)
  let pullStart = 0;
  let pullDistance = 0;

  document.addEventListener('touchstart', (e) => {
    if (window.scrollY === 0) {
      pullStart = e.touches[0].clientY;
    }
  });

  document.addEventListener('touchmove', (e) => {
    if (pullStart > 0) {
      pullDistance = e.touches[0].clientY - pullStart;
      if (pullDistance > 100) {
        // Simple refresh indication
        document.body.style.transform = `translateY(${Math.min(pullDistance - 100, 50)}px)`;
      }
    }
  });

  document.addEventListener('touchend', () => {
    if (pullDistance > 150) {
      // Trigger refresh
      location.reload();
    } else {
      // Reset transform
      document.body.style.transform = '';
    }
    pullStart = 0;
    pullDistance = 0;
  });

  // Prevent zoom on double tap for better UX
  let lastTouchEnd = 0;
  document.addEventListener('touchend', (e) => {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      e.preventDefault();
    }
    lastTouchEnd = now;
  }, false);

  // Improve touch targets for better accessibility
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      button, select, input {
        min-height: 44px;
        min-width: 44px;
      }
      
      .card {
        min-height: 44px;
      }
      
      .tab-button {
        min-height: 44px;
        padding: 12px 16px;
      }
      
      .subbreed-item {
        min-height: 44px;
      }
      
      .back-button {
        min-height: 44px;
      }
      
      /* Improve scrolling for tab navigation */
      .tab-navigation {
        -webkit-overflow-scrolling: touch;
        scroll-behavior: smooth;
      }
      
      /* Better touch feedback */
      .tab-button:active,
      .back-button:active,
      .subbreed-item:active {
        transform: scale(0.98);
        opacity: 0.8;
      }
    }
  `;
  document.head.appendChild(style);
}

// Export function for global access
window.setupMobileGestures = setupMobileGestures;