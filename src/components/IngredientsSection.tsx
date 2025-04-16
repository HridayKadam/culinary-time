
import React from 'react';
import { motion } from 'framer-motion';
import Ingredient from './Ingredient';
import { Ingredient as IngredientType } from '../types/recipe';
import { getSectionClasses, getTitleClasses } from '../utils/eraStyles';

interface IngredientsSectionProps {
  ingredients: IngredientType[];
  eraType: 'medieval' | 'cyberpunk' | 'apocalyptic';
}

const IngredientsSection: React.FC<IngredientsSectionProps> = ({ ingredients, eraType }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className={`p-6 rounded-lg ${getSectionClasses(eraType)}`}
    >
      <h2 className={`text-xl font-bold mb-4 ${getTitleClasses(eraType)}`}>Ingredients</h2>
      <div className="space-y-3">
        {ingredients.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            eraType={eraType}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default IngredientsSection;
