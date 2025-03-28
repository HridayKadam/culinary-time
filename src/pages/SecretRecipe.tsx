
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { getRecipeBySlug } from '../data/recipes';
import { Recipe } from '../types/recipe';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const SecretRecipe: React.FC = () => {
  const { era, slug } = useParams<{ era: string; slug: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [unlocking, setUnlocking] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = 'Secret Recipe - Culinary Time Rifts';
    
    if (slug) {
      const foundRecipe = getRecipeBySlug(slug);
      if (foundRecipe && foundRecipe.isSecret) {
        setRecipe(foundRecipe);
        
        // Simulate the unlocking process
        const timer = setTimeout(() => {
          setUnlocking(false);
          toast({
            title: "Secret Recipe Unlocked!",
            description: `You've discovered ${foundRecipe.title}`,
          });
        }, 3000);
        
        return () => clearTimeout(timer);
      } else {
        navigate(`/${era}`);
      }
    }
  }, [slug, era, navigate]);
  
  if (!recipe) {
    return null;
  }
  
  const getEraStyles = () => {
    if (era === 'medieval') {
      return {
        background: 'bg-medieval-dark',
        text: 'text-medieval-light',
        border: 'border-medieval',
        font: 'font-medieval'
      };
    } else if (era === 'cyberpunk') {
      return {
        background: 'bg-cyberpunk-dark',
        text: 'text-cyberpunk-light',
        border: 'border-cyberpunk',
        font: 'font-cyberpunk'
      };
    } else {
      return {
        background: 'bg-apocalyptic-dark',
        text: 'text-apocalyptic-light',
        border: 'border-apocalyptic',
        font: 'font-apocalyptic'
      };
    }
  };
  
  const styles = getEraStyles();
  
  if (unlocking) {
    return (
      <div className={`min-h-screen flex flex-col ${styles.background}`}>
        <Navigation />
        
        <div className="flex-grow flex flex-col items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className={`w-24 h-24 rounded-full ${styles.border} flex items-center justify-center`}
          >
            <div className={`w-16 h-16 rounded-full ${styles.background} ${styles.border}`}></div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={`mt-8 text-2xl ${styles.font} ${styles.text}`}
          >
            Unlocking Secret Recipe
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 1 }}
            className={`mt-4 max-w-md text-center ${styles.text} opacity-80`}
          >
            Accessing hidden culinary knowledge from this era...
          </motion.p>
        </div>
        
        <Footer />
      </div>
    );
  }
  
  return (
    <div className={`min-h-screen flex flex-col ${styles.background}`}>
      <Navigation />
      
      <div className="flex-grow container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className={`max-w-2xl mx-auto p-8 rounded-lg ${styles.border} ${styles.background}`}
        >
          <h1 className={`text-3xl ${styles.font} ${styles.text} mb-6 text-center`}>
            Secret Recipe Discovered!
          </h1>
          
          <h2 className={`text-2xl ${styles.font} ${styles.text} mb-4`}>
            {recipe.title}
          </h2>
          
          <p className={`${styles.text} opacity-90 mb-6`}>
            {recipe.description}
          </p>
          
          <div className="flex justify-center mt-8">
            <Button
              onClick={() => navigate(`/${era}/${slug}`)}
              className={`${styles.background} hover:bg-opacity-80`}
            >
              View Full Recipe
            </Button>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SecretRecipe;
