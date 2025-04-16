
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useRecipe } from '../context/RecipeContext';

interface RecipeRatingProps {
  recipeId: string;
  eraType: 'medieval' | 'cyberpunk' | 'apocalyptic';
}

const RecipeRating: React.FC<RecipeRatingProps> = ({ recipeId, eraType }) => {
  const { rateRecipe, getRecipeRating } = useRecipe();
  const currentRating = getRecipeRating(recipeId) || 0;
  const [hoverRating, setHoverRating] = useState(0);
  
  const getEraColor = () => {
    switch(eraType) {
      case 'medieval': return 'text-medieval';
      case 'cyberpunk': return 'text-cyberpunk';
      case 'apocalyptic': return 'text-apocalyptic';
      default: return 'text-foreground';
    }
  };
  
  // Star animations
  const starVariants = {
    selected: { scale: 1.2, rotate: 0, transition: { duration: 0.2 } },
    unselected: { scale: 1, rotate: 0 },
    hover: { scale: 1.3, rotate: 5, transition: { duration: 0.2 } }
  };
  
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-sm font-medium mb-2">Rate this recipe</h3>
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((rating) => (
          <motion.button
            key={rating}
            className="focus:outline-none"
            onClick={() => rateRecipe(recipeId, rating)}
            onMouseEnter={() => setHoverRating(rating)}
            onMouseLeave={() => setHoverRating(0)}
            whileTap={{ scale: 0.9 }}
            variants={starVariants}
            animate={currentRating >= rating ? 'selected' : (hoverRating >= rating ? 'hover' : 'unselected')}
          >
            <Star 
              className={`w-6 h-6 ${
                currentRating >= rating
                  ? `${getEraColor()} fill-current`
                  : hoverRating >= rating
                  ? 'text-muted-foreground'
                  : 'text-muted-foreground/40'
              }`} 
            />
          </motion.button>
        ))}
      </div>
      {currentRating > 0 && (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 text-xs text-muted-foreground"
        >
          You rated this recipe {currentRating} {currentRating === 1 ? 'star' : 'stars'}
        </motion.p>
      )}
    </div>
  );
};

export default RecipeRating;
