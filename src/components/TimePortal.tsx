
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useToast } from '../hooks/use-toast';
import { Compass, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

const TimePortal: React.FC = () => {
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
          <Star className="h-8 w-8 text-rift-accent mr-2" />
          <Star className="h-6 w-6 text-rift-light ml-2" />
        </motion.div>
        
        <h1 className="text-4xl md:text-6xl font-rift font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-rift-light via-rift to-rift-accent">
          Culinary Time Rifts
        </h1>
        
        <p className="text-lg md:text-xl text-center max-w-2xl mx-auto text-muted-foreground mb-8">
          Step through time rifts to discover recipes from different eras. Each world has its own culinary secrets waiting to be unlocked.
        </p>
      </motion.div>
      
      <div className="flex flex-col items-center gap-8">
        {/* Time portal glow effect */}
        <motion.div 
          className="relative w-56 h-56 md:w-64 md:h-64 flex items-center justify-center"
          animate={{ 
            boxShadow: '0 0 30px rgba(147, 51, 234, 0.4)',
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "reverse"
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
          
          {/* Era selection buttons arranged in a circle */}
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                onClick={() => handleEraSelect('Medieval')}
                className="bg-medieval border-2 border-medieval-light hover:bg-medieval-dark text-medieval-light shadow-[0_0_15px_rgba(139,69,19,0.5)] rounded-full px-6"
              >
                <span className="font-medieval">Medieval</span>
              </Button>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-1/4 left-0 transform -translate-x-1/4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                onClick={() => handleEraSelect('Cyberpunk')}
                className="bg-cyberpunk border-2 border-cyberpunk-light hover:bg-cyberpunk-dark text-cyberpunk-light shadow-[0_0_15px_rgba(30,144,255,0.5)] rounded-full px-6"
              >
                <span className="font-cyberpunk">Cyberpunk</span>
              </Button>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-1/4 right-0 transform translate-x-1/4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                onClick={() => handleEraSelect('Apocalyptic')}
                className="bg-apocalyptic border-2 border-apocalyptic-light hover:bg-apocalyptic-dark text-apocalyptic-light shadow-[0_0_15px_rgba(165,42,42,0.5)] rounded-full px-6"
              >
                <span className="font-apocalyptic">Apocalyptic</span>
              </Button>
            </motion.div>
            
            {/* Central portal glow */}
            <motion.div 
              className="w-32 h-32 bg-gradient-to-br from-rift-light via-rift to-rift-dark/80 rounded-full flex items-center justify-center relative overflow-hidden"
              animate={{ 
                rotate: [0, 360],
                boxShadow: [
                  '0 0 20px rgba(147, 51, 234, 0.6)',
                  '0 0 30px rgba(147, 51, 234, 0.8)',
                  '0 0 20px rgba(147, 51, 234, 0.6)'
                ]
              }}
              transition={{ 
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                },
                boxShadow: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
            >
              <div className="absolute inset-0 bg-rift-texture opacity-50 mix-blend-overlay"></div>
              
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
              
              <motion.div 
                className="flex items-center justify-center z-10"
                animate={{ 
                  scale: [1, 1.05, 0.95, 1],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Compass className="text-white/90 h-8 w-8" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center text-muted-foreground/80 text-sm max-w-sm"
        >
          Select an era to begin your culinary journey
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TimePortal;
