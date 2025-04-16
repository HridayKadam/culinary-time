
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface RecipeSearchProps {
  eraType: 'medieval' | 'cyberpunk' | 'apocalyptic' | 'all';
  className?: string;
}

const RecipeSearch: React.FC<RecipeSearchProps> = ({ eraType, className = '' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      if (eraType === 'all') {
        navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      } else {
        navigate(`/${eraType}/search?q=${encodeURIComponent(searchTerm)}`);
      }
    }
  };
  
  const getSearchClasses = () => {
    if (eraType === 'medieval') {
      return "border-medieval focus-within:ring-medieval/50";
    } else if (eraType === 'cyberpunk') {
      return "border-cyberpunk focus-within:ring-cyberpunk/50";
    } else if (eraType === 'apocalyptic') {
      return "border-apocalyptic focus-within:ring-apocalyptic/50";
    } else {
      return "border-rift focus-within:ring-rift/50";
    }
  };
  
  return (
    <form onSubmit={handleSearch} className={`relative ${className}`}>
      <div className={`flex rounded-full overflow-hidden border ${getSearchClasses()} focus-within:ring-2 transition-all duration-300`}>
        <Input
          type="text"
          placeholder="Search for recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-l-full"
        />
        <Button 
          type="submit" 
          variant="ghost" 
          size="icon"
          className="rounded-r-full"
        >
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

export default RecipeSearch;
