
import React, { useState, useEffect } from 'react';
import { StickyNote, Edit2, Check, X } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useRecipe } from '../context/RecipeContext';
import { motion } from 'framer-motion';

interface UserNotesProps {
  recipeId: string;
  eraType: 'medieval' | 'cyberpunk' | 'apocalyptic';
}

const UserNotes: React.FC<UserNotesProps> = ({ recipeId, eraType }) => {
  const { getEffectiveRecipe, saveUserNotes } = useRecipe();
  const [notes, setNotes] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [hasNotes, setHasNotes] = useState(false);
  
  useEffect(() => {
    const recipe = getEffectiveRecipe(recipeId);
    if (recipe && recipe.userNotes) {
      setNotes(recipe.userNotes);
      setHasNotes(true);
    } else {
      setNotes('');
      setHasNotes(false);
    }
  }, [recipeId, getEffectiveRecipe]);
  
  const handleSave = () => {
    saveUserNotes(recipeId, notes);
    setIsEditing(false);
    setHasNotes(!!notes);
  };
  
  const handleCancel = () => {
    const recipe = getEffectiveRecipe(recipeId);
    if (recipe && recipe.userNotes) {
      setNotes(recipe.userNotes);
    } else {
      setNotes('');
    }
    setIsEditing(false);
  };
  
  const getNotesClass = () => {
    switch(eraType) {
      case 'medieval': return 'bg-medieval/10 border-medieval/40';
      case 'cyberpunk': return 'bg-cyberpunk/10 border-cyberpunk/40';
      case 'apocalyptic': return 'bg-apocalyptic/10 border-apocalyptic/40';
      default: return '';
    }
  };
  
  const getButtonClass = () => {
    switch(eraType) {
      case 'medieval': return 'bg-medieval hover:bg-medieval/80 text-white';
      case 'cyberpunk': return 'bg-cyberpunk hover:bg-cyberpunk/80 text-white';
      case 'apocalyptic': return 'bg-apocalyptic hover:bg-apocalyptic/80 text-white';
      default: return '';
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className={`mt-8 p-4 rounded-lg border ${getNotesClass()}`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <StickyNote className="h-4 w-4" />
          <h3 className="text-lg font-semibold">Your Notes</h3>
        </div>
        
        {!isEditing && (
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setIsEditing(true)}
            className="text-xs flex items-center gap-1"
          >
            <Edit2 className="h-3 w-3" />
            {hasNotes ? 'Edit' : 'Add Notes'}
          </Button>
        )}
      </div>
      
      {isEditing ? (
        <>
          <Textarea
            className="min-h-[120px] mb-3"
            placeholder="Add your personal notes, modifications or tips about this recipe..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          
          <div className="flex justify-end gap-2">
            <Button 
              size="sm" 
              variant="outline" 
              onClick={handleCancel}
              className="flex items-center gap-1"
            >
              <X className="h-3 w-3" />
              Cancel
            </Button>
            
            <Button 
              size="sm"
              onClick={handleSave}
              className={`flex items-center gap-1 ${getButtonClass()}`}
            >
              <Check className="h-3 w-3" />
              Save Notes
            </Button>
          </div>
        </>
      ) : (
        <>
          {hasNotes ? (
            <div className="whitespace-pre-wrap">{notes}</div>
          ) : (
            <div className="text-muted-foreground text-sm italic">
              No personal notes yet. Click 'Add Notes' to add your thoughts.
            </div>
          )}
        </>
      )}
    </motion.div>
  );
};

export default UserNotes;
