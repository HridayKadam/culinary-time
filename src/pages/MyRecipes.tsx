
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, ChevronDown, Book, Calendar, Utensils, Filter, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useRecipe } from '../context/RecipeContext';
import { UserRecipe } from '../types/recipe';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const MyRecipes: React.FC = () => {
  const navigate = useNavigate();
  const { getUserRecipes } = useRecipe();
  const [recipes, setRecipes] = useState<UserRecipe[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [eraFilter, setEraFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('newest');
  
  useEffect(() => {
    document.title = 'My Recipes - Culinary Time Rifts';
    
    // Get all user recipes
    const userRecipes = getUserRecipes();
    setRecipes(userRecipes);
  }, [getUserRecipes]);
  
  // Filter and sort recipes
  const filteredRecipes = recipes
    .filter(recipe => {
      // Filter by era if selected
      if (eraFilter !== 'all' && recipe.era !== eraFilter) {
        return false;
      }
      
      // Filter by search term
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        return (
          recipe.title.toLowerCase().includes(searchLower) ||
          recipe.description.toLowerCase().includes(searchLower)
        );
      }
      
      return true;
    })
    .sort((a, b) => {
      // Sort by selected criteria
      switch (sortBy) {
        case 'newest':
          return b.createdAt - a.createdAt;
        case 'oldest':
          return a.createdAt - b.createdAt;
        case 'recently-edited':
          return b.lastModified - a.lastModified;
        case 'title-asc':
          return a.title.localeCompare(b.title);
        case 'title-desc':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });
  
  // Navigate to create a new recipe
  const handleCreateNew = (era: 'medieval' | 'cyberpunk' | 'apocalyptic') => {
    navigate(`/create/${era}`);
  };
  
  // Format date for display
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString();
  };
  
  // Get appropriate era classes
  const getEraClasses = (era: string) => {
    switch(era) {
      case 'medieval':
        return "border-medieval bg-medieval/10 hover:bg-medieval/20";
      case 'cyberpunk':
        return "border-cyberpunk bg-cyberpunk/10 hover:bg-cyberpunk/20";
      case 'apocalyptic':
        return "border-apocalyptic bg-apocalyptic/10 hover:bg-apocalyptic/20";
      default:
        return "border-gray-300 bg-gray-50 hover:bg-gray-100";
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <div className="flex-grow container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
            <h1 className="text-3xl md:text-4xl font-bold text-rift">My Recipes</h1>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-rift hover:bg-rift-accent flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Create Recipe
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleCreateNew('medieval')} className="flex items-center gap-2 cursor-pointer">
                  <div className="w-2 h-2 rounded-full bg-medieval" />
                  Medieval Recipe
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleCreateNew('cyberpunk')} className="flex items-center gap-2 cursor-pointer">
                  <div className="w-2 h-2 rounded-full bg-cyberpunk" />
                  Cyberpunk Recipe
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleCreateNew('apocalyptic')} className="flex items-center gap-2 cursor-pointer">
                  <div className="w-2 h-2 rounded-full bg-apocalyptic" />
                  Apocalyptic Recipe
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {/* Filter and Search */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search your recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <div className="w-40">
                <Select value={eraFilter} onValueChange={setEraFilter}>
                  <SelectTrigger className="gap-2">
                    <Filter className="h-4 w-4 text-muted-foreground" />
                    <SelectValue placeholder="Filter Era" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Eras</SelectItem>
                    <SelectItem value="medieval">Medieval</SelectItem>
                    <SelectItem value="cyberpunk">Cyberpunk</SelectItem>
                    <SelectItem value="apocalyptic">Apocalyptic</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="w-40">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="recently-edited">Recently Edited</SelectItem>
                    <SelectItem value="title-asc">Title (A-Z)</SelectItem>
                    <SelectItem value="title-desc">Title (Z-A)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {/* Recipe List */}
          {filteredRecipes.length > 0 ? (
            <div className="space-y-4">
              {filteredRecipes.map((recipe) => (
                <motion.div
                  key={recipe.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link 
                    to={`/edit/${recipe.id}`}
                    className={`block p-4 rounded-lg border transition-all ${getEraClasses(recipe.era)}`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold">{recipe.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-1">{recipe.description}</p>
                      </div>
                      
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Utensils className="h-3 w-3" />
                          <span>{recipe.era.charAt(0).toUpperCase() + recipe.era.slice(1)}</span>
                        </div>
                        
                        <div className="flex items-center gap-1">
                          <Book className="h-3 w-3" />
                          <span>Created {formatDate(recipe.createdAt)}</span>
                        </div>
                        
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>Updated {formatDate(recipe.lastModified)}</span>
                        </div>
                        
                        <Button size="sm" variant="ghost" className="text-xs">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center py-16 bg-card border border-border rounded-lg"
            >
              <Book size={64} className="mx-auto text-muted-foreground/30" />
              <h2 className="text-xl font-bold mt-4 mb-2">No Recipes Found</h2>
              
              {searchTerm || eraFilter !== 'all' ? (
                <p className="text-muted-foreground">
                  No recipes match your search criteria. Try adjusting your filters.
                </p>
              ) : (
                <p className="text-muted-foreground">
                  You haven't created any recipes yet. Create your first recipe to get started!
                </p>
              )}
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="mt-6 bg-rift hover:bg-rift-accent flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Create Recipe
                    <ChevronDown className="h-3 w-3 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center">
                  <DropdownMenuItem onClick={() => handleCreateNew('medieval')} className="flex items-center gap-2 cursor-pointer">
                    <div className="w-2 h-2 rounded-full bg-medieval" />
                    Medieval Recipe
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleCreateNew('cyberpunk')} className="flex items-center gap-2 cursor-pointer">
                    <div className="w-2 h-2 rounded-full bg-cyberpunk" />
                    Cyberpunk Recipe
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleCreateNew('apocalyptic')} className="flex items-center gap-2 cursor-pointer">
                    <div className="w-2 h-2 rounded-full bg-apocalyptic" />
                    Apocalyptic Recipe
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.div>
          )}
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MyRecipes;
