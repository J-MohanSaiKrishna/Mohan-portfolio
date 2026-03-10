import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Server, Terminal, AlertCircle, CheckCircle2, TrendingUp } from "lucide-react";

const Experience = () => {
  const projects = [
    {
      title: "Oracle Integration Cloud Recipes",
      icon: Server,
      problem: "Manual HR data transfer between systems.",
      solution: "Built REST/SOAP integrations using OIC accelerators.",
      impact: "Reduced manual workload, improved accuracy.",
      color: "from-primary/20 to-transparent",
      borderColor: "border-primary/50"
    },
    {
      title: "React Web App",
      icon: Rocket,
      problem: "Lack of interactive project showcase.",
      solution: "Developed a responsive React portfolio hosted on AWS.",
      impact: "Increased recruiter engagement with live demos.",
      color: "from-accent/20 to-transparent",
      borderColor: "border-accent/50"
    },
    {
      title: "Python Automation Toolkit",
      icon: Terminal,
      problem: "Time-consuming data preparation.",
      solution: "Automated cleaning and reporting scripts.",
      impact: "Cut processing time by 30%, improved consistency.",
      color: "from-blue-500/20 to-transparent",
      borderColor: "border-[#00f3ff]/50"
    }
  ];

  return (
    <div className="py-20 px-4 bg-black relative overflow-hidden" id="experience">
      {/* Background grids */}
      <div className="absolute inset-0 z-0 opacity-10"
        style={{ backgroundImage: 'linear-gradient(rgba(181,0,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(181,0,255,0.2) 1px, transparent 1px)', backgroundSize: '60px 60px', backgroundPosition: 'center center' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-6xl font-black font-['Orbitron'] tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary drop-shadow-[0_0_10px_rgba(181,0,255,0.3)] uppercase">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent via-primary to-accent mx-auto rounded-full shadow-[0_0_15px_#b500ff]" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-4 font-light">
            Showcasing solutions built for real-world impact
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`p-6 md:p-8 glass-effect bg-black/60 backdrop-blur-xl border ${project.borderColor} shadow-[0_0_20px_rgba(181,0,255,0.05)] hover:shadow-[0_0_30px_rgba(0,243,255,0.2)] transition-all duration-500 hover:-translate-y-1 group relative overflow-hidden animate-in fade-in slide-in-bottom`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${project.color} opacity-30 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none`} />

              <div className="flex flex-col md:flex-row gap-6 relative z-10">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500">
                    <project.icon className="w-8 h-8 text-white group-hover:text-primary transition-colors drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] group-hover:drop-shadow-[0_0_10px_#00f3ff]" />
                  </div>
                </div>

                <div className="flex-grow space-y-4">
                  <h3 className="text-2xl font-bold text-foreground font-['Orbitron'] tracking-wide group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 bg-black/40 p-3 rounded-lg border border-white/5">
                      <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-bold text-red-400 uppercase tracking-wider block mb-0.5 font-['Orbitron']">Problem</span>
                        <span className="text-foreground/80">{project.problem}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-black/40 p-3 rounded-lg border border-white/5">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-bold text-primary uppercase tracking-wider block mb-0.5 font-['Orbitron']">Solution</span>
                        <span className="text-foreground/80">{project.solution}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-black/40 p-3 rounded-lg border border-white/5">
                      <TrendingUp className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-bold text-green-400 uppercase tracking-wider block mb-0.5 font-['Orbitron']">Impact</span>
                        <span className="text-foreground/80">{project.impact}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
