
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import RecipeSearch from '../components/RecipeSearch';
import { getRecipesByEra, recipes } from '../data/recipes';
import { Recipe } from '../types/recipe';
import { toast } from '@/hooks/use-toast';

const SearchResults: React.FC = () => {
  const location = useLocation();
  const { era } = useParams<{ era?: string }>();
  const [searchResults, setSearchResults] = useState<Recipe[]>([]);
  
  useEffect(() => {
    document.title = 'Recipe Search Results - Culinary Time Rifts';
    
    const query = new URLSearchParams(location.search).get('q') || '';
    
    // Filter recipes based on era and search query
    let filteredRecipes: Recipe[] = [];
    
    if (era) {
      // Search within specific era
      filteredRecipes = getRecipesByEra(era as 'medieval' | 'cyberpunk' | 'apocalyptic');
    } else {
      // Search across all eras
      filteredRecipes = recipes;
    }
    
    // Filter by search query (case insensitive)
    const results = filteredRecipes.filter(recipe => {
      const lowerQuery = query.toLowerCase();
      
      // Search in title and description
      if (
        recipe.title.toLowerCase().includes(lowerQuery) || 
        recipe.description.toLowerCase().includes(lowerQuery)
      ) {
        return true;
      }
      
      // Search in ingredients
      const hasIngredient = recipe.ingredients.some(ingredient => 
        ingredient.name.toLowerCase().includes(lowerQuery)
      );
      
      if (hasIngredient) return true;
      
      // Search in tags
      if (recipe.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))) {
        return true;
      }
      
      return false;
    });
    
    setSearchResults(results);
    
    if (results.length === 0 && query) {
      toast({
        title: "No recipes found",
        description: `No recipes matching "${query}" were found.`,
        variant: "destructive"
      });
    }
  }, [location.search, era]);
  
  const getEraType = () => {
    if (era === 'medieval') return 'medieval';
    if (era === 'cyberpunk') return 'cyberpunk';
    if (era === 'apocalyptic') return 'apocalyptic';
    return 'all';
  };
  
  const eraType = getEraType();
  
  const getHeaderClasses = () => {
    if (eraType === 'medieval') {
      return "text-medieval font-medieval";
    } else if (eraType === 'cyberpunk') {
      return "text-cyberpunk font-cyberpunk";
    } else if (eraType === 'apocalyptic') {
      return "text-apocalyptic font-apocalyptic";
    } else {
      return "text-rift font-rift";
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <div className="flex-grow container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className={`text-3xl md:text-4xl font-bold mb-6 ${getHeaderClasses()}`}>
            Recipe Search Results
          </h1>
          
          <div className="mb-8 max-w-xl">
            <RecipeSearch eraType={eraType as 'medieval' | 'cyberpunk' | 'apocalyptic' | 'all'} />
          </div>
          
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((recipe, index) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  eraType={recipe.era}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center py-16"
            >
              <p className="text-lg text-muted-foreground">No recipes found matching your search criteria.</p>
              <p className="mt-2 text-muted-foreground">Try using different keywords or exploring our era pages.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SearchResults;
