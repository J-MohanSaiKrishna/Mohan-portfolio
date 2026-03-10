import { Card } from "@/components/ui/card";
import { BookOpen, Cloud, MessageSquare } from "lucide-react";

const Languages = () => {
  const blogs = [
    {
      title: "SOAP vs REST in OIC",
      summary: "A quick breakdown of when to use SOAP vs REST for Oracle Integration Cloud, focusing on performance and enterprise needs.",
      icon: BookOpen,
      color: "from-primary/20",
      borderColor: "border-primary/50"
    },
    {
      title: "Cloud Integration Recipes",
      summary: "Exploring the power of pre-built integrations to save time, reduce errors, and accelerate business processes.",
      icon: Cloud,
      color: "from-accent/20",
      borderColor: "border-accent/50"
    },
    {
      title: "Framing Concepts",
      summary: "Tips for translating complex engineering jargon into business value that non-technical stakeholders understand.",
      icon: MessageSquare,
      color: "from-cyan-500/20",
      borderColor: "border-[#00ffff]/50"
    }
  ];

  return (
    <div className="py-20 px-4 bg-transparent relative overflow-hidden" id="blog">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-6xl font-black font-['Orbitron'] tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-[0_0_15px_rgba(0,255,255,0.4)] uppercase">
            Blog & Explainers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full shadow-[0_0_15px_#00ffff]" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-4 font-light">
            Distilling complex technical concepts into clear insights
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Card
              key={index}
              className={`p-6 md:p-8 card-hover glass-effect bg-black/60 backdrop-blur-xl border ${blog.borderColor} shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-700 ease-out hover:-translate-y-4 group relative overflow-hidden flex flex-col items-center text-center hover:shadow-[0_0_40px_rgba(0,255,255,0.2)]`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${blog.color} opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none`} />

              <div className="w-16 h-16 rounded-2xl bg-black border-[2px] border-white/10 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,0,0,0.8)] group-hover:scale-110 group-hover:border-primary/60 transition-all duration-500 relative z-10">
                <blog.icon className="w-8 h-8 text-white/80 group-hover:text-primary transition-colors drop-shadow-[0_0_5px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_15px_#00ffff]" />
              </div>

              <div className="relative z-10 flex-grow flex flex-col justify-center transition-all duration-700 group-hover:-translate-y-2">
                <h3 className="text-xl md:text-2xl font-bold text-foreground font-['Orbitron'] tracking-widest group-hover:text-primary transition-colors mb-2 drop-shadow-[0_0_8px_rgba(0,0,0,0.8)] group-hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
                  {blog.title}
                </h3>

                <div className="overflow-hidden max-h-[0px] group-hover:max-h-[200px] transition-all duration-700 ease-in-out">
                  <p className="text-white/90 leading-relaxed flex-grow opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 mt-4 drop-shadow-[0_0_5px_rgba(0,255,255,0.3)]">
                    {blog.summary}
                  </p>

                  <div className="mt-6 inline-block">
                    <span className="text-sm font-bold text-accent uppercase tracking-[0.2em] font-['Orbitron'] group-hover:text-primary transition-colors cursor-pointer hover:underline drop-shadow-[0_0_8px_#ff00ff]">
                      Read Article &rarr;
                    </span>
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

export default Languages;
