
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Page Not Found - Culinary Time Rifts";
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 pt-32 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md p-8 border border-border rounded-lg bg-card"
        >
          <h1 className="text-5xl font-bold mb-6">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Oops! This timeline doesn't exist.
          </p>
          <Link 
            to="/" 
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Return to the Present
          </Link>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
