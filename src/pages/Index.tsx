
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import TimePortal from '../components/TimePortal';
import RecentlyViewed from '../components/RecentlyViewed';
import { useRecipe } from '../context/RecipeContext';

const Index: React.FC = () => {
  const { getRecentlyViewed } = useRecipe();
  
  useEffect(() => {
    document.title = 'Culinary Time Rifts - Recipes Across Timelines';
  }, []);

  const hasRecentlyViewed = getRecentlyViewed().length > 0;
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow flex flex-col justify-center">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <TimePortal />
          
          {hasRecentlyViewed && (
            <div className="max-w-5xl mx-auto">
              <RecentlyViewed />
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
