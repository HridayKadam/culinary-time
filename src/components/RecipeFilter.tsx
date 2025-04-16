
import React, { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface RecipeFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  eraType: 'medieval' | 'cyberpunk' | 'apocalyptic';
}

const RecipeFilter: React.FC<RecipeFilterProps> = ({ 
  tags, 
  selectedTags, 
  onTagToggle,
  eraType 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const getTagClasses = () => {
    if (eraType === 'medieval') {
      return "hover:bg-medieval/20 data-[active]:bg-medieval/30";
    } else if (eraType === 'cyberpunk') {
      return "hover:bg-cyberpunk/20 data-[active]:bg-cyberpunk/30";
    } else {
      return "hover:bg-apocalyptic/20 data-[active]:bg-apocalyptic/30";
    }
  };
  
  const getButtonClasses = () => {
    if (eraType === 'medieval') {
      return "border-medieval text-medieval hover:bg-medieval/10";
    } else if (eraType === 'cyberpunk') {
      return "border-cyberpunk text-cyberpunk hover:bg-cyberpunk/10";
    } else {
      return "border-apocalyptic text-apocalyptic hover:bg-apocalyptic/10";
    }
  };
  
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className={`flex items-center gap-2 ${getButtonClasses()}`}
        >
          Filter Recipes
          <ChevronDown size={16} className={isOpen ? "rotate-180 transition-transform" : "transition-transform"} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48 max-h-64 overflow-auto bg-background border border-border">
        {tags.map((tag) => (
          <DropdownMenuItem
            key={tag}
            className={`flex items-center gap-2 cursor-pointer ${getTagClasses()}`}
            data-active={selectedTags.includes(tag)}
            onSelect={(e) => {
              e.preventDefault();
              onTagToggle(tag);
            }}
          >
            <div className={`w-4 h-4 flex items-center justify-center rounded-sm border ${
              selectedTags.includes(tag) ? (
                eraType === 'medieval' ? 'bg-medieval border-medieval' :
                eraType === 'cyberpunk' ? 'bg-cyberpunk border-cyberpunk' :
                'bg-apocalyptic border-apocalyptic'
              ) : 'border-muted'
            }`}>
              {selectedTags.includes(tag) && <Check size={12} className="text-background" />}
            </div>
            <span className="capitalize">{tag.replace(/-/g, ' ')}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default RecipeFilter;
