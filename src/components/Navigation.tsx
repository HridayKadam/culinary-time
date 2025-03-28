
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Home, Info, Sprout } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentEra, setCurrentEra] = useState('');
  const location = useLocation();
  
  useEffect(() => {
    const path = location.pathname.slice(1);
    
    if (path === '') {
      setCurrentEra('rift');
    } else if (path === 'about') {
      setCurrentEra('rift');
    } else if (path.includes('medieval')) {
      setCurrentEra('medieval');
    } else if (path.includes('cyberpunk')) {
      setCurrentEra('cyberpunk'); 
    } else if (path.includes('apocalyptic')) {
      setCurrentEra('apocalyptic');
    } else {
      setCurrentEra('rift');
    }
  }, [location]);
  
  const getNavClasses = () => {
    const baseClasses = "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300";
    
    if (currentEra === 'medieval') {
      return `${baseClasses} bg-medieval-dark/90 text-medieval-light`;
    } else if (currentEra === 'cyberpunk') {
      return `${baseClasses} bg-cyberpunk-dark/90 text-cyberpunk-light`;
    } else if (currentEra === 'apocalyptic') {
      return `${baseClasses} bg-apocalyptic-dark/90 text-apocalyptic-light`;
    } else {
      return `${baseClasses} bg-background/90 text-foreground`;
    }
  };
  
  const getLinkClasses = (path: string) => {
    const isActive = (location.pathname === '/' && path === '/') || 
                     (path !== '/' && location.pathname.includes(path));
    
    const baseClasses = "px-3 py-2 rounded-md transition-all";
    const activeClasses = "font-bold";
    
    if (currentEra === 'medieval') {
      return `${baseClasses} ${isActive ? `${activeClasses} bg-medieval/30` : 'hover:bg-medieval/20'}`;
    } else if (currentEra === 'cyberpunk') {
      return `${baseClasses} ${isActive ? `${activeClasses} bg-cyberpunk/30` : 'hover:bg-cyberpunk/20'}`;
    } else if (currentEra === 'apocalyptic') {
      return `${baseClasses} ${isActive ? `${activeClasses} bg-apocalyptic/30` : 'hover:bg-apocalyptic/20'}`;
    } else {
      return `${baseClasses} ${isActive ? `${activeClasses} bg-primary/30` : 'hover:bg-primary/20'}`;
    }
  };
  
  const getButtonClasses = () => {
    const baseClasses = "flex items-center justify-center";
    
    if (currentEra === 'medieval') {
      return `${baseClasses} text-medieval-light hover:text-medieval-accent`;
    } else if (currentEra === 'cyberpunk') {
      return `${baseClasses} text-cyberpunk-light hover:text-cyberpunk-accent`;
    } else if (currentEra === 'apocalyptic') {
      return `${baseClasses} text-apocalyptic-light hover:text-apocalyptic-accent`;
    } else {
      return `${baseClasses} text-foreground hover:text-primary`;
    }
  };
  
  return (
    <nav className={getNavClasses()}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold font-rift flex items-center">
          <Sprout className="mr-2" />
          Culinary Time Rifts
        </Link>
        
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className={getButtonClasses() + " md:hidden"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <Link to="/" className={getLinkClasses('/')}>
            <span className="flex items-center"><Home className="mr-1 h-4 w-4" /> Home</span>
          </Link>
          <Link to="/medieval" className={getLinkClasses('/medieval')}>
            <span className="font-medieval">Medieval</span>
          </Link>
          <Link to="/cyberpunk" className={getLinkClasses('/cyberpunk')}>
            <span className="font-cyberpunk">Cyberpunk</span>
          </Link>
          <Link to="/apocalyptic" className={getLinkClasses('/apocalyptic')}>
            <span className="font-apocalyptic">Apocalyptic</span>
          </Link>
          <Link to="/about" className={getLinkClasses('/about')}>
            <span className="flex items-center"><Info className="mr-1 h-4 w-4" /> About</span>
          </Link>
        </div>
        
        {/* Mobile navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 right-0 bg-background/95 border-b border-border md:hidden"
          >
            <div className="container mx-auto py-4 flex flex-col space-y-2">
              <Link 
                to="/" 
                className={getLinkClasses('/') + " flex items-center"}
                onClick={() => setIsOpen(false)}
              >
                <Home className="mr-2 h-4 w-4" /> Home
              </Link>
              <Link 
                to="/medieval" 
                className={getLinkClasses('/medieval')}
                onClick={() => setIsOpen(false)}
              >
                <span className="font-medieval">Medieval</span>
              </Link>
              <Link 
                to="/cyberpunk" 
                className={getLinkClasses('/cyberpunk')}
                onClick={() => setIsOpen(false)}
              >
                <span className="font-cyberpunk">Cyberpunk</span>
              </Link>
              <Link 
                to="/apocalyptic" 
                className={getLinkClasses('/apocalyptic')}
                onClick={() => setIsOpen(false)}
              >
                <span className="font-apocalyptic">Apocalyptic</span>
              </Link>
              <Link 
                to="/about" 
                className={getLinkClasses('/about') + " flex items-center"}
                onClick={() => setIsOpen(false)}
              >
                <Info className="mr-2 h-4 w-4" /> About
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
