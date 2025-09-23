// Breed Size Classification Logic

/**
 * Enhanced breed size classification function with comprehensive database lookup
 * Supports both main breeds and sub-breeds from breed.apiKey parsing
 * Implements primary database lookup with breed key matching
 * Includes caching for improved performance during filtering
 * 
 * @param {Object} breed - Breed object with apiKey property
 * @returns {string} Size classification: 'Small', 'Medium', or 'Large'
 */
function getBreedSize(breed) {
  // Check cache first for performance optimization
  if (breed && breed.apiKey && window.AppConfig.breedSizeCache.has(breed.apiKey)) {
    const cachedResult = window.AppConfig.breedSizeCache.get(breed.apiKey);
    // Handle both legacy string cache and new object cache
    return typeof cachedResult === 'string' ? cachedResult : cachedResult.size;
  }

  // Use the enhanced error handling wrapper
  const result = classifyBreedSizeWithErrorHandling(breed);

  // Cache the full result for future use
  if (breed && breed.apiKey && result) {
    window.AppConfig.breedSizeCache.set(breed.apiKey, result);
  }

  // Return just the size for backward compatibility
  return result.size;
}

/**
 * Enhanced breed size classification with confidence indicators
 * Returns complete classification result including confidence and source
 * 
 * @param {Object} breed - Breed object with apiKey property
 * @returns {Object} Classification result with size, confidence, source, and pattern
 */
function getBreedSizeWithConfidence(breed) {
  // Check cache first for performance optimization
  if (breed && breed.apiKey && window.AppConfig.breedSizeCache.has(breed.apiKey)) {
    // Return cached full result if available
    const cachedResult = window.AppConfig.breedSizeCache.get(breed.apiKey);
    if (typeof cachedResult === 'object' && cachedResult.size) {
      return cachedResult;
    }
    // Legacy cache entry (string only) - re-classify once
    const result = classifyBreedSizeWithErrorHandling(breed);
    window.AppConfig.breedSizeCache.set(breed.apiKey, result); // Update cache with full result
    return result;
  }

  // Use the enhanced error handling wrapper
  const result = classifyBreedSizeWithErrorHandling(breed);

  // Cache the full result for future use
  if (breed && breed.apiKey && result) {
    window.AppConfig.breedSizeCache.set(breed.apiKey, result);
  }

  return result;
}

/**
 * Formats breed size display with confidence indicators
 * Shows confidence indicators for classifications with lower confidence
 * 
 * @param {Object} breed - Breed object with apiKey property
 * @returns {string} HTML string with size and confidence indicator
 */
function formatBreedSizeWithConfidence(breed) {
  const classification = getBreedSizeWithConfidence(breed);

  if (!classification || !classification.size) {
    return '<span class="size-text medium" aria-label="Medium size breed, typically 25-60 pounds">Medium</span>';
  }

  const size = classification.size;
  const confidence = classification.confidence;
  const source = classification.source;

  // Create size text with enhanced accessibility
  const sizeClass = size.toLowerCase();
  let sizeDescription = '';
  let sizeAriaLabel = '';

  switch (sizeClass) {
    case 'small':
      sizeDescription = 'typically under 25 pounds';
      sizeAriaLabel = `Small size breed, ${sizeDescription}`;
      break;
    case 'medium':
      sizeDescription = 'typically 25-60 pounds';
      sizeAriaLabel = `Medium size breed, ${sizeDescription}`;
      break;
    case 'large':
      sizeDescription = 'typically over 60 pounds';
      sizeAriaLabel = `Large size breed, ${sizeDescription}`;
      break;
    default:
      sizeDescription = 'size classification available';
      sizeAriaLabel = `${size} size breed, ${sizeDescription}`;
  }

  const sizeText = `<span class="size-text ${sizeClass}" aria-label="${sizeAriaLabel}" title="${size} breed - ${sizeDescription}">${size}</span>`;

  // Only show confidence indicators for medium and low confidence classifications
  if (confidence === 'medium' || confidence === 'low' || confidence === 'pattern') {
    let indicatorClass = confidence;
    let indicatorText = '';
    let indicatorTitle = '';

    switch (confidence) {
      case 'medium':
        indicatorText = '~';
        indicatorTitle = 'Medium confidence classification based on partial breed name match';
        break;
      case 'low':
        indicatorText = '?';
        indicatorTitle = 'Low confidence classification - size may vary';
        break;
      case 'pattern':
        indicatorText = '~';
        indicatorClass = 'pattern';
        indicatorTitle = 'Pattern-based classification from breed name analysis';
        break;
      default:
        indicatorText = '*';
        indicatorClass = 'unknown';
        indicatorTitle = 'Classification based on default sizing';
    }

    return `${sizeText}<span class="confidence-indicator ${indicatorClass}" title="${indicatorTitle}" tabindex="0" role="button" aria-label="${indicatorTitle}">${indicatorText}</span>`;
  }

  return sizeText;
}

/**
 * Enhanced error handling wrapper for breed size classification
 * Provides comprehensive error handling and fallback mechanisms
 * 
 * @param {Object} breed - Breed object with apiKey property
 * @returns {Object} Classification result with size, confidence, source, and error handling
 */
