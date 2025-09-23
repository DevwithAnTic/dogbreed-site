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

    // Handle swipe gestures if needed in the future
    // Currently no specific swipe actions needed since image gallery was removed
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
    }
  `;
  document.head.appendChild(style);
}

// Export function for global access
window.setupMobileGestures = setupMobileGestures;