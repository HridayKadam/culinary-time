
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Users, ChefHat } from 'lucide-react';
import Navigation from '../components/Navigation';
import Ingredient from '../components/Ingredient';
import RecipeStep from '../components/RecipeStep';
import RecipeFavoriteButton from '../components/RecipeFavoriteButton';
import Footer from '../components/Footer';
import { getRecipeBySlug } from '../data/recipes';
import { Recipe } from '../types/recipe';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const RecipeDetail: React.FC = () => {
  const { era, slug } = useParams<{ era: string; slug: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    if (slug) {
      const foundRecipe = getRecipeBySlug(slug);
      if (foundRecipe) {
        setRecipe(foundRecipe);
        document.title = `${foundRecipe.title} - Culinary Time Rifts`;
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
  }, [slug, era, navigate, toast]);
  
  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }
  
  if (!recipe) {
    return null;
  }
  
  const getEraType = () => {
    if (era === 'medieval') return 'medieval';
    if (era === 'cyberpunk') return 'cyberpunk';
    if (era === 'apocalyptic') return 'apocalyptic';
    return 'medieval'; // Default fallback
  };
  
  const eraType = getEraType() as 'medieval' | 'cyberpunk' | 'apocalyptic';
  
  const getHeaderClasses = () => {
    if (eraType === 'medieval') {
      return "bg-medieval-dark text-medieval-light border-b border-medieval";
    } else if (eraType === 'cyberpunk') {
      return "bg-cyberpunk-dark text-cyberpunk-light border-b border-cyberpunk";
    } else {
      return "bg-apocalyptic-dark text-apocalyptic-light border-b border-apocalyptic";
    }
  };
  
  const getContainerClasses = () => {
    if (eraType === 'medieval') {
      return "bg-medieval-dark/20";
    } else if (eraType === 'cyberpunk') {
      return "bg-cyberpunk-dark/20";
    } else {
      return "bg-apocalyptic-dark/20";
    }
  };
  
  const getTitleClasses = () => {
    if (eraType === 'medieval') {
      return "font-medieval text-medieval-light";
    } else if (eraType === 'cyberpunk') {
      return "font-cyberpunk text-cyberpunk-light";
    } else {
      return "font-apocalyptic text-apocalyptic-light";
    }
  };
  
  const getSectionClasses = () => {
    if (eraType === 'medieval') {
      return "bg-medieval-dark/30 border border-medieval";
    } else if (eraType === 'cyberpunk') {
      return "bg-cyberpunk-dark/30 border border-cyberpunk";
    } else {
      return "bg-apocalyptic-dark/30 border border-apocalyptic";
    }
  };
  
  const getButtonClasses = () => {
    if (eraType === 'medieval') {
      return "";
    } else if (eraType === 'cyberpunk') {
      return "bg-cyberpunk hover:bg-cyberpunk-accent";
    } else {
      return "bg-apocalyptic hover:bg-apocalyptic-accent";
    }
  };
  
  return (
    <div className={`min-h-screen flex flex-col ${getContainerClasses()}`}>
      <Navigation />
      
      <div className="flex-grow container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => navigate(`/${era}`)}
            className="flex items-center text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to {era} recipes
          </Button>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`p-8 rounded-t-lg ${getHeaderClasses()}`}
          >
            <div className="flex justify-between items-start">
              <h1 className={`text-3xl md:text-4xl font-bold mb-3 ${getTitleClasses()}`}>
                {recipe.title}
              </h1>
              
              <RecipeFavoriteButton recipe={recipe} eraType={eraType} />
            </div>
            
            <p className="text-lg opacity-90 mb-6">{recipe.description}</p>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                <span>{recipe.cookingTime}</span>
              </div>
              <div className="flex items-center">
                <Users className="mr-2 h-5 w-5" />
                <span>Serves {recipe.servings}</span>
              </div>
              <div className="flex items-center">
                <ChefHat className="mr-2 h-5 w-5" />
                <span>{recipe.difficulty}</span>
              </div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className={`p-6 rounded-lg ${getSectionClasses()}`}
            >
              <h2 className={`text-xl font-bold mb-4 ${getTitleClasses()}`}>Ingredients</h2>
              <div className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <Ingredient
                    key={index}
                    ingredient={ingredient}
                    eraType={eraType}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className={`p-6 rounded-lg md:col-span-2 ${getSectionClasses()}`}
            >
              <h2 className={`text-xl font-bold mb-4 ${getTitleClasses()}`}>Instructions</h2>
              <div className="space-y-6">
                {recipe.steps.map((step, index) => (
                  <RecipeStep
                    key={index}
                    step={step}
                    eraType={eraType}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Additional nutritional information if available */}
          {(recipe.calories || recipe.protein || recipe.carbs || recipe.fat) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className={`mt-6 p-6 rounded-lg ${getSectionClasses()}`}
            >
              <h2 className={`text-xl font-bold mb-4 ${getTitleClasses()}`}>Nutritional Information</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                {recipe.calories && (
                  <div className="p-2 bg-background/20 rounded-md">
                    <div className="text-lg font-semibold">{recipe.calories}</div>
                    <div className="text-sm opacity-70">Calories</div>
                  </div>
                )}
                {recipe.protein && (
                  <div className="p-2 bg-background/20 rounded-md">
                    <div className="text-lg font-semibold">{recipe.protein}</div>
                    <div className="text-sm opacity-70">Protein</div>
                  </div>
                )}
                {recipe.carbs && (
                  <div className="p-2 bg-background/20 rounded-md">
                    <div className="text-lg font-semibold">{recipe.carbs}</div>
                    <div className="text-sm opacity-70">Carbs</div>
                  </div>
                )}
                {recipe.fat && (
                  <div className="p-2 bg-background/20 rounded-md">
                    <div className="text-lg font-semibold">{recipe.fat}</div>
                    <div className="text-sm opacity-70">Fat</div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
          
          {recipe.isSecret && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className={`mt-8 p-6 rounded-lg text-center ${getSectionClasses()}`}
            >
              <h3 className={`text-xl font-bold mb-2 ${getTitleClasses()}`}>Secret Recipe Discovered!</h3>
              <p className="opacity-80 mb-4">
                You've uncovered a rare culinary secret from this era. This knowledge was once only
                shared with the most trusted cooks and food artisans.
              </p>
              <Button 
                onClick={() => navigate(`/${era}`)}
                className={`mt-2 ${getButtonClasses()}`}
              >
                Explore More Recipes
              </Button>
            </motion.div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RecipeDetail;
