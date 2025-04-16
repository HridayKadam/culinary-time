
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Heart, Search as SearchIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RecipeSearch from './RecipeSearch';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  
  // Determine the active era
  const getEraFromPath = () => {
    if (location.pathname.includes('medieval')) return 'medieval';
    if (location.pathname.includes('cyberpunk')) return 'cyberpunk';
    if (location.pathname.includes('apocalyptic')) return 'apocalyptic';
    return 'all';
  };

  const eraType = getEraFromPath();

  return (
    <header
      className={`${
        scrolled ? 'shadow-md' : ''
      } transition-all duration-300`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-rift font-bold text-xl text-rift">Culinary Time Rifts</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <div className="hidden md:block md:w-64 lg:w-80">
            <RecipeSearch eraType={eraType as 'medieval' | 'cyberpunk' | 'apocalyptic' | 'all'} />
          </div>
          
          <div className="flex items-center gap-4">
            <Link to="/medieval" className={`text-sm hover:text-rift transition-colors ${
              location.pathname === '/medieval' ? 'font-medieval text-medieval' : 'text-muted-foreground'
            }`}>
              Medieval
            </Link>
            <Link to="/cyberpunk" className={`text-sm hover:text-rift transition-colors ${
              location.pathname === '/cyberpunk' ? 'font-cyberpunk text-cyberpunk' : 'text-muted-foreground'
            }`}>
              Cyberpunk
            </Link>
            <Link to="/apocalyptic" className={`text-sm hover:text-rift transition-colors ${
              location.pathname === '/apocalyptic' ? 'font-apocalyptic text-apocalyptic' : 'text-muted-foreground'
            }`}>
              Apocalyptic
            </Link>
            <Link to="/favorites" className={`flex items-center gap-1 text-sm hover:text-rift transition-colors ${
              location.pathname === '/favorites' ? 'text-rift' : 'text-muted-foreground'
            }`}>
              <Heart size={16} className={location.pathname === '/favorites' ? 'text-rift fill-rift' : ''} />
              Favorites
            </Link>
            <Link to="/about" className={`text-sm hover:text-rift transition-colors ${
              location.pathname === '/about' ? 'text-foreground font-medium' : 'text-muted-foreground'
            }`}>
              About
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <div className="mr-2">
            <Link to="/search">
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <SearchIcon className="h-5 w-5" />
              </Button>
            </Link>
          </div>
          
          <Button variant="ghost" size="sm" onClick={toggleMenu} className="text-muted-foreground">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-t border-border"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <Link
              to="/medieval"
              className="py-2 px-4 hover:bg-muted rounded-md text-sm font-medium"
            >
              Medieval
            </Link>
            <Link
              to="/cyberpunk"
              className="py-2 px-4 hover:bg-muted rounded-md text-sm font-medium"
            >
              Cyberpunk
            </Link>
            <Link
              to="/apocalyptic"
              className="py-2 px-4 hover:bg-muted rounded-md text-sm font-medium"
            >
              Apocalyptic
            </Link>
            <Link
              to="/favorites"
              className="py-2 px-4 hover:bg-muted rounded-md text-sm font-medium flex items-center gap-2"
            >
              <Heart size={16} />
              Favorites
            </Link>
            <Link
              to="/about"
              className="py-2 px-4 hover:bg-muted rounded-md text-sm font-medium"
            >
              About
            </Link>
            <div className="pt-2">
              <RecipeSearch eraType={eraType as 'medieval' | 'cyberpunk' | 'apocalyptic' | 'all'} />
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navigation;
