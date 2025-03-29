
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useToast } from '../hooks/use-toast';
import PortalHeader from './portal/PortalHeader';
import PortalWaves from './portal/PortalWaves';
import PortalCore from './portal/PortalCore';
import EraButton from './portal/EraButton';

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
      <PortalHeader />
      
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
          <PortalWaves />
          
          {/* Era selection buttons arranged in a circle */}
          <div className="relative w-full h-full flex items-center justify-center">
            <EraButton 
              era="Medieval" 
              position="top" 
              onClick={handleEraSelect} 
            />
            
            <EraButton 
              era="Cyberpunk" 
              position="bottom-left" 
              onClick={handleEraSelect} 
            />
            
            <EraButton 
              era="Apocalyptic" 
              position="bottom-right" 
              onClick={handleEraSelect} 
            />
            
            {/* Central portal glow */}
            <PortalCore portalEnergy={portalEnergy} />
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
