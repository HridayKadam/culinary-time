
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

interface EraButtonProps {
  era: string;
  position: 'top' | 'bottom-left' | 'bottom-right';
  onClick: (era: string) => void;
}

const EraButton: React.FC<EraButtonProps> = ({ era, position, onClick }) => {
  const getPositionClasses = () => {
    switch (position) {
      case 'top':
        return "absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4";
      case 'bottom-left':
        return "absolute bottom-1/4 left-0 transform -translate-x-1/4";
      case 'bottom-right':
        return "absolute bottom-1/4 right-0 transform translate-x-1/4";
      default:
        return "";
    }
  };

  // Dynamic classes based on era
  const getEraClasses = () => {
    switch (era.toLowerCase()) {
      case 'medieval':
        return "bg-medieval border-2 border-medieval-light hover:bg-medieval-dark text-medieval-light shadow-[0_0_15px_rgba(139,69,19,0.5)] rounded-full px-6";
      case 'cyberpunk':
        return "bg-cyberpunk border-2 border-cyberpunk-light hover:bg-cyberpunk-dark text-cyberpunk-light shadow-[0_0_15px_rgba(30,144,255,0.5)] rounded-full px-6";
      case 'apocalyptic':
        return "bg-apocalyptic border-2 border-apocalyptic-light hover:bg-apocalyptic-dark text-apocalyptic-light shadow-[0_0_15px_rgba(165,42,42,0.5)] rounded-full px-6";
      default:
        return "bg-primary rounded-full px-6";
    }
  };

  // Dynamic font class based on era
  const getFontClass = () => {
    switch (era.toLowerCase()) {
      case 'medieval':
        return "font-medieval";
      case 'cyberpunk':
        return "font-cyberpunk";
      case 'apocalyptic':
        return "font-apocalyptic";
      default:
        return "";
    }
  };

  return (
    <motion.div 
      className={getPositionClasses()}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Button 
        onClick={() => onClick(era)}
        className={getEraClasses()}
      >
        <span className={getFontClass()}>{era}</span>
      </Button>
    </motion.div>
  );
};

export default EraButton;
