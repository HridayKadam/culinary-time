
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Save, Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useRecipe } from '../context/RecipeContext';
import { UserRecipe, Ingredient, Step } from '../types/recipe';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';

const RecipeEditor: React.FC = () => {
  const { id, era } = useParams<{ id?: string; era?: string }>();
  const navigate = useNavigate();
  const { getUserRecipeById, saveUserRecipe, createRecipeFromScratch, deleteUserRecipe } = useRecipe();
  
  const [recipe, setRecipe] = useState<UserRecipe | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDirty, setIsDirty] = useState(false);
  
  // Load recipe data
  useEffect(() => {
    if (id) {
      // Editing existing recipe
      const existingRecipe = getUserRecipeById(id);
      if (existingRecipe) {
        setRecipe(existingRecipe);
        document.title = `Editing: ${existingRecipe.title} - Culinary Time Rifts`;
      } else {
        toast({
          title: "Recipe not found",
          description: "This recipe couldn't be found",
          variant: "destructive"
        });
        navigate("/my-recipes");
      }
    } else if (era) {
      // Creating new recipe
      const validEra = era as 'medieval' | 'cyberpunk' | 'apocalyptic';
      const newRecipe = createRecipeFromScratch(validEra);
      setRecipe(newRecipe);
      document.title = "Create New Recipe - Culinary Time Rifts";
    } else {
      // No ID or era provided
      navigate("/");
    }
    
    setIsLoading(false);
  }, [id, era, getUserRecipeById, createRecipeFromScratch, navigate]);
  
  // Handle form field changes
  const handleChange = (field: keyof UserRecipe, value: any) => {
    if (recipe) {
      setRecipe(prev => {
        if (prev) {
          return { ...prev, [field]: value };
        }
        return prev;
      });
      setIsDirty(true);
    }
  };
  
  // Handle ingredient changes
  const handleIngredientChange = (index: number, field: keyof Ingredient, value: string) => {
    if (recipe) {
      const newIngredients = [...recipe.ingredients];
      newIngredients[index] = { ...newIngredients[index], [field]: value };
      handleChange('ingredients', newIngredients);
    }
  };
  
  // Add new ingredient
  const addIngredient = () => {
    if (recipe) {
      const newIngredients = [...recipe.ingredients, { name: "", quantity: "" }];
      handleChange('ingredients', newIngredients);
    }
  };
  
  // Remove ingredient
  const removeIngredient = (index: number) => {
    if (recipe && recipe.ingredients.length > 1) {
      const newIngredients = [...recipe.ingredients];
      newIngredients.splice(index, 1);
      handleChange('ingredients', newIngredients);
    } else {
      toast({
        description: "Recipe must have at least one ingredient",
        variant: "destructive"
      });
    }
  };
  
  // Handle step changes
  const handleStepChange = (index: number, field: keyof Step, value: string) => {
    if (recipe) {
      const newSteps = [...recipe.steps];
      newSteps[index] = { ...newSteps[index], [field]: value };
      handleChange('steps', newSteps);
    }
  };
  
  // Add new step
  const addStep = () => {
    if (recipe) {
      const newSteps = [...recipe.steps, { instructions: "" }];
      handleChange('steps', newSteps);
    }
  };
  
  // Remove step
  const removeStep = (index: number) => {
    if (recipe && recipe.steps.length > 1) {
      const newSteps = [...recipe.steps];
      newSteps.splice(index, 1);
      handleChange('steps', newSteps);
    } else {
      toast({
        description: "Recipe must have at least one step",
        variant: "destructive"
      });
    }
  };
  
  // Generate a slug from the title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      + '-' + recipe?.id.substring(0, 8);
  };
  
  // Save the recipe
  const handleSave = () => {
    if (recipe) {
      if (!recipe.title.trim()) {
        toast({
          title: "Missing Title",
          description: "Please add a title to your recipe",
          variant: "destructive"
        });
        return;
      }
      
      if (recipe.ingredients.some(ing => !ing.name.trim() || !ing.quantity.trim())) {
        toast({
          title: "Incomplete Ingredients",
          description: "Please complete all ingredient fields",
          variant: "destructive"
        });
        return;
      }
      
      if (recipe.steps.some(step => !step.instructions.trim())) {
        toast({
          title: "Incomplete Instructions",
          description: "Please complete all instruction steps",
          variant: "destructive"
        });
        return;
      }
      
      // Generate slug if needed
      if (!recipe.slug || recipe.slug === `new-recipe-${recipe.id.substring(0, 8)}`) {
        recipe.slug = generateSlug(recipe.title);
      }
      
      saveUserRecipe(recipe);
      setIsDirty(false);
      
      // Navigate back to the appropriate place
      if (!id) {
        navigate(`/edit/${recipe.id}`);
      }
    }
  };
  
  // Delete the recipe
  const handleDelete = () => {
    if (recipe && window.confirm("Are you sure you want to delete this recipe? This cannot be undone.")) {
      deleteUserRecipe(recipe.id);
      navigate("/my-recipes");
    }
  };
  
  // Function to get appropriate styling based on era
  const getEraColors = () => {
    if (!recipe) return {};
    
    switch(recipe.era) {
      case 'medieval':
        return {
          bg: "bg-medieval/10",
          text: "text-medieval",
          border: "border-medieval/40",
          button: "bg-medieval hover:bg-medieval/80 text-white"
        };
      case 'cyberpunk':
        return {
          bg: "bg-cyberpunk/10",
          text: "text-cyberpunk",
          border: "border-cyberpunk/40",
          button: "bg-cyberpunk hover:bg-cyberpunk/80 text-white"
        };
      case 'apocalyptic':
        return {
          bg: "bg-apocalyptic/10",
          text: "text-apocalyptic",
          border: "border-apocalyptic/40",
          button: "bg-apocalyptic hover:bg-apocalyptic/80 text-white"
        };
      default:
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          border: "border-primary/40",
          button: "bg-primary hover:bg-primary/80 text-white"
        };
    }
  };
  
  if (isLoading || !recipe) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }
  
  const colors = getEraColors();
  
  return (
    <div className={`min-h-screen flex flex-col ${colors.bg}`}>
      <Navigation />
      
      <div className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate("/my-recipes")}
              className="group flex items-center text-muted-foreground hover:text-foreground transition-all duration-300 mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to My Recipes
            </Button>
            
            <h1 className={`text-3xl font-bold ${colors.text}`}>
              {id ? "Edit Recipe" : "Create Recipe"}
            </h1>
            
            {isDirty && (
              <Alert variant="default" className="mt-4 bg-yellow-500/10 border-yellow-500/30">
                <AlertDescription>
                  You have unsaved changes. Don't forget to save before leaving!
                </AlertDescription>
              </Alert>
            )}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`p-6 rounded-lg border ${colors.border} bg-background/80 backdrop-blur-sm`}
          >
            {/* Basic Info Section */}
            <div className="space-y-4 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-foreground">Recipe Title</Label>
                  <Input
                    id="title"
                    value={recipe.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                    placeholder="Enter recipe name"
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="era" className="text-foreground">Era</Label>
                  <Select 
                    value={recipe.era} 
                    onValueChange={(value) => handleChange('era', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select era" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="medieval">Medieval</SelectItem>
                      <SelectItem value="cyberpunk">Cyberpunk</SelectItem>
                      <SelectItem value="apocalyptic">Apocalyptic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description" className="text-foreground">Description</Label>
                <Textarea
                  id="description"
                  value={recipe.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                  placeholder="Describe your recipe"
                  className="w-full"
                  rows={3}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cookingTime" className="text-foreground">Cooking Time</Label>
                  <Input
                    id="cookingTime"
                    value={recipe.cookingTime}
                    onChange={(e) => handleChange('cookingTime', e.target.value)}
                    placeholder="e.g. 30 mins"
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="servings" className="text-foreground">Servings</Label>
                  <Input
                    id="servings"
                    type="number"
                    value={recipe.servings}
                    onChange={(e) => handleChange('servings', parseInt(e.target.value) || 1)}
                    min={1}
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="difficulty" className="text-foreground">Difficulty</Label>
                  <Select 
                    value={recipe.difficulty} 
                    onValueChange={(value) => handleChange('difficulty', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Easy">Easy</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="Hard">Hard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="calories" className="text-foreground">Calories</Label>
                  <Input
                    id="calories"
                    type="number"
                    value={recipe.calories || ''}
                    onChange={(e) => handleChange('calories', e.target.value ? parseInt(e.target.value) : undefined)}
                    placeholder="Optional"
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="protein" className="text-foreground">Protein</Label>
                  <Input
                    id="protein"
                    value={recipe.protein || ''}
                    onChange={(e) => handleChange('protein', e.target.value || undefined)}
                    placeholder="Optional"
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="carbs" className="text-foreground">Carbs</Label>
                  <Input
                    id="carbs"
                    value={recipe.carbs || ''}
                    onChange={(e) => handleChange('carbs', e.target.value || undefined)}
                    placeholder="Optional"
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="fat" className="text-foreground">Fat</Label>
                  <Input
                    id="fat"
                    value={recipe.fat || ''}
                    onChange={(e) => handleChange('fat', e.target.value || undefined)}
                    placeholder="Optional"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            {/* Ingredients Section */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className={`text-xl font-semibold ${colors.text}`}>Ingredients</h2>
                <Button 
                  onClick={addIngredient}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <Plus className="h-4 w-4" />
                  Add Ingredient
                </Button>
              </div>
              
              <div className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <div key={index} className="grid grid-cols-5 gap-3 items-center">
                    <div className="col-span-2">
                      <Input
                        value={ingredient.name}
                        onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
                        placeholder="Ingredient name"
                      />
                    </div>
                    <div className="col-span-2">
                      <Input
                        value={ingredient.quantity}
                        onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
                        placeholder="Quantity"
                      />
                    </div>
                    <div>
                      <Button 
                        onClick={() => removeIngredient(index)}
                        variant="ghost" 
                        size="icon"
                        className="text-muted-foreground hover:text-destructive"
                        disabled={recipe.ingredients.length <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Separator className="my-6" />
            
            {/* Instructions Section */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className={`text-xl font-semibold ${colors.text}`}>Instructions</h2>
                <Button 
                  onClick={addStep}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <Plus className="h-4 w-4" />
                  Add Step
                </Button>
              </div>
              
              <div className="space-y-4">
                {recipe.steps.map((step, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className={`flex-shrink-0 h-6 w-6 rounded-full ${colors.bg} ${colors.text} flex items-center justify-center font-bold text-sm`}>
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <Textarea
                        value={step.instructions}
                        onChange={(e) => handleStepChange(index, 'instructions', e.target.value)}
                        placeholder={`Step ${index + 1} instructions`}
                        className="w-full"
                      />
                    </div>
                    <div className="flex-shrink-0">
                      <Button 
                        onClick={() => removeStep(index)}
                        variant="ghost" 
                        size="icon"
                        className="text-muted-foreground hover:text-destructive"
                        disabled={recipe.steps.length <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Separator className="my-6" />
            
            {/* Actions */}
            <div className="flex justify-between">
              <div>
                {id && (
                  <Button 
                    variant="destructive" 
                    onClick={handleDelete}
                    className="flex items-center gap-2"
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete Recipe
                  </Button>
                )}
              </div>
              
              <Button 
                onClick={handleSave}
                className={`${colors.button} flex items-center gap-2`}
              >
                <Save className="h-4 w-4" />
                Save Recipe
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RecipeEditor;
