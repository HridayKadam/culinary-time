
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Skull, Search } from 'lucide-react';
import Navigation from '../components/Navigation';
import RecipeCard from '../components/RecipeCard';
import Footer from '../components/Footer';
import { getRecipesByEra } from '../data/recipes';
import { Recipe } from '../types/recipe';
import { Input } from "@/components/ui/input";

const Apocalyptic: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    document.title = 'Apocalyptic Recipes - Culinary Time Rifts';
    // Get recipes and filter out secret ones for initial display
    const apocalypticRecipes = getRecipesByEra('apocalyptic').filter(recipe => !recipe.isSecret);
    setRecipes(apocalypticRecipes);
  }, []);
  
  const filteredRecipes = recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="min-h-screen flex flex-col bg-apocalyptic-dark/20">
      <Navigation />
      
      <div className="flex-grow container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block p-2 bg-apocalyptic/20 rounded-full mb-4">
            <Skull className="h-8 w-8 text-apocalyptic-light" />
          </div>
          <h1 className="text-4xl font-apocalyptic font-bold mb-4 text-apocalyptic-light">Apocalyptic Recipes</h1>
          <p className="max-w-2xl mx-auto text-apocalyptic-light/80">
            Survival cuisine from the wasteland. These resourceful recipes use scavenged ingredients
            and improvised cooking methods to create nourishing meals in a harsh world.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-md mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-apocalyptic-light/70 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search survival recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-apocalyptic-dark/50 border-apocalyptic text-apocalyptic-light placeholder:text-apocalyptic-light/50 focus:border-apocalyptic-accent focus:ring-1 focus:ring-apocalyptic-accent"
            />
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe, index) => (
            <RecipeCard 
              key={recipe.id} 
              recipe={recipe} 
              eraType="apocalyptic" 
              index={index} 
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 p-6 bg-apocalyptic-dark/40 border border-apocalyptic/50 rounded-lg max-w-2xl mx-auto text-center relative overflow-hidden"
        >
          <motion.div 
            className="absolute inset-0 bg-apocalyptic-texture opacity-20 mix-blend-overlay"
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{ repeat: Infinity, duration: 5 }}
          />
          <h3 className="text-xl font-apocalyptic mb-2 text-apocalyptic-light relative z-10">Hidden Knowledge</h3>
          <p className="text-sm text-apocalyptic-light/80 relative z-10">
            The elders speak of a secret preservation technique known only to those who have endured 
            the longest winter. They know where the sweet things hide...
          </p>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Apocalyptic;
