import { RippleContainer } from "@/components/RippleContainer";

const Footer = () => {
  return (
    <RippleContainer className="relative py-12 px-4 border-t border-primary/20 bg-gradient-to-br from-[hsl(var(--hero-overlay))]/80 via-cyan-950/20 to-[hsl(var(--hero-overlay))]/90 text-white">
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-6">
        <div className="space-y-2">
          <p className="text-2xl font-bold gradient-text">
            Mohan Sai Krishna
          </p>
          <p className="text-white/70">
            Computer Science Engineering Student
          </p>
        </div>
        <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
        <p className="text-white/60 text-sm">
          © {new Date().getFullYear()} Mohan Sai Krishna. All rights reserved.
        </p>
        <p className="text-xs text-white/50">
          Built with passion, powered by innovation
        </p>
      </div>
    </RippleContainer>
  );
};

export default Footer;
