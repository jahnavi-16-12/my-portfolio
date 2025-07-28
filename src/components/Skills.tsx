import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Server, 
  Palette, 
  Globe, 
  Zap, 
  Cloud, 
  GitBranch,
  Terminal,
  FileCode,
   Braces,
  Cpu
} from "lucide-react";

const Skills = () => {
  const skillsWithIcons = [
    { name: "HTML", icon: <FileCode className="w-4 h-4" /> },
    { name: "CSS", icon: <Palette className="w-4 h-4" /> },
    { name: "JavaScript", icon: <Braces className="w-4 h-4" /> },
    { name: "React", icon: <Code2 className="w-4 h-4" /> },
    { name: "Java", icon: <Terminal className="w-4 h-4" /> },
    { name: "Node.js", icon: <Server className="w-4 h-4" /> },
    { name: "Python", icon: <Cpu className="w-4 h-4" /> },
    { name: "MYSQL", icon: <Database className="w-4 h-4" /> },
    { name: "MongoDB", icon: <Database className="w-4 h-4" /> },
    { name: "Tailwind CSS", icon: <Palette className="w-4 h-4" /> },
    { name: "Next.js", icon: <Globe className="w-4 h-4" /> },
    { name: "Express", icon: <Server className="w-4 h-4" /> },
    { name: "Docker", icon: <Zap className="w-4 h-4" /> },
    { name: "Git", icon: <GitBranch className="w-4 h-4" /> },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to bring ideas to life.
          </p>
        </div>

        {/* Moving Skills Reel */}
        <div className="relative">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10"></div>
          
          <div className="overflow-hidden bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl py-8">
            <div className="flex animate-scroll space-x-6 hover:pause">
              {[...skillsWithIcons, ...skillsWithIcons, ...skillsWithIcons].map((skill, index) => (
                <Badge 
                  key={`${skill.name}-${index}`} 
                  variant="secondary" 
                  className="px-6 py-3 text-base font-medium bg-background/80 backdrop-blur-sm text-foreground border border-primary/30 whitespace-nowrap hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-primary">{skill.icon}</span>
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Code2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
            <p className="text-muted-foreground">HTML,CSS,Java Script,React, Tailwind CSS, Next.js</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Server className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
            <p className="text-muted-foreground">Node.js, Python, Express, MYSQL, MongoDB</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Cloud className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">API'S</h3>
            <p className="text-muted-foreground">RESTful API'S,Fast API</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;