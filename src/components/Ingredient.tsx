
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Ingredient as IngredientType } from '../types/recipe';

interface IngredientProps {
  ingredient: IngredientType;
  eraType: 'medieval' | 'cyberpunk' | 'apocalyptic';
  index: number;
}

const Ingredient: React.FC<IngredientProps> = ({ ingredient, eraType, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getContainerClasses = () => {
    const baseClasses = "ingredient-artifact my-2 flex items-center";
    
    if (eraType === 'medieval') {
      return `${baseClasses} medieval-artifact`;
    } else if (eraType === 'cyberpunk') {
      return `${baseClasses} cyberpunk-artifact`;
    } else {
      return `${baseClasses} apocalyptic-artifact`;
    }
  };
  
  const getTextClasses = () => {
    if (eraType === 'medieval') {
      return "font-medieval";
    } else if (eraType === 'cyberpunk') {
      return "font-cyberpunk";
    } else {
      return "font-apocalyptic";
    }
  };
  
  const getAnimations = () => {
    if (eraType === 'medieval') {
      return {
        container: {},
        text: {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1, duration: 0.5 }
        }
      };
    } else if (eraType === 'cyberpunk') {
      return {
        container: {
          whileHover: { 
            boxShadow: '0 0 8px rgba(0, 255, 255, 0.7)',
            borderColor: '#00FFFF' 
          }
        },
        text: {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: index * 0.05, duration: 0.3 }
        }
      };
    } else {
      return {
        container: {
          whileHover: { 
            scale: 1.05,
            rotate: [-1, 1, 0],
            transition: { rotate: { repeat: 2, duration: 0.2 } }
          }
        },
        text: {
          initial: { opacity: 0, x: -10 },
          animate: { opacity: 1, x: 0 },
          transition: { delay: index * 0.15, duration: 0.6 }
        }
      };
    }
  };
  
  const animations = getAnimations();
  
  // Render special effect based on era
  const renderSpecialEffect = () => {
    if (eraType === 'medieval' && isHovered) {
      return (
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -top-2 -right-2 w-8 h-8 bg-medieval rounded-full flex items-center justify-center text-xs text-medieval-dark"
        >
          ✓
        </motion.div>
      );
    } else if (eraType === 'cyberpunk' && isHovered) {
      return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.5, 1, 0.5],
            boxShadow: [
              '0 0 5px rgba(0, 255, 255, 0.5)',
              '0 0 10px rgba(0, 255, 255, 0.8)',
              '0 0 5px rgba(0, 255, 255, 0.5)'
            ]
          }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="absolute inset-0 border border-cyberpunk-light rounded-md pointer-events-none"
        />
      );
    } else if (eraType === 'apocalyptic' && isHovered) {
      return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          className="absolute inset-0 bg-apocalyptic-light/10 rounded-md pointer-events-none"
        />
      );
    }
    return null;
  };
  
  return (
    <motion.div
      className={getContainerClasses()}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      {...animations.container}
    >
      {renderSpecialEffect()}
      <div className="w-1/5 flex justify-end pr-3 opacity-80">
        <span className="text-sm font-light">{ingredient.quantity}</span>
      </div>
      <motion.div className="w-4/5" {...animations.text}>
        <span className={`${getTextClasses()} text-base`}>{ingredient.name}</span>
        {ingredient.notes && (
          <p className="text-xs opacity-70 mt-1">{ingredient.notes}</p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Ingredient;
