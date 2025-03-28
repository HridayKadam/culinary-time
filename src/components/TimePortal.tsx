
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useToast } from '../hooks/use-toast';

const TimePortal: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleEraSelect = (era: string) => {
    toast({
      title: `Traveling to ${era} era...`,
      description: "Opening time rift...",
      duration: 2000,
    });
    
    setTimeout(() => {
      navigate(`/${era.toLowerCase()}`);
    }, 500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center h-[70vh]"
    >
      <h1 className="text-4xl md:text-6xl font-rift font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-rift-light via-rift to-rift-accent">
        Culinary Time Rifts
      </h1>
      
      <p className="text-lg md:text-xl text-center max-w-2xl mb-12 text-muted-foreground">
        Step through time rifts to discover recipes from different eras. Each world has its own culinary secrets waiting to be unlocked.
      </p>
      
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        <motion.div 
          className="time-portal bg-gradient-to-br from-rift-dark to-rift w-full h-full flex items-center justify-center"
          onHoverStart={() => setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}
          animate={{ 
            boxShadow: isHovering 
              ? '0 0 30px rgba(147, 51, 234, 0.8)' 
              : '0 0 10px rgba(147, 51, 234, 0.3)',
            rotate: isHovering ? [0, 5, -5, 0] : 0
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-rift-texture opacity-50 mix-blend-overlay"></div>
            
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-rift-light/20 via-transparent to-transparent"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          </div>
          
          <motion.div 
            className="relative z-10 text-white text-xl font-bold text-center"
            animate={{ scale: isHovering ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            Enter the Rift
          </motion.div>
        </motion.div>
      </div>
      
      {isHovering && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          <motion.div 
            className="era-card medieval-era cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleEraSelect('Medieval')}
          >
            <h3 className="text-2xl font-medieval mb-2">Medieval</h3>
            <p className="text-sm opacity-80 text-center">Ancient recipes on aged parchment</p>
          </motion.div>
          
          <motion.div 
            className="era-card cyberpunk-era cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleEraSelect('Cyberpunk')}
          >
            <h3 className="text-2xl font-cyberpunk mb-2">Cyberpunk</h3>
            <p className="text-sm opacity-80 text-center">Futuristic cuisine with neon aesthetics</p>
          </motion.div>
          
          <motion.div 
            className="era-card apocalyptic-era cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleEraSelect('Apocalyptic')}
          >
            <h3 className="text-2xl font-apocalyptic mb-2">Apocalyptic</h3>
            <p className="text-sm opacity-80 text-center">Survival recipes from the wasteland</p>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TimePortal;
