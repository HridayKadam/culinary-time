
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface BackToEraProps {
  era: string;
}

const BackToEra: React.FC<BackToEraProps> = ({ era }) => {
  const navigate = useNavigate();
  
  const getEraDisplayName = () => {
    switch(era) {
      case 'medieval':
        return 'Medieval';
      case 'cyberpunk':
        return 'Cyberpunk';
      case 'apocalyptic':
        return 'Apocalyptic';
      default:
        return era;
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-8"
    >
      <Button
        variant="ghost"
        onClick={() => navigate(`/${era}`)}
        className="group flex items-center text-muted-foreground hover:text-foreground transition-all duration-300"
      >
        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Back to {getEraDisplayName()} recipes
      </Button>
    </motion.div>
  );
};

export default BackToEra;
