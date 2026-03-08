import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, FileDown } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "j.mohansaikrishna@gmail.com",
      href: "mailto:j.mohansaikrishna@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "mohansaikrishnaj",
      href: "https://www.linkedin.com/in/mohansaikrishnaj",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "mohansaikrishnaj",
      href: "https://github.com/",
    }
  ];

  return (
    <div className="py-20 px-4 bg-transparent relative overflow-hidden" id="contact">
      {/* Background gradients & Particles */}
      <div className="absolute inset-0 z-0 opacity-10 animate-pulse pointer-events-none delay-500"
        style={{ backgroundImage: 'radial-gradient(circle, #00ffff 1.5px, transparent 1.5px)', backgroundSize: '200px 200px', backgroundPosition: '40px 40px' }} />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[200px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-24 space-y-4 animate-in fade-in duration-1000">
          <h2 className="text-4xl md:text-6xl font-black font-['Orbitron'] tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary drop-shadow-[0_0_15px_rgba(0,255,255,0.4)] uppercase">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent via-primary to-accent mx-auto rounded-full shadow-[0_0_15px_#00ffff] animate-pulse-glow" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light mt-4 leading-relaxed">
            I’m exploring roles across <span className="text-primary font-bold drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">IT, Cloud, and Cybersecurity</span>.
            If my background aligns with what you need, I’d love to connect.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {contactInfo.map((info, index) => (
            <Card
              key={info.label}
              className="p-6 md:p-8 card-hover glass-effect bg-black/60 backdrop-blur-xl border-accent/20 border hover:border-primary/60 shadow-[0_0_20px_rgba(255,0,255,0.05)] hover:shadow-[0_0_40px_rgba(0,255,255,0.25)] transition-all duration-500 hover:-translate-y-3 text-center group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div
                className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6 border-[2px] border-white/5 group-hover:border-primary/50 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_25px_rgba(0,255,255,0.4)]"
              >
                <info.icon className="w-10 h-10 text-accent group-hover:text-primary transition-colors drop-shadow-[0_0_8px_currentColor] animate-pulse-glow" style={{ animationDelay: `${index * 300}ms` }} />
              </div>
              <div>
                <p className="text-sm font-['Orbitron'] uppercase tracking-widest text-muted-foreground mb-3 group-hover:text-accent transition-colors">{info.label}</p>
                <a
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/90 font-medium hover:text-primary transition-colors break-words text-lg drop-shadow-[0_0_5px_rgba(0,0,0,0.8)] relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full"
                >
                  {info.value}
                </a>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-14 text-center bg-black/50 glass-effect border-[2px] border-primary/40 relative overflow-hidden shadow-[0_0_50px_rgba(0,255,255,0.15)] hover:shadow-[0_0_80px_rgba(255,0,255,0.25)] transition-all duration-700 group animate-in fade-in slide-in-bottom duration-1000">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 group-hover:opacity-100 opacity-40 transition-opacity duration-700" />

          {/* Abstract geometric background elements */}
          <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-primary/30 opacity-50 translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-accent/30 opacity-50 -translate-x-10 translate-y-10 group-hover:scale-110 transition-transform duration-1000" />

          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-3xl md:text-5xl font-black font-['Orbitron'] mb-6 text-white drop-shadow-[0_0_15px_rgba(0,255,255,0.5)] tracking-widest uppercase">
              Ready to talk details?
            </h3>
            <p className="text-white/80 mb-12 max-w-2xl mx-auto text-lg leading-relaxed drop-shadow-[0_0_5px_rgba(0,0,0,0.8)]">
              Download my complete resume for a detailed look at my technical background, projects, and professional skills in cloud integration.
            </p>

            <div className="animate-float">
              <Button
                size="lg"
                className="bg-primary/10 backdrop-blur-md border-[2px] border-primary text-primary hover:bg-primary hover:text-black hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:shadow-[0_0_50px_rgba(255,0,255,0.9)] px-12 py-8 text-xl font-bold font-['Orbitron'] uppercase tracking-widest flex items-center gap-4 group/btn rounded-xl overflow-hidden relative"
                asChild
              >
                <a href="/Mohan_Sai_Krishna.pdf" aria-label="Download Resume" target="_blank" rel="noopener noreferrer">
                  {/* Glowing swipe effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                  <FileDown className="w-6 h-6 group-hover/btn:-translate-y-1 group-hover/btn:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_currentColor]" />
                  <span className="relative z-10 drop-shadow-[0_0_8px_currentColor]">Download Resume</span>
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;

