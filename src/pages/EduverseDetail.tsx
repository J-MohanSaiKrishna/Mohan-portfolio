import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Brain, Users, Zap, ArrowLeft, Network } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EduverseDetail = () => {
    const navigate = useNavigate();

    const features = [
        { icon: Brain, title: "AI-Powered Personalization", desc: "Machine learning models curate a custom curriculum tailored to individual learning speeds." },
        { icon: Users, title: "Adaptive Learning Paths", desc: "Dynamic roadmaps that evolve based on assessment performance and engagement." },
        { icon: Zap, title: "Real-Time Tracking", desc: "Instantaneous feedback loops identifying knowledge gaps and providing targeted interventions." },
        { icon: Network, title: "Intelligent Delivery", desc: "Context-aware content delivery system matching material to the student's cognitive state." },
    ];

    return (
        <div className="min-h-screen relative overflow-hidden text-foreground">
            {/* Glowing atmospheric orbs */}
            <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[180px] animate-pulse pointer-events-none" />
            <div className="absolute bottom-20 right-[-10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[200px] animate-pulse delay-1000 pointer-events-none" />

            {/* Navigation */}
            <nav className="relative z-20 max-w-7xl mx-auto px-6 py-8">
                <Button
                    variant="ghost"
                    onClick={() => navigate(-1)}
                    className="text-primary hover:text-accent hover:bg-white/5 transition-all font-['Orbitron'] tracking-widest uppercase flex items-center gap-2 group border border-transparent hover:border-primary/20 rounded-xl"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Back to Terminal
                </Button>
            </nav>

            {/* Main Content */}
            <main className="relative z-10 max-w-5xl mx-auto px-4 pb-20 pt-10">

                {/* Header section */}
                <div className="text-center mb-16 animate-in fade-in slide-in-bottom duration-1000">
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 glass-effect bg-black/50 border border-primary/40 rounded-full mb-8 shadow-[0_0_20px_rgba(0,255,255,0.2)]">
                        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                        <span className="text-sm text-primary font-bold font-['Orbitron'] tracking-widest uppercase shadow-[0_0_10px_#00ffff]">Vision Project Concept</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black font-['Orbitron'] tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-aurora drop-shadow-[0_0_15px_rgba(0,255,255,0.5)] uppercase mb-6">
                        Eduverse
                    </h1>

                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-8 shadow-[0_0_15px_#00ffff]" />

                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
                        My flagship <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">AI Adaptive Learning Platform</span>
                    </p>
                </div>

                {/* Core Description Card */}
                <Card className="p-8 md:p-12 glass-effect bg-black/60 border-2 border-primary/30 shadow-[0_0_40px_rgba(0,255,255,0.1)] mb-12 animate-in fade-in zoom-in-95 duration-1000 delay-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

                    <div className="relative z-10 grid md:grid-cols-5 gap-10 items-center">
                        <div className="md:col-span-3 space-y-6">
                            <h2 className="text-2xl font-bold font-['Orbitron'] text-white">The Architecture</h2>
                            <p className="text-lg text-white/80 leading-relaxed">
                                A highly personalized learning ecosystem powered by artificial intelligence, designed to <span className="text-primary font-semibold">understand users and evolve with them</span>.
                            </p>
                            <p className="text-lg text-white/80 leading-relaxed">
                                Eduverse fundamentally adapts to individual learning styles and cognitive states, utilizing dynamic roadmapping to construct a completely unique, frictionless educational journey tailored explicitly for each student.
                            </p>
                        </div>

                        <div className="md:col-span-2 flex flex-col gap-3">
                            <h3 className="font-['Orbitron'] text-sm tracking-widest text-primary mb-2 uppercase">Tech Stack</h3>
                            {["Machine Learning", "Adaptive Systems", "React / UI Framework", "Cloud Architecture"].map((tag) => (
                                <Badge key={tag} className="bg-white/5 hover:bg-primary/20 text-white border-primary/30 py-2 px-4 justify-start shadow-[0_0_10px_rgba(0,255,255,0.05)] transition-colors">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3 shadow-[0_0_5px_#ff00ff]" />
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </Card>

                {/* Features Grid */}
                <div className="mb-16">
                    <h2 className="text-3xl font-black font-['Orbitron'] text-center mb-10 text-white drop-shadow-[0_0_10px_rgba(255,0,255,0.3)]">Core Modules</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                className="p-6 glass-effect bg-black/40 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] group"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="flex gap-4">
                                    <div className="mt-1 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/30 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,255,255,0.2)]">
                                        <feature.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 font-['Orbitron'] group-hover:text-primary transition-colors">{feature.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Footer/CTA */}
                <div className="text-center bg-accent/5 border border-accent/20 rounded-2xl p-8 max-w-3xl mx-auto shadow-[0_0_30px_rgba(255,0,255,0.1)] backdrop-blur-sm">
                    <p className="text-accent/90 italic text-lg flex items-center justify-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-accent animate-blink shadow-[0_0_8px_#ff00ff]" />
                        Currently in development • Empowering learners through intelligent technology
                    </p>
                </div>

            </main>
        </div>
    );
};

export default EduverseDetail;
