import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Database, Cloud, Code2, Zap, User } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Cloud,
      title: "Cloud Integrations",
      description: "Oracle Integration Cloud, REST/SOAP, and AWS basics.",
    },
    {
      icon: Code2,
      title: "Full-Stack Dev",
      description: "React, Python, Java, and modern web architectures.",
    },
    {
      icon: Database,
      title: "Data & Automation",
      description: "SQL, Python scripting, and data processing.",
    },
    {
      icon: Zap,
      title: "Business Impact",
      description: "Bridging theory with practice to deliver real solutions.",
    },
  ];

  return (
    <div className="py-20 px-4 bg-transparent relative overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24 space-y-4 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-6xl font-black font-['Orbitron'] tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]">
            ABOUT ME
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full shadow-[0_0_15px_#00ffff] animate-pulse-glow" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16 mt-8">
          {/* Left side - Personal intro with silhouette */}
          <div className="space-y-6 pt-10">
            <Card className="p-8 pt-12 glass-effect border-[2px] border-primary/40 shadow-[0_0_40px_rgba(0,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,0,255,0.25)] hover:border-accent/60 transition-all duration-700 bg-black/60 backdrop-blur-2xl relative overflow-visible group animate-float">

              {/* Glowing Profile Silhouette */}
              <div className="absolute -top-12 left-8 w-24 h-24 rounded-full bg-black border-[3px] border-primary shadow-[0_0_30px_#00ffff] flex items-center justify-center z-20 group-hover:border-accent group-hover:shadow-[0_0_40px_#ff00ff] transition-all duration-700">
                <User className="w-12 h-12 text-primary group-hover:text-accent animate-pulse-glow transition-colors duration-700" />
              </div>

              {/* Internal abstract glow */}
              <div className="absolute -inset-20 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl rounded-full" />

              <div className="relative z-10 space-y-6">
                <p className="text-lg md:text-xl text-foreground font-light leading-relaxed animate-in fade-in slide-in-bottom duration-1000 delay-150 relative">
                  <span className="text-primary font-bold drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] text-2xl pr-1">"</span>
                  I’m <span className="text-primary font-bold drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">Mohan Sai Krishna J</span>, a Computer Science Engineering graduate (B.Tech, 2025) with a strong academic record and hands-on project experience in cloud computing, Oracle Integration Cloud, and software development.
                </p>
                <p className="text-lg md:text-xl text-foreground font-light leading-relaxed animate-in fade-in slide-in-bottom duration-1000 delay-300 relative">
                  I specialize in REST and SOAP integrations, Python, Java, SQL, React, and AWS basics. My strength lies in bridging theory with practice — explaining complex concepts simply and delivering solutions that create business impact.
                  <span className="text-primary font-bold drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] text-2xl pl-1 animate-blink">"</span>
                </p>

                <div className="flex flex-wrap gap-3 mt-8 animate-in fade-in slide-in-bottom duration-1000 delay-500">
                  {['OIC', 'AWS', 'React', 'Python', 'Java', 'SQL'].map((skill, i) => (
                    <Badge key={skill} className="bg-transparent border border-primary/50 text-foreground hover:bg-primary hover:text-black hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] hover:border-primary transition-all duration-300 font-['Orbitron'] tracking-widest px-4 py-2 text-xs uppercase" style={{ animationDelay: `${i * 100}ms` }}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Right side - Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 animate-in fade-in slide-in-right duration-1000 pt-10 lg:pt-0">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="p-6 card-hover glass-effect border border-accent/30 space-y-4 hover:border-primary/60 transition-all duration-500 bg-black/40 backdrop-blur-xl group hover:-translate-y-3 hover:-rotate-2 relative overflow-hidden shadow-[0_0_20px_rgba(255,0,255,0.1)]"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center shadow-[0_0_20px_rgba(255,0,255,0.3)] group-hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] transition-all duration-500 border border-accent/50 group-hover:border-primary group-hover:scale-110 relative z-10">
                  <highlight.icon className="w-7 h-7 text-accent group-hover:text-primary transition-colors drop-shadow-[0_0_8px_currentColor]" />
                </div>
                <div className="relative z-10 pt-2">
                  <h4 className="font-['Orbitron'] font-bold text-foreground mb-3 group-hover:text-primary transition-colors text-lg tracking-wider drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-white/90 transition-colors">{highlight.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
