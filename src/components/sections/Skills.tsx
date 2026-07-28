import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Cpu, Server } from "lucide-react";

const Skills = () => {
  const skillsInAction = [
    {
      title: "AWS Cloud Infrastructure",
      icon: Cloud,
      description: "Migrated 50+ static web assets to AWS S3 & CloudFront CDN, reducing global page load latency by 25%. Deployed web apps on EC2 Linux instances achieving 99.9% uptime.",
      technologies: ["AWS S3", "CloudFront", "EC2 Linux", "IAM Security"],
      color: "from-primary/20 to-primary/5",
      borderColor: "border-primary/50"
    },
    {
      title: "CI/CD & Containerization",
      icon: Server,
      description: "Building automated CI/CD build & deployment pipelines using Jenkins and containerizing application environments with Docker for seamless releases.",
      technologies: ["Jenkins CI/CD", "Docker", "Git/GitHub", "Linux Shell"],
      color: "from-accent/20 to-accent/5",
      borderColor: "border-accent/50"
    },
    {
      title: "Incident Automation & APIs",
      icon: Cpu,
      description: "Developed automated incident response workflows utilizing n8n low-code automation (40% MTTA reduction), Webhooks, and REST/SOAP API protocols.",
      technologies: ["n8n", "Webhooks", "REST & SOAP", "API Integration"],
      color: "from-blue-500/20 to-cyan-500/5",
      borderColor: "border-[#00f3ff]/50"
    }
  ];

  const technicalArsenal = [
    "AWS (EC2, S3, CloudFront, IAM)", "Docker", "Jenkins (CI/CD)", "Data Structures & Algorithms (DSA)", "Object-Oriented Programming (OOP)", "DBMS & SQL (MySQL)", "Operating Systems (Linux)", "Computer Networks & Protocols", "Python Scripting", "Java", "Software Engineering", "n8n Automation", "Git & GitHub", "REST & SOAP APIs"
  ];

  return (
    <div className="py-20 px-4 bg-black relative overflow-hidden" id="skills">
      {/* Background grids */}
      <div className="absolute inset-0 z-0 opacity-20"
        style={{ backgroundImage: 'linear-gradient(rgba(0,243,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,243,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-6xl font-black font-['Orbitron'] tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-[0_0_10px_rgba(0,243,255,0.3)] uppercase">
            Skills in Action
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full shadow-[0_0_15px_#00f3ff]" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillsInAction.map((skill, index) => (
            <Card
              key={index}
              className={`p-8 glass-effect bg-black/60 backdrop-blur-xl border ${skill.borderColor} shadow-[0_0_20px_rgba(0,243,255,0.1)] hover:shadow-[0_0_30px_rgba(181,0,255,0.3)] transition-all duration-500 hover:-translate-y-2 group`}
            >
              <div className="space-y-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(0,243,255,0.2)] group-hover:scale-110 transition-transform duration-500 border border-white/10`}>
                  <skill.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors drop-shadow-[0_0_8px_currentColor]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-['Orbitron'] group-hover:text-primary transition-colors tracking-wide">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base mb-6">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs px-3 py-1 font-['Orbitron'] border-primary/30 text-primary/80 group-hover:border-primary/60 group-hover:text-primary transition-colors bg-black/50 uppercase tracking-wider">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-12 glass-effect bg-black/50 backdrop-blur-lg border-2 border-accent/30 shadow-[0_0_30px_rgba(181,0,255,0.1)] hover:shadow-[0_0_40px_rgba(181,0,255,0.2)] transition-shadow duration-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-black font-['Orbitron'] text-accent tracking-widest uppercase mb-4 drop-shadow-[0_0_8px_rgba(181,0,255,0.5)]">Technical Arsenal</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {technicalArsenal.map((item, index) => (
              <Badge key={index} className="px-6 py-3 text-sm md:text-base border-2 border-primary/20 bg-transparent text-foreground hover:bg-primary/20 hover:border-primary hover:text-primary transition-all duration-300 font-['Orbitron'] tracking-wider uppercase cursor-default rounded-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 shadow-[0_0_5px_#00f3ff] animate-pulse" />
                {item}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
