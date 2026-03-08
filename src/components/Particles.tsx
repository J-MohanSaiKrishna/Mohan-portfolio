import React, { useRef, useEffect } from 'react';

const Particles = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;
        let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            color: string;
            baseOpacity: number;
            pulseSpeed: number;
            pulsePhase: number;

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                // Vary size more: most are small, some are slightly larger
                this.size = Math.random() > 0.9 ? Math.random() * 2 + 1.5 : Math.random() * 1.5 + 0.5;
                // Move very slowly (zero gravity)
                this.speedX = (Math.random() - 0.5) * 0.15;
                this.speedY = (Math.random() - 0.5) * 0.15;

                // Cosmic Star Colors
                const colors = ['#FFFFFF', '#00FFFF', '#FF00FF', '#B500FF', '#E0FFFF'];
                this.color = colors[Math.floor(Math.random() * colors.length)];

                this.baseOpacity = Math.random() * 0.5 + 0.2;
                this.pulseSpeed = Math.random() * 0.015 + 0.005;
                this.pulsePhase = Math.random() * Math.PI * 2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Wrap around
                if (this.x > canvas.width) this.x = 0;
                else if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                else if (this.y < 0) this.y = canvas.height;

                // Mouse interaction (parallax)
                const dx = mouse.x - canvas.width / 2;
                const dy = mouse.y - canvas.height / 2;

                // Distance-based parallax (slightly responsive)
                const parallaxX = (dx * this.size) / 200;
                const parallaxY = (dy * this.size) / 200;

                // Pulsing opacity
                this.pulsePhase += this.pulseSpeed;
                const currentOpacity = this.baseOpacity + Math.sin(this.pulsePhase) * 0.2;

                ctx.beginPath();
                ctx.arc(this.x - parallaxX, this.y - parallaxY, this.size, 0, Math.PI * 2);

                ctx.fillStyle = this.color;
                ctx.globalAlpha = Math.max(0.1, currentOpacity);

                // Add glow occasionally or based on size
                if (this.size > 1.2) {
                    ctx.shadowBlur = this.size * 4;
                    ctx.shadowColor = this.color;
                } else {
                    ctx.shadowBlur = 0;
                }

                ctx.fill();
                ctx.globalAlpha = 1.0;
                ctx.shadowBlur = 0;
            }
        }

        const initParticles = () => {
            particles = [];
            // Adjust density based on screen size, performance friendly
            const particleCount = Math.min(window.innerWidth / 12, 150);
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            // Smooth mouse follow
            mouse.x += (mouse.targetX - mouse.x) * 0.05;
            mouse.y += (mouse.targetY - mouse.y) * 0.05;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => p.update());
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.targetX = e.clientX;
            mouse.targetY = e.clientY;
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);

        // Initialize
        mouse.targetX = window.innerWidth / 2;
        mouse.targetY = window.innerHeight / 2;
        mouse.x = window.innerWidth / 2;
        mouse.y = window.innerHeight / 2;

        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0 mix-blend-screen opacity-70"
        />
    );
};

export default Particles;
