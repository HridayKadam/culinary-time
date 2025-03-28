
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Search } from 'lucide-react';
import Navigation from '../components/Navigation';
import RecipeCard from '../components/RecipeCard';
import Footer from '../components/Footer';
import { getRecipesByEra } from '../data/recipes';
import { Recipe } from '../types/recipe';
import { Input } from "@/components/ui/input";

const Cyberpunk: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [glitchText, setGlitchText] = useState(false);
  
  useEffect(() => {
    document.title = 'Cyberpunk Recipes - Culinary Time Rifts';
    // Get recipes and filter out secret ones for initial display
    const cyberpunkRecipes = getRecipesByEra('cyberpunk').filter(recipe => !recipe.isSecret);
    setRecipes(cyberpunkRecipes);
    
    // Set up glitch effect interval
    const glitchInterval = setInterval(() => {
      setGlitchText(true);
      setTimeout(() => setGlitchText(false), 200);
    }, 5000);
    
    return () => clearInterval(glitchInterval);
  }, []);
  
  const filteredRecipes = recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="min-h-screen flex flex-col bg-cyberpunk-dark/20">
      <Navigation />
      
      <div className="flex-grow container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block p-2 bg-cyberpunk/20 rounded-full mb-4">
            <Cpu className="h-8 w-8 text-cyberpunk-light" />
          </div>
          
          <motion.h1 
            className="text-4xl font-cyberpunk font-bold mb-4 text-cyberpunk-light relative"
            animate={glitchText ? {
              x: [0, -2, 3, -1, 0],
              textShadow: [
                '2px 0 #ff00ff, -2px 0 #00ffff',
                '-2px 0 #ff00ff, 2px 0 #00ffff',
                '2px 0 #00ffff, -2px 0 #ff00ff',
                '0 0 transparent'
              ]
            } : {}}
            transition={{ duration: 0.2 }}
          >
            Cyberpunk Recipes
          </motion.h1>
          
          <p className="max-w-2xl mx-auto text-cyberpunk-light/80">
            Cutting-edge cuisine from the digital frontier. These high-tech recipes feature lab-grown ingredients,
            nutrient-dense formulations, and mood-altering flavors.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-md mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyberpunk-light/70 h-5 w-5" />
            <Input
              type="text"
              placeholder="SEARCH_ALGORITHM.INIT()..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-cyberpunk-dark/50 border-cyberpunk text-cyberpunk-light placeholder:text-cyberpunk-light/50 focus:border-cyberpunk-accent focus:ring-1 focus:ring-cyberpunk-accent"
            />
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe, index) => (
            <RecipeCard 
              key={recipe.id} 
              recipe={recipe} 
              eraType="cyberpunk" 
              index={index} 
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 p-6 bg-cyberpunk-dark/40 border border-cyberpunk/50 rounded-lg max-w-2xl mx-auto text-center"
        >
          <motion.h3 
            className="text-xl font-cyberpunk mb-2 text-cyberpunk-light"
            animate={glitchText ? {
              x: [0, -2, 3, -1, 0],
              textShadow: [
                '2px 0 #ff00ff, -2px 0 #00ffff',
                '-2px 0 #ff00ff, 2px 0 #00ffff',
                '2px 0 #00ffff, -2px 0 #ff00ff',
                '0 0 transparent'
              ]
            } : {}}
            transition={{ duration: 0.2 }}
          >
            ENCRYPTED_RECIPE.DAT
          </motion.h3>
          <p className="text-sm text-cyberpunk-light/80">
            A highly classified culinary algorithm exists on the fringes of the network.
            Only those who have tasted the electric edge between reality and digital can access it...
          </p>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Cyberpunk;
