import { useState, useEffect } from "react";
import { gsap } from "gsap";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
    const [counter, setCounter] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const count = setInterval(() => {
            setCounter((counter) => {
                if (counter < 100) {
                    return counter + 1;
                } else {
                    clearInterval(count);
                    reveal();
                    return 100;
                }
            });
        }, 25);

        return () => clearInterval(count);
    }, []);

    const reveal = () => {
        const t1 = gsap.timeline({
            onComplete: () => {
                setTimeout(() => {
                    setIsVisible(false);
                    onComplete();
                }, 200);
            },
        });

        // Cosmic fade out and sweep
        t1.to(".loading-content", {
            opacity: 0,
            y: -50,
            duration: 0.8,
            ease: "power3.inOut",
        })
            .to(".cosmic-bg", {
                opacity: 0,
                duration: 0.5,
            }, "-=0.5")
            .to(".sweep", {
                x: "0%",
                ease: "expo.inOut",
                duration: 0.6,
            })
            .to(".content", {
                width: "100%",
                ease: "expo.inOut",
                duration: 0,
            })
            .to(".portfolio-content", {
                opacity: 1,
                duration: 0,
            });
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[9999] w-screen h-screen text-white font-['Orbitron',sans-serif] overflow-hidden">
            {/* Cosmic Antigravity Background with User Image */}
            <div
                className="cosmic-bg absolute inset-0 bg-[#0a0d14] bg-cover bg-center bg-no-repeat overflow-hidden"
                style={{ backgroundImage: "url('/loading.jpg')" }}
            >
                {/* Dark semi-transparent overlay to help dynamic text pop and obscure static burned-in elements slightly */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

                {/* Glowing Orbs representing cosmic dust */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#85c4b9]/20 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#a1b56c]/10 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDuration: '6s' }} />

                {/* Drifting Stars / Particles */}
                <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-white rounded-full shadow-[0_0_10px_#fff] animate-ping pointer-events-none" style={{ animationDuration: '2s' }} />
                <div className="absolute bottom-[20%] left-[30%] w-1 h-1 bg-[#85c4b9] rounded-full shadow-[0_0_10px_#85c4b9] animate-ping pointer-events-none" style={{ animationDuration: '4s' }} />
            </div>

            <div className="h-full w-full flex flex-col justify-center items-center relative z-10 loading-content px-4">
                <div className="p-8 md:p-12 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 shadow-[0_0_50px_rgba(133,196,185,0.15)] flex flex-col items-center">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-widest uppercase mb-2 text-transparent bg-clip-text bg-gradient-to-b from-[#85c4b9] to-white text-center drop-shadow-[0_0_15px_rgba(133,196,185,0.5)]">
                        Mohan Sai Krishna
                    </h1>

                    <p className="text-[#8da399] tracking-[0.2em] uppercase text-[10px] sm:text-xs md:text-sm lg:text-base mb-10 text-center font-bold">
                        Computer Science Engineering Student
                    </p>

                    <div className="relative flex flex-col items-center mt-2">
                        {/* Glowing Percentage */}
                        <div className="flex gap-4 sm:gap-8 lg:gap-12 items-baseline justify-center">
                            <p className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#85c4b9] to-white opacity-40 blur-[1px]">
                                {counter}%
                            </p>
                            <p className="text-5xl sm:text-7xl md:text-8xl lg:text-[140px] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#85c4b9] to-white drop-shadow-[0_0_25px_rgba(133,196,185,0.9)] z-10">
                                {counter}%
                            </p>
                            <p className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#85c4b9] opacity-40 blur-[1px]">
                                {counter}%
                            </p>
                        </div>

                        {/* Progress Bar Container */}
                        <div className="w-64 sm:w-80 md:w-96 lg:w-[600px] h-2 sm:h-3 mt-8 bg-black/60 rounded-full overflow-hidden relative border border-[#85c4b9]/30 shadow-[0_0_10px_rgba(0,0,0,0.5)_inset]">
                            {/* Progress Bar Fill */}
                            <div
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#101318] via-[#85c4b9] to-white rounded-full shadow-[0_0_20px_#85c4b9]"
                                style={{
                                    width: `${counter}%`,
                                    transition: "width 0.1s ease-out"
                                }}
                            >
                                {/* Glowing head of the progress bar */}
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_2px_#fff]" />
                            </div>
                        </div>

                        <p className="mt-8 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#85c4b9] drop-shadow-[0_0_10px_rgba(133,196,185,0.8)]">
                            {counter}%
                        </p>
                    </div>
                </div>
            </div>

            {/* The sweeping transition elements */}
            <div className="sweep absolute inset-0 bg-[#0a0d14] translate-x-full z-30"></div>
            <div className="content fixed inset-y-0 left-0 w-0 bg-[#0a0d14] z-40 overflow-hidden">
                <div className="portfolio-content opacity-0 h-full"></div>
            </div>
        </div>
    );
};

export default LoadingScreen;
