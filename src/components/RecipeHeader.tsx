
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, ChefHat } from 'lucide-react';
import RecipeFavoriteButton from './RecipeFavoriteButton';
import { Recipe } from '../types/recipe';
import { getHeaderClasses, getTitleClasses } from '../utils/eraStyles';

interface RecipeHeaderProps {
  recipe: Recipe;
  eraType: 'medieval' | 'cyberpunk' | 'apocalyptic';
}

const RecipeHeader: React.FC<RecipeHeaderProps> = ({ recipe, eraType }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`p-8 rounded-t-lg ${getHeaderClasses(eraType)}`}
    >
      <div className="flex justify-between items-start">
        <h1 className={`text-3xl md:text-4xl font-bold mb-3 ${getTitleClasses(eraType)}`}>
          {recipe.title}
        </h1>
        
        <RecipeFavoriteButton recipe={recipe} eraType={eraType} />
      </div>
      
      <p className="text-lg opacity-90 mb-6">{recipe.description}</p>
      
      <div className="flex flex-wrap gap-6">
        <div className="flex items-center">
          <Clock className="mr-2 h-5 w-5" />
          <span>{recipe.cookingTime}</span>
        </div>
        <div className="flex items-center">
          <Users className="mr-2 h-5 w-5" />
          <span>Serves {recipe.servings}</span>
        </div>
        <div className="flex items-center">
          <ChefHat className="mr-2 h-5 w-5" />
          <span>{recipe.difficulty}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeHeader;
