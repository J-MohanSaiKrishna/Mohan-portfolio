import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Abstract Animated gradient orbs */}
      <div className="absolute top-10 left-[-5%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[150px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-10 right-[-5%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[180px] animate-pulse delay-1000 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="text-center md:text-left space-y-8 order-2 md:order-1 animate-in fade-in slide-in-bottom duration-1000">
            <div className="space-y-6">
              <div className="inline-block animate-float mb-2">
                <p className="text-primary font-bold text-sm md:text-base tracking-[0.2em] uppercase drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] border border-primary/50 px-5 py-2 rounded-full bg-primary/10 backdrop-blur-md">
                  System Online
                </p>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-white mb-4 text-shadow animate-pulse-glow">
                Mohan Sai Krishna
              </h1>
              {/* Tagline glows cyan -> magenta -> violet */}
              <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-[#8000ff] bg-[length:200%_auto] animate-aurora drop-shadow-[0_0_15px_rgba(255,0,255,0.4)] leading-snug py-2">
                Turning Cloud Concepts into Business-Ready Solutions
              </h2>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-primary/10 backdrop-blur-md border-2 border-primary text-primary hover:bg-primary hover:text-black hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_40px_rgba(0,255,255,0.9)] px-10 py-7 text-xl font-bold font-['Orbitron'] uppercase tracking-widest relative overflow-hidden group rounded-xl"
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {/* Ripple effect span hidden inside */}
                <div className="absolute inset-0 bg-primary/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10 drop-shadow-[0_0_5px_currentColor]">View My Work</span>
              </Button>
            </div>
          </div>

          {/* Details/Terminal Section replacing Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2 animate-in fade-in slide-in-top duration-1000">
            <div className="relative group hover:-translate-y-4 transition-transform duration-700 ease-out w-full max-w-md mx-auto md:mr-0">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary via-accent to-[#8000ff] rounded-2xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 animate-pulse-glow" />

              <div className="relative rounded-2xl overflow-hidden glass-effect bg-black/80 border border-primary/30 shadow-[0_0_30px_rgba(0,255,255,0.15)] group-hover:shadow-[0_0_50px_rgba(255,0,255,0.3)] group-hover:border-accent/50 z-10 transition-all duration-700">
                {/* Terminal Header */}
                <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="ml-4 text-xs font-['Orbitron'] text-muted-foreground tracking-widest flex-1 text-center pr-10">
                    msk_sys_profile.exe
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-6 md:p-8 font-mono text-sm md:text-base space-y-5 text-primary/90 text-left">
                  <div className="flex">
                    <span className="text-accent mr-3 font-bold">{'>'}</span>
                    <span className="text-white">Initializing user profile...</span>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-start">
                      <span className="text-accent mr-3 font-bold">{'>'}</span>
                      <div>
                        <span className="text-primary tracking-wide">ROLE:</span> <span className="text-white font-semibold">Full Stack & Cloud Engineer</span>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <span className="text-accent mr-3 font-bold">{'>'}</span>
                      <div>
                        <span className="text-primary tracking-wide">EDU:</span> <span className="text-white">B.Tech CSE (2025)</span>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <span className="text-accent mr-3 font-bold">{'>'}</span>
                      <div>
                        <span className="text-primary tracking-wide mb-2 block">STACK_FOCUS:</span>
                        <ul className="ml-2 space-y-2 text-white/80">
                          <li className="flex items-center gap-2">
                            <span className="text-accent text-xs">■</span> Oracle Integration Cloud
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-accent text-xs">■</span> Modern Web (React / Typescript)
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-accent text-xs">■</span> Python Automation & Data
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-accent text-xs">■</span> Core Architecture (Java / SQL)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mt-6 pt-4 border-t border-white/10">
                    <span className="text-accent mr-3 font-bold">{'>'}</span>
                    <span className="w-2 h-5 bg-primary shadow-[0_0_8px_#00ffff] animate-blink" />
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-5 -right-5 md:-bottom-6 md:-right-6 bg-black/90 backdrop-blur-xl rounded-xl px-5 py-3 md:px-6 md:py-4 border-[1px] border-primary/50 shadow-[0_0_20px_rgba(0,255,255,0.3)] z-20 group-hover:scale-105 transition-all duration-500 hover:border-accent">
                <p className="text-xs md:text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_#00ffff] animate-pulse" />
                  Systems Nominal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4 cursor-pointer hover:scale-125 transition-transform duration-500" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        <div className="w-8 h-12 rounded-full border-2 border-primary/60 flex items-start justify-center p-2 shadow-[0_0_20px_rgba(0,255,255,0.4)] backdrop-blur-md bg-black/30">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce shadow-[0_0_10px_#00ffff]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
