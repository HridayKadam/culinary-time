
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const PortalHeader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="mb-8 text-center px-4"
    >
      <motion.div 
        animate={{ 
          rotate: [0, 2, -2, 0],
          scale: [1, 1.05, 0.98, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 5,
          ease: "easeInOut"
        }}
        className="inline-flex items-center justify-center mb-6"
      >
        <Star className="h-8 w-8 text-rift-accent mr-2 animate-pulse" />
        <Star className="h-6 w-6 text-rift-light ml-2" />
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-4xl md:text-6xl font-rift font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-rift-light via-rift to-rift-accent"
      >
        Culinary Time Rifts
      </motion.h1>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <p className="text-lg md:text-xl text-center max-w-2xl mx-auto text-muted-foreground mb-8 leading-relaxed">
          Step through time rifts to discover recipes from different eras. Each world has its own culinary secrets waiting to be unlocked.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default PortalHeader;
