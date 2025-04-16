
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Recipe, UserRecipe } from '../types/recipe';
import { recipes as originalRecipes } from '../data/recipes';
import { getLocalStorage, setLocalStorage, addToRecentlyViewed, getRecentlyViewed } from '../utils/localStorage';
import { v4 as uuidv4 } from 'uuid';
import { toast } from '@/hooks/use-toast';

interface RecipeContextType {
  // Recipe retrieval
  getUserRecipes: () => UserRecipe[];
  getUserRecipeById: (id: string) => UserRecipe | undefined;
  getUserRecipeByOriginalId: (originalId: string) => UserRecipe | undefined;
  getEffectiveRecipe: (recipeId: string) => Recipe | undefined;
  
  // Recipe operations
  saveUserRecipe: (recipe: UserRecipe) => void;
  deleteUserRecipe: (recipeId: string) => void;
  duplicateRecipe: (recipeId: string) => UserRecipe | undefined;
  createRecipeFromScratch: (era: 'medieval' | 'cyberpunk' | 'apocalyptic') => UserRecipe;
  
  // Recipe notes
  saveUserNotes: (recipeId: string, notes: string) => void;
  
  // User favorites
  toggleFavorite: (recipeId: string) => void;
  isFavorite: (recipeId: string) => boolean;
  getFavorites: () => string[];
  
  // Recently viewed
  addToRecentlyViewed: (recipeId: string) => void;
  getRecentlyViewed: () => string[];
  
  // Recipe ratings
  rateRecipe: (recipeId: string, rating: number) => void;
  getRecipeRating: (recipeId: string) => number | undefined;
  
