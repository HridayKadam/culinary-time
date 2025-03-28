
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Scroll, Search } from 'lucide-react';
import Navigation from '../components/Navigation';
import RecipeCard from '../components/RecipeCard';
import Footer from '../components/Footer';
import { getRecipesByEra } from '../data/recipes';
import { Recipe } from '../types/recipe';
import { Input } from "@/components/ui/input";

const Medieval: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    document.title = 'Medieval Recipes - Culinary Time Rifts';
    // Get recipes and filter out secret ones for initial display
    const medievalRecipes = getRecipesByEra('medieval').filter(recipe => !recipe.isSecret);
    setRecipes(medievalRecipes);
  }, []);
  
  const filteredRecipes = recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="min-h-screen flex flex-col bg-medieval-dark/20">
      <Navigation />
      
      <div className="flex-grow container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block p-2 bg-medieval/20 rounded-full mb-4">
            <Scroll className="h-8 w-8 text-medieval-light" />
          </div>
          <h1 className="text-4xl font-medieval font-bold mb-4 text-medieval-light">Medieval Recipes</h1>
          <p className="max-w-2xl mx-auto text-medieval-light/80">
            Ancient culinary traditions from the age of castles and kingdoms. These recipes have been
            passed down through generations, inscribed on aged parchment scrolls.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-md mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-medieval-light/70 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search recipes from this era..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-medieval-dark/50 border-medieval text-medieval-light placeholder:text-medieval-light/50 focus:border-medieval-accent focus:ring-1 focus:ring-medieval-accent"
            />
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe, index) => (
            <RecipeCard 
              key={recipe.id} 
              recipe={recipe} 
              eraType="medieval" 
              index={index} 
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 p-6 bg-medieval-dark/40 border border-medieval/50 rounded-lg max-w-2xl mx-auto text-center"
        >
          <h3 className="text-xl font-medieval mb-2 text-medieval-light">A Secret Recipe Awaits</h3>
          <p className="text-sm text-medieval-light/80">
            Rumors speak of a mystical recipe hidden among the herbs of healing and wisdom.
            Perhaps combining elements in a unique way might reveal this ancient knowledge...
          </p>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Medieval;
