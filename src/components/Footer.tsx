
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Mail, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background/80 border-t border-border mt-12">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold font-rift mb-2">Culinary Time Rifts</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Explore culinary adventures across different eras. Each recipe is a journey through time.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://twitter.com/HridayKadam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://github.com/hridaykadam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/hridaykadam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:hriday.kadam@example.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <div className="text-xs text-muted-foreground">
              <Link to="/about" className="hover:text-primary transition-colors">
                About
              </Link>
              <span className="mx-2">•</span>
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground mb-2 md:mb-0">
            © {new Date().getFullYear()} Culinary Time Rifts. All rights reserved.
          </p>
          
          <p className="text-xs text-muted-foreground flex items-center">
            Made with <Heart size={12} className="mx-1 text-destructive" /> by Hriday Kadam
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
