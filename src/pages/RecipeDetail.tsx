
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import BackToEra from '../components/BackToEra';
import RecipeHeader from '../components/RecipeHeader';
import IngredientsSection from '../components/IngredientsSection';
import InstructionsSection from '../components/InstructionsSection';
import NutritionSection from '../components/NutritionSection';
import SecretRecipeMessage from '../components/SecretRecipeMessage';
import UserNotes from '../components/UserNotes';
import RecipeRating from '../components/RecipeRating';
import CookingMode from '../components/CookingMode';
import Footer from '../components/Footer';
import { getRecipeBySlug } from '../data/recipes';
import { Recipe } from '../types/recipe';
import { useToast } from '@/hooks/use-toast';
import { getEraType, getContainerClasses } from '../utils/eraStyles';
import { useRecipe } from '../context/RecipeContext';
import { motion } from 'framer-motion';

const RecipeDetail: React.FC = () => {
  const { era, slug } = useParams<{ era: string; slug: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { getEffectiveRecipe, addToRecentlyViewed } = useRecipe();
  
  useEffect(() => {
    if (slug) {
      const foundRecipe = getRecipeBySlug(slug);
      if (foundRecipe) {
        // Get the user modified version if it exists
        const effectiveRecipe = getEffectiveRecipe(foundRecipe.id);
        
        if (effectiveRecipe) {
          setRecipe(effectiveRecipe);
          document.title = `${effectiveRecipe.title} - Culinary Time Rifts`;
          
          // Add to recently viewed
          addToRecentlyViewed(effectiveRecipe.id);
        } else {
          setRecipe(foundRecipe);
          document.title = `${foundRecipe.title} - Culinary Time Rifts`;
          
          // Add to recently viewed
          addToRecentlyViewed(foundRecipe.id);
        }
      } else {
        toast({
          title: "Recipe not found",
          description: "This recipe doesn't exist in this timeline.",
          variant: "destructive"
        });
        navigate(`/${era}`);
      }
    }
    
    setIsLoading(false);
  }, [slug, era, navigate, toast, getEffectiveRecipe, addToRecentlyViewed]);
  
  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }
  
  if (!recipe) {
    return null;
  }
  
  const eraType = getEraType(era);
  
  return (
    <div className={`min-h-screen flex flex-col ${getContainerClasses(eraType)}`}>
      <Navigation />
      
      <div className="flex-grow container mx-auto px-4 py-16">
        <BackToEra era={era || ''} />
        
        <div className="max-w-4xl mx-auto">
          <RecipeHeader recipe={recipe} eraType={eraType} />
          
          <div className="mt-6 flex justify-between items-center">
            <RecipeRating recipeId={recipe.id} eraType={eraType} />
            <CookingMode recipeId={recipe.id} eraType={eraType} />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
          >
            <IngredientsSection ingredients={recipe.ingredients} eraType={eraType} />
            <InstructionsSection steps={recipe.steps} eraType={eraType} />
          </motion.div>
          
          <NutritionSection 
            calories={recipe.calories}
            protein={recipe.protein}
            carbs={recipe.carbs}
            fat={recipe.fat}
            eraType={eraType}
          />
          
          <UserNotes recipeId={recipe.id} eraType={eraType} />
          
          <SecretRecipeMessage isSecret={!!recipe.isSecret} eraType={eraType} era={era || ''} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RecipeDetail;
