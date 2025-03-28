
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Step } from '../types/recipe';

interface RecipeStepProps {
  step: Step;
  eraType: 'medieval' | 'cyberpunk' | 'apocalyptic';
  index: number;
}

const RecipeStep: React.FC<RecipeStepProps> = ({ step, eraType, index }) => {
  const [isComplete, setIsComplete] = useState(false);
  
  const getContainerClasses = () => {
    const baseClasses = "step-container";
    
    if (eraType === 'medieval') {
      return `${baseClasses} medieval-step ${isComplete ? 'border-medieval-accent' : ''}`;
    } else if (eraType === 'cyberpunk') {
      return `${baseClasses} cyberpunk-step ${isComplete ? 'border-cyberpunk-accent' : ''}`;
    } else {
      return `${baseClasses} apocalyptic-step ${isComplete ? 'border-apocalyptic-accent' : ''}`;
    }
  };
  
  const getNumberClasses = () => {
    if (eraType === 'medieval') {
      return "text-xl font-bold font-medieval text-medieval-accent";
    } else if (eraType === 'cyberpunk') {
      return "text-xl font-bold font-cyberpunk text-cyberpunk-accent";
    } else {
      return "text-xl font-bold font-apocalyptic text-apocalyptic-accent";
    }
  };
  
  const getTextClasses = () => {
    if (eraType === 'medieval') {
      return "mt-2 font-medieval";
    } else if (eraType === 'cyberpunk') {
      return "mt-2 font-cyberpunk";
    } else {
      return "mt-2 font-apocalyptic";
    }
  };
  
  // Get era-specific animations
  const getAnimations = () => {
    if (eraType === 'medieval') {
      return {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: 'auto' },
        transition: { delay: index * 0.3, duration: 0.6 }
      };
    } else if (eraType === 'cyberpunk') {
      return {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        transition: { delay: index * 0.15, duration: 0.4 }
      };
    } else {
      return {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: { delay: index * 0.2, duration: 0.5 }
      };
    }
  };
  
  // Era-specific interactive elements
  const renderInteractiveElement = () => {
    if (eraType === 'medieval') {
      return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 + index * 0.3 }}
          onClick={() => setIsComplete(!isComplete)}
          className="mt-4 cursor-pointer"
        >
          <div className={`inline-block py-2 px-4 rounded-sm border ${isComplete ? 'border-medieval-accent' : 'border-medieval'} transition-colors duration-300`}>
            <span className="font-medieval text-sm">
              {isComplete ? 'Completed' : 'Mark as Complete'}
            </span>
          </div>
        </motion.div>
      );
    } else if (eraType === 'cyberpunk') {
      return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 + index * 0.15 }}
          onClick={() => setIsComplete(!isComplete)}
          className="mt-4 cursor-pointer"
        >
          <div className={`inline-block py-1 px-3 rounded-md bg-cyberpunk-dark border ${isComplete ? 'border-cyberpunk-accent' : 'border-cyberpunk'} transition-all duration-300`}>
            <span className="font-cyberpunk text-sm inline-block relative">
              {isComplete ? '[COMPLETED]' : '[EXECUTE]'}
              <motion.span 
                animate={{ 
                  opacity: [1, 0.5, 1],
                  x: [0, 2, 0, -2, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2 
                }}
                className="absolute inset-0"
              >
                {isComplete ? '[COMPLETED]' : '[EXECUTE]'}
              </motion.span>
            </span>
          </div>
        </motion.div>
      );
    } else {
      return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 + index * 0.2 }}
          onClick={() => setIsComplete(!isComplete)}
          className="mt-4 cursor-pointer"
        >
          <div className={`inline-block py-1 px-3 rounded-sm bg-apocalyptic-dark border-2 border-dashed ${isComplete ? 'border-apocalyptic-accent' : 'border-apocalyptic'} transition-colors duration-300`}>
            <span className="font-apocalyptic text-sm relative inline-block">
              {isComplete ? 'SURVIVED' : 'SURVIVE THIS STEP'}
              {!isComplete && (
                <motion.span 
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 1, repeatType: 'reverse' }}
                  className="ml-1"
                >
                  _
                </motion.span>
              )}
            </span>
          </div>
        </motion.div>
      );
    }
  };
  
  return (
    <motion.div
      className={getContainerClasses()}
      {...getAnimations()}
    >
      <div className="flex">
        <div className={getNumberClasses()}>Step {index + 1}</div>
        {isComplete && (
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="ml-2"
          >
            ✓
          </motion.div>
        )}
      </div>
      <div className={getTextClasses()}>
        {step.instructions}
      </div>
      
      {step.note && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.5 + index * 0.2 }}
          className="mt-3 text-sm italic opacity-80"
        >
          Note: {step.note}
        </motion.div>
      )}
      
      {renderInteractiveElement()}
    </motion.div>
  );
};

export default RecipeStep;
