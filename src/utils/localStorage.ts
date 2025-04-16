
// Utility functions for working with localStorage

// Check if localStorage is available
export const isLocalStorageAvailable = (): boolean => {
  try {
    const testKey = '__test__';
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
};

// Get data from localStorage
export const getLocalStorage = <T>(key: string, defaultValue: T): T => {
  try {
    if (!isLocalStorageAvailable()) return defaultValue;
    
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error retrieving ${key} from localStorage:`, error);
    return defaultValue;
  }
};

// Set data to localStorage
export const setLocalStorage = <T>(key: string, value: T): void => {
  try {
    if (!isLocalStorageAvailable()) return;
    
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting ${key} in localStorage:`, error);
  }
};

// Remove data from localStorage
export const removeLocalStorage = (key: string): void => {
  try {
    if (!isLocalStorageAvailable()) return;
    
    window.localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing ${key} from localStorage:`, error);
  }
};

// Clear all localStorage data
export const clearLocalStorage = (): void => {
  try {
    if (!isLocalStorageAvailable()) return;
    
    window.localStorage.clear();
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};

// Add item to array in localStorage
export const addToLocalStorageArray = <T>(key: string, value: T, maxItems: number = 10): void => {
  try {
    if (!isLocalStorageAvailable()) return;
    
    const array = getLocalStorage<T[]>(key, []);
    
    // Remove item if it already exists to avoid duplicates
    const filteredArray = array.filter(item => 
      JSON.stringify(item) !== JSON.stringify(value)
    );
    
    // Add new item to the beginning
    const newArray = [value, ...filteredArray].slice(0, maxItems);
    
    setLocalStorage(key, newArray);
  } catch (error) {
    console.error(`Error adding to ${key} array in localStorage:`, error);
  }
};

// Get recently viewed recipes
export const getRecentlyViewed = () => getLocalStorage<string[]>('recentlyViewed', []);

// Add recipe to recently viewed
export const addToRecentlyViewed = (recipeId: string) => {
  addToLocalStorageArray('recentlyViewed', recipeId, 5);
};