  // Cooking mode
  enterCookingMode: (recipeId: string) => void;
  exitCookingMode: () => void;
  isInCookingMode: () => boolean;
  getCurrentCookingRecipe: () => string | null;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userRecipes, setUserRecipes] = useState<UserRecipe[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [cookingModeRecipe, setCookingModeRecipe] = useState<string | null>(null);

  // Load data from localStorage on initial render
  useEffect(() => {
    const storedUserRecipes = getLocalStorage<UserRecipe[]>('userRecipes', []);
    const storedFavorites = getLocalStorage<string[]>('favoriteRecipes', []);
    const storedRatings = getLocalStorage<Record<string, number>>('recipeRatings', {});
    
    setUserRecipes(storedUserRecipes);
    setFavorites(storedFavorites);
    setRatings(storedRatings);
  }, []);

  // Save user recipes to localStorage whenever they change
  useEffect(() => {
    setLocalStorage('userRecipes', userRecipes);
  }, [userRecipes]);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    setLocalStorage('favoriteRecipes', favorites);
  }, [favorites]);

  // Save ratings to localStorage whenever they change
  useEffect(() => {
    setLocalStorage('recipeRatings', ratings);
  }, [ratings]);

  // Get all user created/modified recipes
  const getUserRecipes = () => userRecipes;

  // Get a user recipe by ID
  const getUserRecipeById = (id: string) => 
    userRecipes.find(recipe => recipe.id === id);

  // Get a user recipe by its original recipe ID
  const getUserRecipeByOriginalId = (originalId: string) =>
    userRecipes.find(recipe => recipe.originalId === originalId);

  // Get the effective recipe (user modified version if it exists, otherwise the original)
  const getEffectiveRecipe = (recipeId: string) => {
    // First check if this is a user recipe
    const userRecipe = getUserRecipeById(recipeId);
    if (userRecipe) return userRecipe;
    
    // Next check if there's a user-modified version of an original recipe
    const userModified = getUserRecipeByOriginalId(recipeId);
    if (userModified) return userModified;
    
    // Finally, return the original recipe
    return originalRecipes.find(recipe => recipe.id === recipeId);
  };

  // Save a user recipe
  const saveUserRecipe = (recipe: UserRecipe) => {
    setUserRecipes(prevRecipes => {
      const existingIndex = prevRecipes.findIndex(r => r.id === recipe.id);
      
      if (existingIndex >= 0) {
        // Update existing recipe
        const updatedRecipes = [...prevRecipes];
        updatedRecipes[existingIndex] = {
          ...recipe,
          lastModified: Date.now()
        };
        toast({
          title: "Recipe Updated",
          description: "Your changes have been saved",
        });
        return updatedRecipes;
      } else {
        // Add new recipe
        toast({
          title: "Recipe Created",
          description: "Your new recipe has been saved",
        });
        return [...prevRecipes, {
          ...recipe,
          lastModified: Date.now(),
          createdAt: Date.now()
        }];
      }
    });
  };

  // Delete a user recipe
  const deleteUserRecipe = (recipeId: string) => {
    setUserRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== recipeId));
    toast({
      title: "Recipe Deleted",
      description: "The recipe has been removed from your collection",
      variant: "destructive"
    });
  };

  // Duplicate an existing recipe
  const duplicateRecipe = (recipeId: string) => {
    const sourceToDuplicate = getEffectiveRecipe(recipeId);
    
    if (!sourceToDuplicate) {
      toast({
        title: "Error",
        description: "Recipe not found",
        variant: "destructive"
      });
      return undefined;
    }
    
    // Create a new recipe based on the source
    const newId = uuidv4();
    const duplicatedRecipe: UserRecipe = {
      ...sourceToDuplicate,
      id: newId,
      title: `Copy of ${sourceToDuplicate.title}`,
      slug: `${sourceToDuplicate.slug}-copy-${newId.substring(0, 8)}`,
      originalId: sourceToDuplicate.id,
      userModified: true,
      createdAt: Date.now(),
      lastModified: Date.now()
    };
    
    saveUserRecipe(duplicatedRecipe);
    toast({
      title: "Recipe Duplicated",
      description: "A copy has been added to your collection"
    });
    
    return duplicatedRecipe;
  };

  // Create a new recipe from scratch
  const createRecipeFromScratch = (era: 'medieval' | 'cyberpunk' | 'apocalyptic') => {
    const newId = uuidv4();
    const newRecipe: UserRecipe = {
      id: newId,
      title: "New Recipe",
      slug: `new-recipe-${newId.substring(0, 8)}`,
      description: "Add your recipe description here",
      ingredients: [{ name: "Ingredient 1", quantity: "1" }],
      steps: [{ instructions: "Add your instructions here" }],
      cookingTime: "30 mins",
      servings: 4,
      difficulty: "Easy",
      era: era,
      userModified: true,
      createdAt: Date.now(),
      lastModified: Date.now()
    };
    
    saveUserRecipe(newRecipe);
    return newRecipe;
  };

  // Save user notes for a recipe
  const saveUserNotes = (recipeId: string, notes: string) => {
    const recipe = getEffectiveRecipe(recipeId);
    
    if (!recipe) {
      toast({
        title: "Error",
        description: "Recipe not found",
        variant: "destructive"
      });
      return;
    }
    
    // Check if this is an original recipe that needs to be duplicated
    const isOriginalRecipe = originalRecipes.some(r => r.id === recipeId);
    
    if (isOriginalRecipe) {
      // Create a user version of this recipe
      const userRecipe: UserRecipe = {
        ...recipe,
        userNotes: notes,
        originalId: recipe.id,
        id: uuidv4(),
        userModified: true,
        createdAt: Date.now(),
        lastModified: Date.now()
      };
      
      saveUserRecipe(userRecipe);
    } else {
      // Update the existing user recipe
      const userRecipe = getUserRecipeById(recipeId);
      if (userRecipe) {
        saveUserRecipe({
          ...userRecipe,
          userNotes: notes
        });
      }
    }
    
    toast({
      title: "Notes Saved",
      description: "Your notes have been saved to this recipe"
    });
  };

  // Toggle favorite status of a recipe
  const toggleFavorite = (recipeId: string) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(recipeId)) {
        toast({
          description: "Removed from favorites"
        });
        return prevFavorites.filter(id => id !== recipeId);
      } else {
        toast({
          description: "Added to favorites"
        });
        return [...prevFavorites, recipeId];
      }
    });
  };

  // Check if a recipe is favorited
  const isFavorite = (recipeId: string) => favorites.includes(recipeId);

  // Get all favorite recipe IDs
  const getFavorites = () => favorites;
  
  // Recently viewed recipes
  const addToRecentlyViewedRecipe = (recipeId: string) => {
    addToRecentlyViewed(recipeId);
  };
  
  const getRecentlyViewedRecipes = () => getRecentlyViewed();
  
  // Recipe ratings
  const rateRecipe = (recipeId: string, rating: number) => {
    if (rating < 1 || rating > 5) return;
    
    setRatings(prevRatings => {
      const newRatings = { ...prevRatings, [recipeId]: rating };
      toast({
        title: "Recipe Rated",
        description: `You rated this recipe ${rating} stars!`
      });
      return newRatings;
    });
  };
  
  const getRecipeRating = (recipeId: string) => ratings[recipeId];
  
  // Cooking mode
  const enterCookingMode = (recipeId: string) => {
    setCookingModeRecipe(recipeId);
    toast({
      title: "Cooking Mode Activated",
      description: "Recipe instructions will be displayed in an easy-to-read format"
    });
  };
  
  const exitCookingMode = () => {
    setCookingModeRecipe(null);
  };
  
  const isInCookingMode = () => cookingModeRecipe !== null;
  
  const getCurrentCookingRecipe = () => cookingModeRecipe;

  const contextValue: RecipeContextType = {
    getUserRecipes,
    getUserRecipeById,
    getUserRecipeByOriginalId,
    getEffectiveRecipe,
    saveUserRecipe,
    deleteUserRecipe,
    duplicateRecipe,
    createRecipeFromScratch,
    saveUserNotes,
    toggleFavorite,
    isFavorite,
    getFavorites,
    addToRecentlyViewed: addToRecentlyViewedRecipe,
    getRecentlyViewed: getRecentlyViewedRecipes,
    rateRecipe,
    getRecipeRating,
    enterCookingMode,
    exitCookingMode,
    isInCookingMode,
    getCurrentCookingRecipe
  };

  return (
    <RecipeContext.Provider value={contextValue}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipe = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error('useRecipe must be used within a RecipeProvider');
  }
  return context;
};
