
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '../hooks/use-toast';
import { Sparkles, Compass, Star } from 'lucide-react';

const TimePortal: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [portalEnergy, setPortalEnergy] = useState(0);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Portal energy animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPortalEnergy(prev => (prev + 1) % 100);
    }, 100);
    
    return () => clearInterval(interval);
  }, []);
  
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
      className="flex flex-col items-center justify-center py-16 md:h-[60vh]"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-8 text-center"
      >
        <motion.div 
          animate={{ 
            rotate: [0, 2, -2, 0],
            scale: [1, 1.02, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 5,
            ease: "easeInOut"
          }}
          className="inline-flex items-center justify-center mb-4"
        >
          <Sparkles className="h-8 w-8 text-rift-accent mr-2" />
          <Sparkles className="h-6 w-6 text-rift-light ml-2" />
        </motion.div>
        
        <h1 className="text-4xl md:text-6xl font-rift font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-rift-light via-rift to-rift-accent">
          Culinary Time Rifts
        </h1>
        
        <p className="text-lg md:text-xl text-center max-w-2xl mx-auto text-muted-foreground">
          Step through time rifts to discover recipes from different eras. Each world has its own culinary secrets waiting to be unlocked.
        </p>
      </motion.div>
      
      <div className="relative w-56 h-56 md:w-72 md:h-72">
        <motion.div 
          className="time-portal bg-gradient-to-br from-rift-dark via-rift to-rift-accent w-full h-full rounded-full flex items-center justify-center cursor-pointer relative overflow-hidden"
          onHoverStart={() => setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}
          animate={{ 
            boxShadow: isHovering 
              ? '0 0 40px rgba(147, 51, 234, 0.8)' 
              : '0 0 15px rgba(147, 51, 234, 0.3)',
            scale: isHovering ? 1.05 : 1
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ 
            duration: 0.6, 
            ease: "easeInOut"
          }}
        >
          {/* Circular energy waves */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`wave-${i}`}
              className="absolute inset-0 rounded-full border-2 border-rift-light/30"
              initial={{ scale: 0.5, opacity: 0.8 }}
              animate={{ 
                scale: [0.2, 2.5],
                opacity: [0.7, 0],
              }}
              transition={{
                duration: 4,
                delay: i * 1.2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
          
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-rift-texture opacity-50 mix-blend-overlay"></div>
            
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-rift-light/30 via-transparent to-transparent"
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
          
          {/* Dynamic portal energy meter */}
          <svg className="absolute inset-0" viewBox="0 0 100 100">
            <motion.circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="1"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="rgba(147, 51, 234, 0.8)"
              strokeWidth="2"
              strokeDasharray="302"
              initial={{ strokeDashoffset: 302 }}
              animate={{ 
                strokeDashoffset: 302 - (portalEnergy * 3.02)
              }}
              transition={{ duration: 0.2 }}
            />
          </svg>
          
          {/* Center vortex */}
          <motion.div 
            className="relative z-10 flex flex-col items-center justify-center"
            animate={{ 
              scale: isHovering ? [1, 1.05, 1] : 1,
              rotate: isHovering ? [0, -2, 2, 0] : 0 
            }}
            transition={{ 
              duration: 2, 
              repeat: isHovering ? Infinity : 0,
              repeatType: "mirror"
            }}
          >
            <motion.div 
              className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-rift-accent to-rift-dark mix-blend-overlay"
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.div 
              className="relative bg-clip-text text-transparent bg-gradient-to-r from-white to-rift-light font-bold text-center group"
              animate={{ scale: isHovering ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span 
                className="text-xl md:text-2xl flex items-center"
                animate={{ y: isHovering ? -5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Compass className="inline-block mr-2 text-white opacity-90" size={20} />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-rift-light">Traverse</span>
              </motion.span>
              <motion.span 
                className="block text-base md:text-lg opacity-75"
                animate={{ y: isHovering ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Star className="inline-block mr-1 text-rift-light" size={14} />
                the Rifts
                <Star className="inline-block ml-1 text-rift-light" size={14} />
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      <AnimatePresence>
        {isHovering && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
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
      </AnimatePresence>
    </motion.div>
  );
};

export default TimePortal;
