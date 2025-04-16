
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { useRecipe } from '../context/RecipeContext';
import { Recipe } from '../types/recipe';

const RecentlyViewed: React.FC = () => {
  const { getRecentlyViewed, getEffectiveRecipe } = useRecipe();
  const recentIds = getRecentlyViewed();
  
  // Get actual recipe objects from IDs
  const recentRecipes: Recipe[] = recentIds
    .map(id => getEffectiveRecipe(id))
    .filter((recipe): recipe is Recipe => recipe !== undefined)
    .slice(0, 3); // Only show up to 3 recent recipes
  
  if (recentRecipes.length === 0) {
    return null;
  }
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 p-4 bg-background/80 backdrop-blur-sm border border-border rounded-lg"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-muted-foreground" />
          <h2 className="text-xl font-semibold text-foreground">Recently Viewed</h2>
        </div>
        <Link to="/favorites" className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
          View all your favorites
          <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recentRecipes.map(recipe => (
          <Link 
            key={recipe.id} 
            to={`/${recipe.era}/${recipe.slug}`}
            className="block p-3 rounded-md border border-border bg-card/50 hover:bg-card transition-colors"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium line-clamp-1">{recipe.title}</h3>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                  {recipe.era.charAt(0).toUpperCase() + recipe.era.slice(1)} • {recipe.cookingTime}
                </p>
              </div>
              <div className={`w-2 h-2 rounded-full bg-${recipe.era}`} />
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default RecentlyViewed;
