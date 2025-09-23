// Application Configuration and Global Variables

// Global state variables
let allBreeds = [];
let filteredBreeds = [];
let imageCache = new Map(); // Client-side image caching
let prefetchQueue = new Set(); // Link prefetching queue
let breedSizeCache = new Map(); // Cache for breed size classifications

// Performance optimization variables
let breedLookupTable = new Map(); // Fast O(1) breed lookups
let patternLookupTable = new Map(); // Pre-compiled pattern matches
let isLookupTablesInitialized = false;

// Initialize breed classification logging for pattern matching analysis
window.breedClassificationLogs = [];

// API Configuration
const API_BASE_URL = 'https://dog.ceo/api';
const BREEDS_ENDPOINT = `${API_BASE_URL}/breeds/list/all`;

// Breeds known to have no images in Dog CEO API
const BREEDS_WITHOUT_IMAGES = ['germanshepherd', 'african'];

// Export for use in other modules
window.AppConfig = {
  allBreeds,
  filteredBreeds,
  imageCache,
  prefetchQueue,
  breedSizeCache,
  breedLookupTable,
  patternLookupTable,
  isLookupTablesInitialized,
  API_BASE_URL,
  BREEDS_ENDPOINT,
  BREEDS_WITHOUT_IMAGES
};