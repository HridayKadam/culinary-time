
import React from 'react';
import { motion } from 'framer-motion';
import RecipeStep from './RecipeStep';
import { Step } from '../types/recipe';
import { getSectionClasses, getTitleClasses } from '../utils/eraStyles';

interface InstructionsSectionProps {
  steps: Step[];
  eraType: 'medieval' | 'cyberpunk' | 'apocalyptic';
}

const InstructionsSection: React.FC<InstructionsSectionProps> = ({ steps, eraType }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className={`p-6 rounded-lg md:col-span-2 ${getSectionClasses(eraType)}`}
    >
      <h2 className={`text-xl font-bold mb-4 ${getTitleClasses(eraType)}`}>Instructions</h2>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <RecipeStep
            key={index}
            step={step}
            eraType={eraType}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default InstructionsSection;
