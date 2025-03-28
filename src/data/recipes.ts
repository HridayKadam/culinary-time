
import { Recipe } from '../types/recipe';
import { medievalRecipes } from './medieval-recipes';
import { cyberpunkRecipes } from './cyberpunk-recipes';
import { apocalypticRecipes } from './apocalyptic-recipes';
import { additionalMedievalRecipes } from './additional-medieval-recipes';
import { additionalCyberpunkRecipes } from './additional-cyberpunk-recipes';
import { additionalApocalypticRecipes } from './additional-apocalyptic-recipes';

// Combine all recipes into one array
export const recipes: Recipe[] = [
  ...medievalRecipes,
  ...cyberpunkRecipes,
  ...apocalypticRecipes,
  ...additionalMedievalRecipes,
  ...additionalCyberpunkRecipes,
  ...additionalApocalypticRecipes
];

export const getRecipesByEra = (era: 'medieval' | 'cyberpunk' | 'apocalyptic'): Recipe[] => {
  return recipes.filter(recipe => recipe.era === era);
};

export const getRecipeBySlug = (slug: string): Recipe | undefined => {
  return recipes.find(recipe => recipe.slug === slug);
};

export const getSecretRecipes = (): Recipe[] => {
  return recipes.filter(recipe => recipe.isSecret);
};

export const getNonSecretRecipes = (): Recipe[] => {
  return recipes.filter(recipe => !recipe.isSecret);
};

export const getFeaturedRecipes = (): Recipe[] => {
  return recipes.filter(recipe => recipe.featured);
};

export const getRecipesByTag = (tag: string): Recipe[] => {
  return recipes.filter(recipe => recipe.tags?.includes(tag));
};
