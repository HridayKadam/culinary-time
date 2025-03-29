
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TimePortal from '../components/TimePortal';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { BookOpen, Flame, ScrollText } from 'lucide-react';

const Index: React.FC = () => {
  useEffect(() => {
    document.title = 'Culinary Time Rifts - Journey Through Cooking Eras';
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-background/70">
      <Navigation />
      
      {/* Main Content Container */}
      <main className="flex-grow pt-24 md:pt-32"> {/* Increased top padding to prevent overlap */}
        <div className="container mx-auto px-4">
          {/* Time Portal */}
          <section className="py-12 md:py-16">
            <TimePortal />
          </section>
          
          {/* Main Content */}
          <div className="max-w-5xl mx-auto px-4 space-y-24 pb-16">
            {/* Heading Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center space-y-8 pt-8" /* Added top padding */
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rift-light to-rift">
                Explore Culinary Time Rifts
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Step through glowing portals to discover recipes from different eras of history and imagination.
                From medieval feasts to cyberpunk street food to post-apocalyptic survival meals, each recipe is
                a journey through time and taste.
              </p>
            </motion.section>
              
            {/* Era Cards Section */}
            <section className="pt-8"> {/* Added top padding */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Link to="/medieval">
                  <motion.div 
                    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(139,69,19,0.4)' }}
                    className="bg-gradient-to-br from-medieval-dark/80 to-medieval-dark/40 p-8 rounded-xl border border-medieval h-full flex flex-col relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=1080')] bg-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <h3 className="text-2xl font-medieval mb-4 text-medieval-light relative z-10">Medieval Era</h3>
                    <p className="text-sm text-medieval-light/80 relative z-10 flex-grow">
                      Ancient recipes recorded on aged parchment. Hearty stews, honey cakes, and mystical
                      brews from the age of castles and kingdoms.
                    </p>
                    <div className="mt-6 text-medieval-accent flex items-center justify-end relative z-10">
                      <span className="text-sm mr-2">Explore</span>
                      <ScrollText className="h-4 w-4" />
                    </div>
                  </motion.div>
                </Link>
                  
                <Link to="/cyberpunk">
                  <motion.div 
                    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(30,144,255,0.4)' }}
                    className="bg-gradient-to-br from-cyberpunk-dark/80 to-cyberpunk-dark/40 p-8 rounded-xl border border-cyberpunk h-full flex flex-col relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1080')] bg-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <h3 className="text-2xl font-cyberpunk mb-4 text-cyberpunk-light relative z-10">Cyberpunk Era</h3>
                    <p className="text-sm text-cyberpunk-light/80 relative z-10 flex-grow">
                      Futuristic cuisine from neon-lit streets. Lab-grown ingredients, nutrient-dense formulations,
                      and mood-altering flavors from the digital frontier.
                    </p>
                    <div className="mt-6 text-cyberpunk-accent flex items-center justify-end relative z-10">
                      <span className="text-sm mr-2">Explore</span>
                      <Flame className="h-4 w-4" />
                    </div>
                  </motion.div>
                </Link>
                  
                <Link to="/apocalyptic">
                  <motion.div 
                    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(165,42,42,0.4)' }}
                    className="bg-gradient-to-br from-apocalyptic-dark/80 to-apocalyptic-dark/40 p-8 rounded-xl border border-apocalyptic h-full flex flex-col relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=1080')] bg-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <h3 className="text-2xl font-apocalyptic mb-4 text-apocalyptic-light relative z-10">Apocalyptic Era</h3>
                    <p className="text-sm text-apocalyptic-light/80 relative z-10 flex-grow">
                      Survival recipes for a harsh world. Scavenged ingredients, long-lasting preserves, and
                      resourceful cooking methods from the wasteland.
                    </p>
                    <div className="mt-6 text-apocalyptic-accent flex items-center justify-end relative z-10">
                      <span className="text-sm mr-2">Explore</span>
                      <BookOpen className="h-4 w-4" />
                    </div>
                  </motion.div>
                </Link>
              </div>
            </section>
                
            {/* Secret Recipes Section */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="p-8 bg-gradient-to-r from-rift-dark/60 to-rift-dark/20 rounded-xl border border-rift text-center"
            >
              <h3 className="text-2xl font-rift mb-4 text-rift-light">Discover Secret Recipes</h3>
              <p className="text-sm opacity-80 max-w-2xl mx-auto">
                Hidden throughout the time rifts are secret recipes waiting to be discovered.
                Explore thoroughly, combine unusual ingredients, or solve era-specific riddles to unlock them.
              </p>
            </motion.section>

            {/* Featured Recipes Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="bg-gradient-to-br from-medieval-dark/60 to-medieval/10 p-8 rounded-xl border border-medieval/30 transition-all duration-300 hover:shadow-[0_5px_20px_rgba(139,69,19,0.2)]">
                <h3 className="text-xl font-medieval mb-4 text-medieval-light">Featured Medieval Recipe</h3>
                <p className="text-sm text-medieval-light/80 mb-4">
                  Royal Honey Cakes - Sweet treats fit for nobility, these honey-soaked cakes were a luxury in medieval times.
                </p>
                <Link to="/medieval/honey-cakes" className="text-medieval-accent hover:text-medieval-accent/80 text-sm flex items-center group">
                  <span className="group-hover:underline">View Recipe</span>
                  <ScrollText className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              
              <div className="bg-gradient-to-br from-cyberpunk-dark/60 to-cyberpunk/10 p-8 rounded-xl border border-cyberpunk/30 transition-all duration-300 hover:shadow-[0_5px_20px_rgba(30,144,255,0.2)]">
                <h3 className="text-xl font-cyberpunk mb-4 text-cyberpunk-light">Featured Cyberpunk Recipe</h3>
                <p className="text-sm text-cyberpunk-light/80 mb-4">
                  Neon Ramen 2.0 - The ultimate street food of Neo-Tokyo. This glow-in-the-dark ramen is both nutritious and visually stunning.
                </p>
                <Link to="/cyberpunk/neon-ramen" className="text-cyberpunk-accent hover:text-cyberpunk-accent/80 text-sm flex items-center group">
                  <span className="group-hover:underline">View Recipe</span>
                  <Flame className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
