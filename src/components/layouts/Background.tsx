import React from "react";
import Particles from "./Particles";

const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
            {/* Dark Cosmic Gradient Base */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0014] to-black opacity-80" />

            {/* Aurora Waves */}
            <div className="absolute top-0 left-[-10%] w-[120%] h-[100%] opacity-40 mix-blend-screen pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyan-700/30 rounded-full blur-[120px] animate-aurora-sweep-1" />
                <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-violet-800/20 rounded-full blur-[150px] animate-aurora-sweep-2" />
                <div className="absolute bottom-[-20%] left-[20%] w-[70%] h-[50%] bg-magenta-900/20 rounded-full blur-[130px] animate-aurora-sweep-3" />
            </div>

            {/* Particle Starfield */}
            <Particles />
        </div>
    );
};

export default Background;
