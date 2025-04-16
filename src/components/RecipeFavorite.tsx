
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
      whileHover={{ scale: 1.1 }}
      className="flex items-center justify-center p-2 rounded-full hover:bg-background/10 transition-colors"
      animate={favorited ? 
        { rotate: [0, 15, -15, 15, -15, 0], scale: [1, 1.2, 1.2, 1.2, 1.2, 1] } : 
        { rotate: 0, scale: 1 }
      }
      transition={{ duration: favorited ? 0.7 : 0.2 }}
    >
      <Heart className={getHeartClasses()} />
      
      {favorited && (
        <motion.div 
          className="absolute"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.5, 0],
            opacity: [0, 0.8, 0]
          }}
          transition={{ duration: 0.7 }}
        >
          <Heart className={`${getHeartClasses()} text-opacity-70`} size={28} />
        </motion.div>
      )}
    </motion.button>
  );
};

export default RecipeFavorite;
