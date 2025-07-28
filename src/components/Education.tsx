import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      school: "Vignan Institute of Technology and Science",
      location: "Hyderabad, India",
      duration: "2022 – 2026",
      gpa: "9.01 CGPA",
      courses: ["Data Structures","Object-Oriented Programming","Web Technologies","Artificial Intelligence","Machine Learning"],
      description: "Gained strong technical foundation in core CS subjects while building full-stack development and AI-based projects."
    },
    {
      degree: "Intermediate - MPC (Math, Physics, Chemistry)",
      school: "Narayana Junior College",
      location: "Hyderabad, India",
      duration: "2020 – 2022",
      gpa: "9.82 CGPA",
      courses: ["Mathematics", "Physics", "Chemistry"],
      description: "Focused on core science subjects as a foundation for computer science engineering."
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic journey and continuous learning in computer science and technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card 
              key={edu.degree}
              className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                      <h3 className="text-lg font-semibold text-primary">{edu.school}</h3>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {edu.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">GPA</h4>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/20">
                      {edu.gpa}
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Relevant Courses</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <Badge 
                          key={course}
                          variant="outline" 
                          className="text-xs bg-secondary/50 hover:bg-secondary/80 transition-colors"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;