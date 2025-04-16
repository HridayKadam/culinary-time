
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { getSectionClasses, getTitleClasses, getButtonClasses } from '../utils/eraStyles';

interface SecretRecipeMessageProps {
  isSecret: boolean;
  eraType: 'medieval' | 'cyberpunk' | 'apocalyptic';
  era: string;
}

const SecretRecipeMessage: React.FC<SecretRecipeMessageProps> = ({ 
  isSecret, eraType, era 
}) => {
  const navigate = useNavigate();
  
  if (!isSecret) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className={`mt-8 p-6 rounded-lg text-center ${getSectionClasses(eraType)}`}
    >
      <h3 className={`text-xl font-bold mb-2 ${getTitleClasses(eraType)}`}>Secret Recipe Discovered!</h3>
      <p className="opacity-80 mb-4">
        You've uncovered a rare culinary secret from this era. This knowledge was once only
        shared with the most trusted cooks and food artisans.
      </p>
      <Button 
        onClick={() => navigate(`/${era}`)}
        className={`mt-2 ${getButtonClasses(eraType)}`}
      >
        Explore More Recipes
      </Button>
    </motion.div>
  );
};

export default SecretRecipeMessage;
