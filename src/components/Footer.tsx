import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Jahnavi Goud
            </div>
            <p className="text-muted-foreground">
              Full Stack Developer | ML Enthusiast
            </p>
          </div>
          
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <a 
              href="https://github.com/jahnavi-16-12" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/jahnavigoud16/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:jahnavigoud16@gmail.com"
              className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground flex items-center justify-center">
            © {currentYear} Jahnavi Goud.Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;