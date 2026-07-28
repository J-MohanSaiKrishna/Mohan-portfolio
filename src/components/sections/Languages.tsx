import { Card } from "@/components/ui/card";
import { Server, Cloud, Cpu } from "lucide-react";

const Languages = () => {
  const highlights = [
    {
      title: "Linux & AWS Infrastructure",
      summary: "Managing EC2 Linux server deployments, S3 bucket storage policies, CloudFront CDN distribution, and load balancing protocols for 99.9% system uptime.",
      icon: Server,
      color: "from-primary/20",
      borderColor: "border-primary/50"
    },
    {
      title: "Docker & Jenkins Pipelines",
      summary: "Designing automated build and deployment pipelines with Jenkins, containerizing application services with Docker, and standardizing release environments.",
      icon: Cloud,
      color: "from-accent/20",
      borderColor: "border-accent/50"
    },
    {
      title: "Automated Incident Workflows",
      summary: "Developing automated incident response workflows utilizing n8n and Webhooks, achieving a 40% reduction in alert acknowledgement time (MTTA).",
      icon: Cpu,
      color: "from-cyan-500/20",
      borderColor: "border-[#00ffff]/50"
    }
  ];

  return (
    <div className="py-20 px-4 bg-transparent relative overflow-hidden" id="blog">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-6xl font-black font-['Orbitron'] tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-[0_0_15px_rgba(0,255,255,0.4)] uppercase">
            DevOps & Cloud Practices
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full shadow-[0_0_15px_#00ffff]" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-4 font-light">
            Specialized expertise in cloud infrastructure, CI/CD pipelines, and workflow automation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className={`p-6 md:p-8 card-hover glass-effect bg-black/60 backdrop-blur-xl border ${item.borderColor} shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden flex flex-col justify-between text-left`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`} />

              <div className="w-14 h-14 rounded-2xl bg-black border-[2px] border-white/10 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,0,0,0.8)] group-hover:scale-110 group-hover:border-primary/60 transition-all duration-500 relative z-10">
                <item.icon className="w-7 h-7 text-white/80 group-hover:text-primary transition-colors" />
              </div>

              <div className="relative z-10 space-y-3">
                <h3 className="text-xl font-bold text-foreground font-['Orbitron'] tracking-wide group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.summary}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Languages;
