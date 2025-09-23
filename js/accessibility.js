// Accessibility Features

function setupAccessibilityFeatures() {
  // Enhanced focus management for confidence indicators
  document.addEventListener('keydown', (e) => {
    // Enhanced keyboard navigation shortcuts
    if (e.altKey && e.key.toLowerCase() === 'h') {
      e.preventDefault();
      toggleAccessibilityHelp();
    }
  });

  // Add focus indicators for dynamically created elements
  const style = document.createElement('style');
  style.textContent = `
    .card:focus {
      outline: 2px solid var(--primary);
      outline-offset: 2px;
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
    }
    
    .card:focus-visible {
      outline: 2px solid var(--primary);
      outline-offset: 2px;
    }
  `;
  document.head.appendChild(style);
}

function toggleAccessibilityHelp() {
  const helpSection = document.getElementById('accessibilityHelp');
  
  if (helpSection.classList.contains('sr-only')) {
    // Show help
    helpSection.classList.remove('sr-only');
    helpSection.style.cssText = `
      background: var(--card-dark);
      border: 2px solid var(--primary);
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 16px;
      color: var(--text-dark);
    `;
    helpSection.focus();
    
    // Add close button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close Help (Alt+H)';
    closeButton.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: var(--primary);
      color: white;
      padding: 8px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    `;
    closeButton.onclick = toggleAccessibilityHelp;
    helpSection.style.position = 'relative';
    helpSection.appendChild(closeButton);
    
  } else {
    // Hide help
    helpSection.classList.add('sr-only');
    helpSection.style.cssText = '';
    helpSection.innerHTML = `
      <h2>Keyboard Navigation Help</h2>
      <p>Use the following keyboard shortcuts to navigate the dog breed search:</p>
      <ul>
        <li>Tab: Navigate through interactive elements</li>
        <li>Enter/Space: Activate buttons and select options</li>
        <li>Arrow keys: Navigate within dropdown menus</li>
        <li>Numbers 1-4 in size filter: Quick size selection (1=All, 2=Small, 3=Medium, 4=Large)</li>
        <li>Escape in filters: Clear current filter</li>
        <li>Alt+R: Show random breed</li>
        <li>Alt+H: Show this help (press Alt+H to toggle)</li>
      </ul>
    `;
  }
}

// Export functions for global access
window.setupAccessibilityFeatures = setupAccessibilityFeatures;
window.toggleAccessibilityHelp = toggleAccessibilityHelp;