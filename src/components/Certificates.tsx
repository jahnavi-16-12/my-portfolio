import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Calendar } from "lucide-react";

const Certificates = () => {
    const certificates = [
  {
    title: "NPTEL Elite Certification - Java",
    issuer: "NPTEL",
    date: "2024",
    credentialId: "NPTEL-JAVA-2024",
    validUntil: "—",
    description: "Strengthened object-oriented programming skills and coding proficiency.",
    skills: ["Java", "OOP", "Problem Solving"],
    verifyLink: "https://drive.google.com/file/d/1g44sHuGBnqj1htIUI_Qm1fK6REEnlqQi/view?usp=sharing"
  },
  {
    title: "NPTEL Certification - Data Structures",
    issuer: "NPTEL",
    date: "2024",
    credentialId: "NPTEL-DSA-2024",
    validUntil: "—",
    description: "Enhanced problem-solving skills and understanding of fundamental algorithms.",
    skills: ["Data Structures", "Algorithms", "Coding"],
    verifyLink: "https://drive.google.com/file/d/1d94acZ1LcJMm9MFFf7ydObkY2LTiUoaX/view?usp=sharing"
  },
  {
    title: "Python Certification - Coursera",
    issuer: "Google via Coursera",
    date: "2023",
    credentialId: "GOOGLE-PYTHON-COURSEERA",
    validUntil: "—",
    description: "Enhanced foundational knowledge and programming skills in Python.",
    skills: ["Python", "Programming", "Scripting"],
    verifyLink: "https://drive.google.com/file/d/1gaKFs0gGQk-2J6LNFgua-P5RxEnknccW/view?usp=sharing"
  },
  {
    title: "Python Certification - Cisco",
    issuer: "Cisco",
    date: "2024",
    credentialId: "CISCO-PYTHON-2024",
    validUntil: "—",
    description: "Improved Python fundamentals and logical problem-solving.",
    skills: ["Python", "Programming Basics", "Logic Building"],
    verifyLink: "https://drive.google.com/file/d/1ghD04MAn-SKqUXgojhG7ggIlO6tLsfOI/view?usp=sharing"
  },
  {
    title: "NPTEL Certification - C Programming",
    issuer: "NPTEL",
    date: "2023",
    credentialId: "NPTEL-C-2023",
    validUntil: "—",
    description: "Strengthened foundational programming concepts in C.",
    skills: ["C", "Procedural Programming", "Logic"],
    verifyLink: "https://drive.google.com/file/d/1tNr_K2BASUD2YJOs2MH5CP6MRobz4Elh/view?usp=sharing"
  },
  {
    title: "Artificial Intelligence & Data Science",
    issuer: "Edutantr",
    date: "2024",
    credentialId: "EDUTANTR-AI-2024",
    validUntil: "—",
    description: "Certified in machine learning, data analysis, and applied AI.",
    skills: ["AI", "ML", "Data Science", "Analytics"],
    verifyLink: "https://drive.google.com/file/d/1h_vbAOJPLxlk9ybqZZGi24gNRyiu5ffB/view?usp=sharing"
  }
];


  return (
    <section id="certificates" className="py-20 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Certificates</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications that validate my expertise in various technologies and platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <Card 
              key={cert.credentialId}
              className="group p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-[1.02] animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <Award className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                        {cert.title}
                      </CardTitle>
                      <p className="text-primary font-medium">{cert.issuer}</p>
                    </div>
                  </div>
                  <a 
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                    title="Verify Certificate"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="secondary" 
                        className="text-xs bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>Issued: {cert.date}</span>
                    </div>
                    <span>Valid until: {cert.validUntil}</span>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    ID: {cert.credentialId}
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

export default Certificates;