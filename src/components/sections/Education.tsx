import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Scroll, BookOpen } from "lucide-react";

const Education = () => {
  const educationList = [
    {
      degree: "B.Tech - Computer Science and Engineering",
      institution: "Avanthi Institute of Engineering and Technology, Makavarapalem",
      year: "2021 – 2025 (Expected)",
      score: "CGPA: 7.75 / 10",
      coursework: "Data Structures, OOP, DBMS, Web Technologies, Cloud Computing, Software Engineering",
      icon: GraduationCap,
      color: "from-primary/20",
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Vidya Vikas Junior College, Rajahmundry",
      year: "2020 – 2022",
      score: "Score: 89.5%",
      coursework: "Maths, Physics, Chemistry",
      icon: GraduationCap,
      color: "from-[#85c4b9]/20",
    },
    {
      degree: "SSC (10th Standard)",
      institution: "Geetanjali High School, Rajahmundry",
      year: "2018 – 2019",
      score: "GPA: 9.3 / 10",
      coursework: "General Education & Science",
      icon: GraduationCap,
      color: "from-accent/20",
    },
  ];

  const certificationsList = [
    {
      title: "Full Stack Web & Systems Certification",
      issuer: "Professional Development Certification",
      detail: "Proficient in Computer Science Core (DSA, OOP, DBMS), Java Spring Boot, and SQL Architecture.",
      icon: Award,
    },
    {
      title: "AWS Cloud Computing Virtual Internship",
      issuer: "AWS / Virtual Internship",
      detail: "Hands-on training focused on cloud scalability and resilient web hosting infrastructure.",
      icon: Scroll,
    },
    {
      title: "DevOps & CI/CD Pipeline Training",
      issuer: "Hands-on Training & Automation",
      detail: "Building automated CI/CD release pipelines with Jenkins, Docker containerization, and AWS hosting.",
      icon: BookOpen,
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
            Academic qualifications and industry certifications
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold font-['Orbitron'] text-white text-left mb-2">Education</h3>
          {educationList.map((edu, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 card-hover glass-effect bg-black/50 backdrop-blur-xl border-accent/20 hover:border-primary/50 shadow-[0_0_15px_rgba(181,0,255,0.05)] hover:shadow-[0_0_25px_rgba(0,243,255,0.2)] transition-all duration-500 hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${edu.color} to-transparent opacity-20 group-hover:opacity-40 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none -translate-y-1/2 translate-x-1/2`} />

              <div className="flex flex-col md:flex-row gap-6 relative z-10">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-black border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:border-primary/50 transition-all duration-500">
                    <edu.icon className="w-7 h-7 text-white group-hover:text-primary transition-colors" />
                  </div>
                </div>

                <div className="flex-grow space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                    <h4 className="text-xl font-bold text-white font-['Orbitron'] tracking-wide group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-mono text-[#85c4b9] bg-black/60 px-3 py-1 rounded-full border border-[#85c4b9]/30 w-fit">
                      {edu.year}
                    </span>
                  </div>

                  <p className="text-base text-gray-300 font-medium">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <span className="text-xs font-bold text-accent font-['Orbitron'] bg-accent/10 px-2.5 py-1 rounded border border-accent/30">
                      {edu.score}
                    </span>
                    <p className="text-xs text-gray-400">
                      <span className="text-gray-500">Coursework:</span> {edu.coursework}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold font-['Orbitron'] text-white text-left mb-2">Certifications & Training</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certificationsList.map((cert, index) => (
              <Card
                key={index}
                className="p-6 glass-effect bg-black/60 border border-white/10 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-black border border-primary/30 flex items-center justify-center text-primary">
                  <cert.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg font-['Orbitron'] mb-1">{cert.title}</h4>
                  <p className="text-xs text-[#85c4b9] font-medium mb-2">{cert.issuer}</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{cert.detail}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
