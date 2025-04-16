
import React from 'react';
import { motion } from 'framer-motion';
import { getSectionClasses, getTitleClasses } from '../utils/eraStyles';

interface NutritionSectionProps {
  calories?: number;
  protein?: string;
  carbs?: string;
  fat?: string;
  eraType: 'medieval' | 'cyberpunk' | 'apocalyptic';
}

const NutritionSection: React.FC<NutritionSectionProps> = ({ 
  calories, protein, carbs, fat, eraType 
}) => {
  // Don't render if no nutritional information is available
  if (!calories && !protein && !carbs && !fat) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className={`mt-6 p-6 rounded-lg ${getSectionClasses(eraType)}`}
    >
      <h2 className={`text-xl font-bold mb-4 ${getTitleClasses(eraType)}`}>Nutritional Information</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        {calories && (
          <div className="p-2 bg-background/20 rounded-md">
            <div className="text-lg font-semibold">{calories}</div>
            <div className="text-sm opacity-70">Calories</div>
          </div>
        )}
        {protein && (
          <div className="p-2 bg-background/20 rounded-md">
            <div className="text-lg font-semibold">{protein}</div>
            <div className="text-sm opacity-70">Protein</div>
          </div>
        )}
        {carbs && (
          <div className="p-2 bg-background/20 rounded-md">
            <div className="text-lg font-semibold">{carbs}</div>
            <div className="text-sm opacity-70">Carbs</div>
          </div>
        )}
        {fat && (
          <div className="p-2 bg-background/20 rounded-md">
            <div className="text-lg font-semibold">{fat}</div>
            <div className="text-sm opacity-70">Fat</div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default NutritionSection;
