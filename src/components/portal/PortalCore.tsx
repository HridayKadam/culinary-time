
import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

interface PortalCoreProps {
  portalEnergy: number;
}

const PortalCore: React.FC<PortalCoreProps> = ({ portalEnergy }) => {
  return (
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
  );
};

export default PortalCore;
