
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background/80 border-t border-border mt-12 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold font-rift mb-4">Culinary Time Rifts</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Explore culinary adventures across different eras. Each recipe is a journey through time.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="text-sm text-muted-foreground">
              <Link to="/about" className="hover:text-primary transition-colors mr-4">
                About
              </Link>
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-2 md:mb-0">
            © {new Date().getFullYear()} Culinary Time Rifts. All rights reserved.
          </p>
          
          <p className="text-sm text-muted-foreground flex items-center">
            Made with{" "}
            <motion.span
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                ease: "easeInOut"
              }}
              className="mx-1 inline-flex"
            >
              <Heart size={14} className="text-destructive" />
            </motion.span>
            {" "}by Hriday Kadam
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
