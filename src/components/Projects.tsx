import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

// Import local images
import simonsays from "../assets/simonsays.png";
import aiid from "../assets/aiid.png";
import facebook from "../assets/facebook.png";
import spotify from "../assets/spotify.png";
import portfolio1 from "../assets/portfolio1.png";

const Projects = () => {
  const projects = [
    {
      title: "Facebook Sentiment Analysis",
      description: "This project analyzes the sentiment of Facebook posts using Python and the Facebook Graph API. It uses Natural Language Processing (NLP) and the TextBlob library to classify posts as positive, negative, or neutral. Results are visualized for better understanding.",
      image: facebook,
      technologies: ["Python", "NLP", "TextBlob", "Facebook Graph API"],
      liveUrl: "https://github.com/jahnavi-16-12/-FACEBOOOK-SENTIMENT-ANALYSIS-USING-PYTHON",
      githubUrl: "https://github.com/jahnavi-16-12/-FACEBOOOK-SENTIMENT-ANALYSIS-USING-PYTHON"
    },
    {
      title: "AI-Based College ID Validator (Offline)",
      description: "An AI-powered system that validates  College ID cards offline using OCR and FastAPI. Trained on real ID datasets with high accuracy.",
      image: aiid,
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      liveUrl: "https://github.com/jahnavi-16-12/AI-ID-Card-Validator",
      githubUrl: "https://github.com/jahnavi-16-12/AI-ID-Card-Validator"
    },
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio to showcase education, certificates, and projects. Built with React, Tailwind..",
      image: portfolio1,
      technologies: ["Vue.js", "D3.js", "OpenWeather API", "Sass"],
      liveUrl: "https://github.com/jahnavi-16-12/my-portfolio",
      githubUrl: "https://github.com/jahnavi-16-12/my-portfolio"
    },
    {
      title: "Simon Says Game",
      description: "A fun and interactive memory game built using HTML, CSS, and JavaScript. Tests the user’s memory as they repeat an ever-growing sequence of colors.",
      image: simonsays,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://github.com/jahnavi-16-12/Simon-Says-Game",
      githubUrl: "https://github.com/jahnavi-16-12/Simon-Says-Game"
    },
    {
      title: "Spotify clone",
      description: "🎧 Spotify Clone - Web Player UI A simple and clean static clone of the Spotify Web Player UI, built with only HTML and CSS.",
      image: spotify,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://github.com/jahnavi-16-12/spotify-clone",
      githubUrl: "https://github.com/jahnavi-16-12/spotify-clone"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating my skills in full-stack development, 
            Machine Learning, and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm"
                    className="bg-gradient-primary hover:opacity-90 transition-opacity"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/50 text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;