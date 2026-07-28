import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Server, Cpu, ShieldCheck, Zap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "AWS Cloud Computing Intern",
      company: "Cloud Infrastructure & Web Operations",
      location: "Remote",
      duration: "05/2024 – 08/2024",
      highlights: [
        {
          title: "Asset Migration & Optimization",
          icon: Cloud,
          detail: "Transitioned 50+ static web assets (CSS, JS, Images) to AWS S3 and configured CloudFront CDN, reducing global page load latency by 25%.",
          metric: "25% Latency Reduction",
        },
        {
          title: "Infrastructure Deployment",
          icon: Server,
          detail: "Managed the deployment of web applications on EC2 Linux instances, implementing load balancing protocols to achieve 99.9% system uptime.",
          metric: "99.9% System Uptime",
        },
        {
          title: "Workflow Automation",
          icon: Cpu,
          detail: "Developed automated incident response workflows utilizing n8n, reducing alert acknowledgement time (MTTA) by 40%.",
          metric: "40% MTTA Reduction",
        },
        {
          title: "Cloud Security",
          icon: ShieldCheck,
          detail: "Implemented IAM policies and configured security groups to secure API endpoints and protect sensitive data assets from unauthorized access.",
          metric: "IAM & Security Groups",
        },
      ],
      technologies: ["AWS S3", "AWS CloudFront", "AWS EC2", "AWS IAM", "Linux", "n8n", "CI/CD Protocols"],
      color: "from-primary/20 to-transparent",
      borderColor: "border-primary/50"
    }
  ];

  return (
    <div className="py-20 px-4 bg-black relative overflow-hidden" id="experience">
      {/* Background grids */}
      <div className="absolute inset-0 z-0 opacity-10"
        style={{ backgroundImage: 'linear-gradient(rgba(181,0,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(181,0,255,0.2) 1px, transparent 1px)', backgroundSize: '60px 60px', backgroundPosition: 'center center' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-6xl font-black font-['Orbitron'] tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent drop-shadow-[0_0_10px_rgba(181,0,255,0.3)] uppercase">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent via-primary to-accent mx-auto rounded-full shadow-[0_0_15px_#b500ff]" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-4 font-light">
            Real-world impact across Cloud Infrastructure, Asset Optimization & Workflow Automation
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`p-6 md:p-8 glass-effect bg-black/60 backdrop-blur-xl border ${exp.borderColor} shadow-[0_0_20px_rgba(181,0,255,0.05)] hover:shadow-[0_0_30px_rgba(0,243,255,0.2)] transition-all duration-500 group relative overflow-hidden`}
            >
              <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${exp.color} opacity-30 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative z-10 space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-gray-800 pb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-['Orbitron'] tracking-wide group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-[#85c4b9] font-medium text-lg mt-1">
                      {exp.company} <span className="text-gray-500">• {exp.location}</span>
                    </p>
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-gray-900 border border-gray-700 text-sm font-mono text-gray-300 w-fit">
                    {exp.duration}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {exp.highlights.map((item, idx) => (
                    <div key={idx} className="bg-black/40 p-4 rounded-xl border border-white/5 space-y-2 hover:border-primary/30 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <item.icon className="w-5 h-5 text-[#85c4b9]" />
                          <h4 className="font-bold text-white text-sm font-['Orbitron']">{item.title}</h4>
                        </div>
                        <span className="text-xs px-2 py-0.5 rounded bg-[#a1b56c]/20 text-[#a1b56c] font-semibold">
                          {item.metric}
                        </span>
                      </div>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-['Orbitron'] mb-3">Technologies Used</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs px-3 py-1 font-['Orbitron'] border-primary/30 text-primary/90 bg-black/50">
                        {tech}
                      </Badge>
                    ))}
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
