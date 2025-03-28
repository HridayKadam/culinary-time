
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TimePortal from '../components/TimePortal';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    document.title = 'Culinary Time Rifts - Journey Through Cooking Eras';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-grow"
      >
        <div className="container mx-auto px-4 py-8">
          <TimePortal />
          
          <div className="max-w-4xl mx-auto mt-16 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-center">Explore Culinary Time Rifts</h2>
              <p className="text-muted-foreground text-center mb-8">
                Step through glowing portals to discover recipes from different eras of history and imagination.
                From medieval feasts to cyberpunk street food to post-apocalyptic survival meals, each recipe is
                a journey through time and taste.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-medieval-dark/30 p-6 rounded-lg border border-medieval"
                >
                  <h3 className="text-xl font-medieval mb-2 text-medieval-light">Medieval Era</h3>
                  <p className="text-sm text-medieval-light/70">
                    Ancient recipes recorded on aged parchment. Hearty stews, honey cakes, and mystical
                    brews from the age of castles and kingdoms.
                  </p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-cyberpunk-dark/30 p-6 rounded-lg border border-cyberpunk"
                >
                  <h3 className="text-xl font-cyberpunk mb-2 text-cyberpunk-light">Cyberpunk Era</h3>
                  <p className="text-sm text-cyberpunk-light/70">
                    Futuristic cuisine from neon-lit streets. Lab-grown ingredients, nutrient-dense formulations,
                    and mood-altering flavors from the digital frontier.
                  </p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-apocalyptic-dark/30 p-6 rounded-lg border border-apocalyptic"
                >
                  <h3 className="text-xl font-apocalyptic mb-2 text-apocalyptic-light">Apocalyptic Era</h3>
                  <p className="text-sm text-apocalyptic-light/70">
                    Survival recipes for a harsh world. Scavenged ingredients, long-lasting preserves, and
                    resourceful cooking methods from the wasteland.
                  </p>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="mt-12 p-6 bg-rift-dark/30 rounded-lg border border-rift text-center"
              >
                <h3 className="text-xl font-rift mb-2">Discover Secret Recipes</h3>
                <p className="text-sm opacity-80">
                  Hidden throughout the time rifts are secret recipes waiting to be discovered.
                  Explore thoroughly, combine unusual ingredients, or solve era-specific riddles to unlock them.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default Index;
