
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ChefHat } from 'lucide-react';
import { Recipe } from '../types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
  eraType: 'medieval' | 'cyberpunk' | 'apocalyptic';
  index: number;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, eraType, index }) => {
  // Determine appropriate styles based on the era
  const getCardClasses = () => {
    if (eraType === 'medieval') {
      return "relative overflow-hidden bg-medieval-dark/80 border border-medieval shadow-lg rounded-md";
    } else if (eraType === 'cyberpunk') {
      return "relative overflow-hidden bg-cyberpunk-dark/80 border border-cyberpunk shadow-lg rounded-md";
    } else {
      return "relative overflow-hidden bg-apocalyptic-dark/80 border border-apocalyptic shadow-lg rounded-md";
    }
  };
  
  const getTitleClasses = () => {
    if (eraType === 'medieval') {
      return "text-xl font-bold mb-2 font-medieval text-medieval-light";
    } else if (eraType === 'cyberpunk') {
      return "text-xl font-bold mb-2 font-cyberpunk text-cyberpunk-light";
    } else {
      return "text-xl font-bold mb-2 font-apocalyptic text-apocalyptic-light";
    }
  };
  
  const getDescriptionClasses = () => {
    if (eraType === 'medieval') {
      return "text-sm mb-4 text-medieval-light/80";
    } else if (eraType === 'cyberpunk') {
      return "text-sm mb-4 text-cyberpunk-light/80";
    } else {
      return "text-sm mb-4 text-apocalyptic-light/80";
    }
  };
  
  // Handle special effects based on era
  const getSpecialEffects = () => {
    if (eraType === 'medieval') {
      return {
        overlay: "after:absolute after:inset-0 after:bg-medieval-texture after:opacity-30 after:mix-blend-overlay",
        animation: ""
      };
    } else if (eraType === 'cyberpunk') {
      return {
        overlay: "before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyberpunk-dark/30 before:to-cyberpunk/30 before:mix-blend-overlay",
        animation: "hover:after:animate-glitch after:absolute after:inset-0 after:border after:border-cyberpunk-light after:opacity-0 hover:after:opacity-100 after:transition-opacity"
      };
    } else {
      return {
        overlay: "after:absolute after:inset-0 after:bg-apocalyptic-texture after:opacity-30 after:mix-blend-overlay",
        animation: "hover:before:animate-pulse before:absolute before:inset-0 before:bg-apocalyptic/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity"
      };
    }
  };
  
  const effects = getSpecialEffects();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`${getCardClasses()} ${effects.overlay} ${effects.animation} hover:shadow-xl transition-all duration-300`}
    >
      <Link to={`/${eraType}/${recipe.slug}`} className="block p-5">
        <div className="relative z-10">
          <h3 className={getTitleClasses()}>{recipe.title}</h3>
          <p className={getDescriptionClasses()}>{recipe.description}</p>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span className="text-xs">{recipe.cookingTime}</span>
            </div>
            <div className="flex items-center">
              <ChefHat size={16} className="mr-1" />
              <span className="text-xs">{recipe.difficulty}</span>
            </div>
          </div>
          
          {recipe.isSecret && (
            <div className="absolute top-0 right-0 transform rotate-45 translate-x-6 -translate-y-2 bg-accent text-accent-foreground text-xs py-1 px-6 shadow-md">
              Secret
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default RecipeCard;
