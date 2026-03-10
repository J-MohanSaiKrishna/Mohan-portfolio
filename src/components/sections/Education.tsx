import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Scroll } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Computer Science and Engineering",
      field: "B.Tech (Expected Graduation: 2025)",
      institution: "Strong Academic Record",
      location: "Active Learner",
      year: "2021 - 2025",
      score: "",
      icon: GraduationCap,
      color: "from-primary/20",
    },
    {
      degree: "Oracle Integration Cloud Training",
      field: "Hands-on labs, recipes, accelerators",
      institution: "Certification",
      location: "Online",
      year: "Recent",
      score: "Completed",
      icon: Scroll,
      color: "from-accent/20",
    },
    {
      degree: "AWS Cloud Fundamentals",
      field: "Core Services, IAM, S3, EC2",
      institution: "Certification",
      location: "Online",
      year: "Recent",
      score: "Completed",
      icon: Award,
      color: "from-blue-500/20",
    },
    {
      degree: "SQL & Python Programming",
      field: "Data Processing, Scripting",
      institution: "Certification",
      location: "Online",
      year: "Recent",
      score: "Completed",
      icon: Award,
      color: "from-primary/20",
    },
  ];

  return (
    <div className="py-20 px-4 bg-black relative overflow-hidden" id="education">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 w-full h-full bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-6xl font-black font-['Orbitron'] tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-[0_0_10px_rgba(0,243,255,0.3)] uppercase">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full shadow-[0_0_15px_#00f3ff]" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-4 font-light">
            Building a strong theoretical foundation and practical cloud expertise
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 card-hover glass-effect bg-black/50 backdrop-blur-xl border-accent/20 hover:border-primary/50 shadow-[0_0_15px_rgba(181,0,255,0.05)] hover:shadow-[0_0_25px_rgba(0,243,255,0.2)] transition-all duration-500 hover:-translate-y-1 group relative overflow-hidden animate-in fade-in slide-in-bottom"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${edu.color} to-transparent opacity-20 group-hover:opacity-40 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none -translate-y-1/2 translate-x-1/2`} />

              <div className="flex flex-col md:flex-row gap-6 relative z-10">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-black border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:border-primary/50 transition-all duration-500">
                    <edu.icon className="w-8 h-8 text-white group-hover:text-primary transition-colors drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] group-hover:drop-shadow-[0_0_10px_#00f3ff]" />
                  </div>
                </div>

                <div className="flex-grow space-y-3">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground font-['Orbitron'] tracking-wide group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    {edu.field && (
                      <p className="text-lg text-accent font-semibold mt-1">
                        {edu.field}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <p className="text-lg font-medium text-foreground/80">
                      {edu.institution}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-primary/70 font-['Orbitron'] tracking-wider uppercase bg-black/40 inline-flex p-2 rounded-lg border border-white/5">
                      <span>{edu.year}</span>
                      {edu.score && (
                        <>
                          <span className="text-muted-foreground">|</span>
                          <span className="font-bold text-accent">{edu.score}</span>
                        </>
                      )}
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

export default Education;
