import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profilePicture from "@/assets/profile-picture.jpg";

const About = () => {

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate developer eager to solve real-world problems through innovative tech solutions.
  Currently building full-stack projects and integrating AI to create meaningful applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
          <div className="lg:col-span-1 flex flex-col items-center text-center space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-full blur-xl animate-pulse"></div>
              <Avatar className="w-80 h-80 relative z-10 ring-4 ring-primary/30 ring-offset-4 ring-offset-background/50 backdrop-blur-sm bg-background/10 animate-float">
                <AvatarImage src={profilePicture} alt="Alex Johnson" className="object-cover mix-blend-overlay" />
                <AvatarFallback className="text-4xl bg-primary/10 text-primary backdrop-blur-sm">JG</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-3">Jahnavi Goud</h3>
              <p className="text-primary font-medium text-lg">Full Stack Developer | ML Enthusiast</p>
              <p className="text-muted-foreground">Hyderabad, India</p>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                I’m a Computer Science student passionate about building clean, scalable, and efficient web applications.
              From frontend interfaces to backend logic, I enjoy turning ideas into user-friendly digital products.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                 When I'm not coding, I enjoy learning new tools, improving my 
                 skills with hands-on projects, and diving into the latest trends in AI and 
                 development. I believe in continuous growth and love turning ideas into real, impactful solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;