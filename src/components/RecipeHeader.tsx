
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, ChefHat, Award, Copy, Edit } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import RecipeFavoriteButton from './RecipeFavoriteButton';
import { Recipe } from '../types/recipe';
import { getHeaderClasses, getTitleClasses } from '../utils/eraStyles';
import { useRecipe } from '../context/RecipeContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface RecipeHeaderProps {
  recipe: Recipe;
  eraType: 'medieval' | 'cyberpunk' | 'apocalyptic';
}

const RecipeHeader: React.FC<RecipeHeaderProps> = ({ recipe, eraType }) => {
  const { duplicateRecipe } = useRecipe();
  const navigate = useNavigate();
  
  const handleDuplicate = () => {
    const duplicated = duplicateRecipe(recipe.id);
    if (duplicated) {
      setTimeout(() => {
        navigate(`/edit/${duplicated.id}`);
      }, 500);
    }
  };
  
  const handleEdit = () => {
    if (recipe.userModified) {
      // If it's a user recipe, navigate to edit
      navigate(`/edit/${recipe.id}`);
    } else {
      // If it's an original recipe, duplicate first then navigate
      const duplicated = duplicateRecipe(recipe.id);
      if (duplicated) {
        setTimeout(() => {
          navigate(`/edit/${duplicated.id}`);
        }, 500);
      }
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`p-8 rounded-t-lg shadow-lg ${getHeaderClasses(eraType)}`}
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="space-y-4">
          <motion.h1 
            initial={{ y: -20 }} 
            animate={{ y: 0 }} 
            transition={{ delay: 0.2, duration: 0.4 }}
            className={`text-3xl md:text-4xl font-bold ${getTitleClasses(eraType)}`}
          >
            {recipe.title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg opacity-90 leading-relaxed"
          >
            {recipe.description}
          </motion.p>

          {recipe.tags && recipe.tags.length > 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap gap-2 mt-3"
            >
              {recipe.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs font-medium">
                  {tag}
                </Badge>
              ))}
            </motion.div>
          )}
        </div>
        
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleDuplicate}
                    className={`bg-transparent border-${eraType} hover:bg-${eraType}/20`}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Duplicate Recipe</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleEdit}
                    className={`bg-transparent border-${eraType} hover:bg-${eraType}/20`}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{recipe.userModified ? 'Edit Recipe' : 'Make My Version'}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <RecipeFavoriteButton recipe={recipe} eraType={eraType} />
          </div>
          
          {recipe.difficulty === 'Hard' && (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="flex items-center gap-1 text-amber-400"
            >
              <Award size={16} />
              <span className="text-xs font-semibold">Advanced Recipe</span>
            </motion.div>
          )}
          
          {recipe.userModified && (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="flex items-center gap-1 text-rift"
            >
              <Badge variant="outline" className="text-xs border-rift text-rift">
                My Recipe
              </Badge>
            </motion.div>
          )}
        </div>
      </div>
      
      <Separator className="my-6 opacity-30" />
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ delay: 0.5, duration: 0.4 }}
        className="flex flex-wrap justify-between md:justify-start gap-6 md:gap-10 items-center"
      >
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-full bg-white/10">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs opacity-80">Time</p>
            <p className="font-medium">{recipe.cookingTime}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-full bg-white/10">
            <Users className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs opacity-80">Servings</p>
            <p className="font-medium">{recipe.servings}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-full bg-white/10">
            <ChefHat className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs opacity-80">Difficulty</p>
            <p className="font-medium">{recipe.difficulty}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RecipeHeader;