function classifyBreedSizeWithErrorHandling(breed) {
  try {
    // Input validation
    if (!breed || typeof breed !== 'object') {
      return {
        size: 'Medium',
        confidence: 'low',
        source: 'error_fallback',
        error: 'Invalid breed object provided'
      };
    }

    if (!breed.apiKey || typeof breed.apiKey !== 'string') {
      return {
        size: 'Medium',
        confidence: 'low',
        source: 'error_fallback',
        error: 'Missing or invalid apiKey'
      };
    }

    // Attempt primary classification
    const result = classifyBreedSizePrimary(breed);
    
    if (result && result.size) {
      return result;
    }

    // Fallback to pattern-based classification
    const patternResult = getBreedSizeByPattern(breed.apiKey);
    if (patternResult && patternResult.size) {
      return {
        size: patternResult.size,
        confidence: patternResult.confidence || 'pattern',
        source: 'pattern_fallback',
        pattern: patternResult.pattern
      };
    }

    // Final fallback
    return {
      size: 'Medium',
      confidence: 'low',
      source: 'default_fallback',
      error: 'No classification method succeeded'
    };

  } catch (error) {
    console.warn('Error in breed size classification:', error);
    return {
      size: 'Medium',
      confidence: 'low',
      source: 'exception_fallback',
      error: error.message
    };
  }
}

/**
 * Primary breed size classification using comprehensive database lookup
 * 
 * @param {Object} breed - Breed object with apiKey property
 * @returns {Object|null} Classification result or null if not found
 */
function classifyBreedSizePrimary(breed) {
  const breedKey = breed.apiKey.toLowerCase();
  
  // Check for sub-breed override first (highest priority)
  if (window.BreedData.SUB_BREED_OVERRIDES[breedKey]) {
    const size = window.BreedData.SUB_BREED_OVERRIDES[breedKey];
    return {
      size: size.charAt(0).toUpperCase() + size.slice(1),
      confidence: 'high',
      source: 'sub_breed_override'
    };
  }

  // Parse breed key for main breed and sub-breed
  const breedParts = breedKey.split('/');
  const mainBreed = breedParts[0];
  const subBreed = breedParts[1];

  // Check main breed in database
  for (const [sizeCategory, breeds] of Object.entries(window.BreedData.BREED_SIZE_DATABASE)) {
    if (breeds[mainBreed]) {
      return {
        size: sizeCategory.charAt(0).toUpperCase() + sizeCategory.slice(1),
        confidence: 'high',
        source: 'database_main_breed'
      };
    }
  }

  // Check sub-breed in database if present
  if (subBreed) {
    for (const [sizeCategory, breeds] of Object.entries(window.BreedData.BREED_SIZE_DATABASE)) {
      if (breeds[subBreed]) {
        return {
          size: sizeCategory.charAt(0).toUpperCase() + sizeCategory.slice(1),
          confidence: 'medium',
          source: 'database_sub_breed'
        };
      }
    }
  }

  return null;
}

/**
 * Pattern-based breed size classification fallback
 * Uses keyword patterns to classify breeds not in the primary database
 * 
 * @param {string} breedKey - Breed API key (e.g., 'retriever' or 'poodle/toy')
 * @returns {Object|null} Classification result with size and confidence, or null if no pattern matches
 */
function getBreedSizeByPattern(breedKey) {
  if (!breedKey || typeof breedKey !== 'string') {
    return null;
  }

  const key = breedKey.toLowerCase();
  
  // Check each size category's patterns
  for (const [sizeCategory, patterns] of Object.entries(window.BreedData.SIZE_PATTERNS)) {
    for (const [confidenceLevel, patternList] of Object.entries(patterns)) {
      for (const pattern of patternList) {
        if (key.includes(pattern)) {
          return {
            size: sizeCategory.charAt(0).toUpperCase() + sizeCategory.slice(1),
            confidence: confidenceLevel,
            source: 'pattern_match',
            pattern: pattern
          };
        }
      }
    }
  }

  return null;
}

// Initialize lookup tables for performance optimization
function initializeLookupTables() {
  if (window.AppConfig.isLookupTablesInitialized) return;

  // Pre-compile breed lookup table
  for (const [sizeCategory, breeds] of Object.entries(window.BreedData.BREED_SIZE_DATABASE)) {
    for (const breedKey of Object.keys(breeds)) {
      window.AppConfig.breedLookupTable.set(breedKey, sizeCategory);
    }
  }

  // Pre-compile pattern lookup table
  for (const [sizeCategory, patterns] of Object.entries(window.BreedData.SIZE_PATTERNS)) {
    for (const [confidenceLevel, patternList] of Object.entries(patterns)) {
      for (const pattern of patternList) {
        if (!window.AppConfig.patternLookupTable.has(pattern)) {
          window.AppConfig.patternLookupTable.set(pattern, []);
        }
        window.AppConfig.patternLookupTable.get(pattern).push({
          size: sizeCategory,
          confidence: confidenceLevel
        });
      }
    }
  }

  window.AppConfig.isLookupTablesInitialized = true;
  console.log('🚀 Lookup tables initialized for optimal performance');
}

// Export functions for global access
window.getBreedSize = getBreedSize;
window.getBreedSizeWithConfidence = getBreedSizeWithConfidence;
window.formatBreedSizeWithConfidence = formatBreedSizeWithConfidence;
window.initializeLookupTables = initializeLookupTables;