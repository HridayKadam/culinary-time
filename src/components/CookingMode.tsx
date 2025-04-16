
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChefHat, X, ChevronLeft, ChevronRight, Clock, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRecipe } from '../context/RecipeContext';
import { Recipe } from '../types/recipe';

interface CookingModeProps {
  recipeId: string;
  eraType: 'medieval' | 'cyberpunk' | 'apocalyptic';
}

const CookingMode: React.FC<CookingModeProps> = ({ recipeId, eraType }) => {
  const { enterCookingMode, exitCookingMode, isInCookingMode, getEffectiveRecipe } = useRecipe();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const recipe = getEffectiveRecipe(recipeId) as Recipe;
  
  if (!recipe) return null;
  
  const totalSteps = recipe.steps.length;
  const inCookingMode = isInCookingMode();
  
  const getEraStyles = () => {
    switch(eraType) {
      case 'medieval':
        return "bg-medieval/10 border-medieval text-medieval";
      case 'cyberpunk':
        return "bg-cyberpunk/10 border-cyberpunk text-cyberpunk";
      case 'apocalyptic':
        return "bg-apocalyptic/10 border-apocalyptic text-apocalyptic";
      default:
        return "bg-primary/10 border-primary text-primary";
    }
  };
  
  const getButtonStyles = () => {
    switch(eraType) {
      case 'medieval':
        return "bg-medieval hover:bg-medieval/80 text-white";
      case 'cyberpunk':
        return "bg-cyberpunk hover:bg-cyberpunk/80 text-white";
      case 'apocalyptic':
        return "bg-apocalyptic hover:bg-apocalyptic/80 text-white";
      default:
        return "bg-primary hover:bg-primary/80 text-white";
    }
  };
  
  const nextStep = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };
  
  const previousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };
  
  const handleToggleCookingMode = () => {
    if (inCookingMode) {
      exitCookingMode();
      setCurrentStepIndex(0);
    } else {
      enterCookingMode(recipeId);
    }
  };
  
  // If not in cooking mode, just show the button
  if (!inCookingMode) {
    return (
      <Button
        onClick={handleToggleCookingMode}
        className={`flex items-center gap-2 ${getButtonStyles()}`}
      >
        <ChefHat className="h-4 w-4" />
        Start Cooking Mode
      </Button>
    );
  }
  
  // If in cooking mode, show the full interface
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm`}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`w-full max-w-2xl rounded-lg border-2 ${getEraStyles()} bg-background p-6`}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <ChefHat className="h-6 w-6" />
            <h2 className="text-xl font-bold">Cooking Mode</h2>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleToggleCookingMode}
            className="hover:bg-muted rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{recipe.title}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            {recipe.cookingTime}
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-2 text-sm">
          <span>Step {currentStepIndex + 1} of {totalSteps}</span>
          <span>{Math.round(((currentStepIndex + 1) / totalSteps) * 100)}% complete</span>
        </div>
        
        <div className="w-full bg-muted rounded-full h-2 mb-6">
          <div 
            className={`h-2 rounded-full`}
            style={{
              width: `${((currentStepIndex + 1) / totalSteps) * 100}%`,
              backgroundColor: eraType === 'medieval' ? '#8B4513' : 
                              eraType === 'cyberpunk' ? '#00FFFF' : 
                              '#FF4500'
            }}
          />
        </div>
        
        <div className="bg-card rounded-lg p-6 mb-6 min-h-[200px]">
          <h4 className="font-semibold mb-4">Step {currentStepIndex + 1}</h4>
          <p className="text-lg">{recipe.steps[currentStepIndex].instructions}</p>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-semibold">Ingredients Needed:</h4>
          <ul className="space-y-1">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 flex-shrink-0" />
                <span>{ingredient.quantity} {ingredient.name}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-8 flex justify-between">
          <Button
            onClick={previousStep}
            disabled={currentStepIndex === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          
          {currentStepIndex < totalSteps - 1 ? (
            <Button
              onClick={nextStep}
              className={`flex items-center gap-2 ${getButtonStyles()}`}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={handleToggleCookingMode}
              className={`flex items-center gap-2 ${getButtonStyles()}`}
            >
              Finish
              <Check className="h-4 w-4" />
            </Button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CookingMode;
