
import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Recipe } from '../types/recipe';
import RecipeFavorite from './RecipeFavorite';
import { motion } from 'framer-motion';
import { useRecipe } from '../context/RecipeContext';

interface RecipeFavoriteButtonProps {
  recipe: Recipe;
  eraType: 'medieval' | 'cyberpunk' | 'apocalyptic';
}

const RecipeFavoriteButton: React.FC<RecipeFavoriteButtonProps> = ({ recipe, eraType }) => {
  const { isFavorite } = useRecipe();
  
  const getButtonClass = () => {
    if (eraType === 'medieval') {
      return "border-medieval hover:bg-medieval/20";
    } else if (eraType === 'cyberpunk') {
      return "border-cyberpunk hover:bg-cyberpunk/20";
    } else {
      return "border-apocalyptic hover:bg-apocalyptic/20";
    }
  };
  
  return (
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className="flex items-center gap-2"
    >
      <Button 
        variant="outline" 
        size="sm"
        className={`flex items-center gap-2 bg-transparent ${getButtonClass()}`}
      >
        <RecipeFavorite recipeId={recipe.id} eraType={eraType} />
        <span className="text-sm">{isFavorite(recipe.id) ? 'Saved' : 'Save Recipe'}</span>
      </Button>
    </motion.div>
  );
};

export default RecipeFavoriteButton;
