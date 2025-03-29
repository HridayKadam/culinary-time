
import React from 'react';
import { motion } from 'framer-motion';

const PortalWaves: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default PortalWaves;
