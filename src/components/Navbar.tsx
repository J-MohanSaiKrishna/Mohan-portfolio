import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#experience' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-primary/20 shadow-[0_4px_30px_rgba(0,255,255,0.15)] py-4' : 'bg-transparent py-8'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-black font-['Orbitron'] tracking-widest text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] hover:text-primary transition-colors hover:drop-shadow-[0_0_15px_#00ffff]">
                    MSK<span className="text-primary">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="text-xs md:text-sm font-['Orbitron'] font-bold uppercase tracking-[0.2em] text-foreground/80 hover:text-white transition-colors relative group py-2"
                        >
                            {link.name}
                            {/* Glowing Underline */}
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 shadow-[0_0_10px_#00ffff]" />
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button (Simple) */}
                <div className="md:hidden flex items-center">
                    <button className="text-primary hover:text-accent transition-colors drop-shadow-[0_0_5px_currentColor]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
