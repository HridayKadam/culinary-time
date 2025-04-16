
import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRecipe } from '../context/RecipeContext';

interface RecipeFavoriteProps {
  recipeId: string;
  eraType: 'medieval' | 'cyberpunk' | 'apocalyptic';
}

const RecipeFavorite: React.FC<RecipeFavoriteProps> = ({ recipeId, eraType }) => {
  const { toggleFavorite, isFavorite } = useRecipe();
  const favorited = isFavorite(recipeId);
  
  const getHeartClasses = () => {
    if (eraType === 'medieval') {
      return favorited ? "text-medieval fill-medieval" : "text-medieval-light/70";
    } else if (eraType === 'cyberpunk') {
      return favorited ? "text-cyberpunk fill-cyberpunk" : "text-cyberpunk-light/70";
    } else {
      return favorited ? "text-apocalyptic fill-apocalyptic" : "text-apocalyptic-light/70";
    }
  };
  
  return (
    <motion.button
      onClick={() => toggleFavorite(recipeId)}
      whileTap={{ scale: 0.8 }}
      className="flex items-center justify-center p-2 rounded-full hover:bg-background/10 transition-colors"
    >
      <Heart className={getHeartClasses()} />
    </motion.button>
  );
};

export default RecipeFavorite;
