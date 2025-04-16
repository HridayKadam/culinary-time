
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, LayoutGrid } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import { recipes } from '../data/recipes';
import { Recipe } from '../types/recipe';
import { Button } from '@/components/ui/button';

const Favorites: React.FC = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
  
  useEffect(() => {
    document.title = 'Favorite Recipes - Culinary Time Rifts';
    
    // Get favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
    
    // Filter recipes that match favorite IDs
    const favoriteRecipesList = recipes.filter(recipe => 
      favorites.includes(recipe.id)
    );
    
    setFavoriteRecipes(favoriteRecipesList);
  }, []);
  
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
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-rift">
              <span className="flex items-center gap-3">
                <Heart className="text-rift fill-rift" />
                Favorite Recipes
              </span>
            </h1>
            
            <Link to="/">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <LayoutGrid size={16} />
                <span>All Recipes</span>
              </Button>
            </Link>
          </div>
          
          {favoriteRecipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteRecipes.map((recipe, index) => (
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
              className="text-center py-16 bg-card border border-border rounded-lg"
            >
              <Heart size={64} className="mx-auto text-muted-foreground/30" />
              <h2 className="text-xl font-bold mt-4 mb-2">No Favorites Yet</h2>
              <p className="text-muted-foreground">
                Recipes you mark as favorites will appear here.
              </p>
              <Link to="/">
                <Button className="mt-6 bg-rift hover:bg-rift-accent">
                  Explore Recipes
                </Button>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Favorites;
