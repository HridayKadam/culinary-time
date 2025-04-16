
import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from '@/hooks/use-toast';

interface RecipeFavoriteProps {
  recipeId: string;
  eraType: 'medieval' | 'cyberpunk' | 'apocalyptic';
}

const RecipeFavorite: React.FC<RecipeFavoriteProps> = ({ recipeId, eraType }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Load favorite status from localStorage on mount
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
    setIsFavorite(favorites.includes(recipeId));
  }, [recipeId]);
  
  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
    
    let newFavorites: string[];
    let message: string;
    
    if (favorites.includes(recipeId)) {
      // Remove from favorites
      newFavorites = favorites.filter((id: string) => id !== recipeId);
      message = "Removed from favorites";
    } else {
      // Add to favorites
      newFavorites = [...favorites, recipeId];
      message = "Added to favorites";
    }
    
    // Save to localStorage
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
    
    // Update state
    setIsFavorite(!isFavorite);
    
    // Show toast notification
    toast({
      description: message,
    });
  };
  
  const getHeartClasses = () => {
    if (eraType === 'medieval') {
      return isFavorite ? "text-medieval fill-medieval" : "text-medieval-light/70";
    } else if (eraType === 'cyberpunk') {
      return isFavorite ? "text-cyberpunk fill-cyberpunk" : "text-cyberpunk-light/70";
    } else {
      return isFavorite ? "text-apocalyptic fill-apocalyptic" : "text-apocalyptic-light/70";
    }
  };
  
  return (
    <motion.button
      onClick={toggleFavorite}
      whileTap={{ scale: 0.8 }}
      className="flex items-center justify-center p-2 rounded-full hover:bg-background/10 transition-colors"
    >
      <Heart className={getHeartClasses()} />
    </motion.button>
  );
};

export default RecipeFavorite;
