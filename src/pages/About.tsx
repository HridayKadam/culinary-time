
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, User } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About - Culinary Time Rifts';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-grow container mx-auto px-4 py-16"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-block p-2 bg-rift/20 rounded-full mb-4">
              <User className="h-8 w-8 text-rift-light" />
            </div>
            <h1 className="text-4xl font-bold mb-4">About the Creator</h1>
            <div className="border-b border-border w-24 mx-auto mb-6"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-rift to-rift-accent rounded-full opacity-20 animate-pulse"></div>
                <div className="bg-gradient-to-tr from-rift-dark to-rift rounded-full p-1">
                  <div className="bg-background rounded-full p-1">
                    <img 
                      src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
                      alt="Hriday Kadam" 
                      className="w-56 h-56 object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Hriday Kadam</h2>
              <p className="text-muted-foreground mb-6">
                Passionate food enthusiast, time traveler, and digital architect. I created Culinary Time Rifts 
                to bring together my love for cooking and immersive storytelling.
              </p>
              
              <p className="text-muted-foreground mb-6">
                With a background in both culinary arts and digital design, I explore how food connects us 
                across different eras and worlds - from medieval feasts to futuristic cyberpunk cuisine.
              </p>
              
              <div className="flex space-x-4 mt-8">
                <a 
                  href="https://twitter.com/HridayKadam" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-rift/10 hover:bg-rift/20 p-3 rounded-full transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="https://github.com/hridaykadam" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-rift/10 hover:bg-rift/20 p-3 rounded-full transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/hridaykadam" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-rift/10 hover:bg-rift/20 p-3 rounded-full transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:hriday.kadam@example.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-rift/10 hover:bg-rift/20 p-3 rounded-full transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 p-8 bg-gradient-to-r from-rift-dark/30 to-rift/30 rounded-lg border border-rift/30"
          >
            <h3 className="text-2xl font-bold mb-4 text-center">About Culinary Time Rifts</h3>
            <p className="text-center mb-6">
              This project is a journey through culinary history and imagination - a blend of recipes, 
              storytelling, and interactive exploration across different eras.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-background/30 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2">Medieval Era</h4>
                <p className="text-sm text-muted-foreground">
                  Explore recipes from the age of castles and kingdoms, where hearty stews and honey-sweetened 
                  treats were prepared over open fires.
                </p>
              </div>
              
              <div className="bg-background/30 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2">Cyberpunk Era</h4>
                <p className="text-sm text-muted-foreground">
                  Dive into the neon-lit future where cuisine meets technology, creating nutrient-dense 
                  formulations and mood-altering flavor profiles.
                </p>
              </div>
              
              <div className="bg-background/30 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2">Apocalyptic Era</h4>
                <p className="text-sm text-muted-foreground">
                  Discover survival cooking techniques from a world rebuilding itself, where resourcefulness 
                  and preservation methods are key to creating nourishing meals.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default About;
