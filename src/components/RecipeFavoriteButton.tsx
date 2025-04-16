
import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Recipe } from '../types/recipe';
import RecipeFavorite from './RecipeFavorite';

interface RecipeFavoriteButtonProps {
  recipe: Recipe;
  eraType: 'medieval' | 'cyberpunk' | 'apocalyptic';
}

const RecipeFavoriteButton: React.FC<RecipeFavoriteButtonProps> = ({ recipe, eraType }) => {
  return (
    <div className="flex items-center gap-2">
      <RecipeFavorite recipeId={recipe.id} eraType={eraType} />
      <span className="text-sm">Add to favorites</span>
    </div>
  );
};

export default RecipeFavoriteButton;
