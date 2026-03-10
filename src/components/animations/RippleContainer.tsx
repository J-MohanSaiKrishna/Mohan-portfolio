import React, { useRef, useState, useCallback } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

interface RippleContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const RippleContainer: React.FC<RippleContainerProps> = ({ children, className = '', ...props }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const rippleIdRef = useRef(0);

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const id = rippleIdRef.current++;
    setRipples(prev => [...prev, { id, x, y }]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== id));
    }, 600);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
      
      {/* Ripple effects */}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 pointer-events-none animate-ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: '0px',
            height: '0px',
            transform: 'translate(-50%, -50%)',
            animation: 'ripple-expand 0.6s ease-out',
          }}
        />
      ))}

      <style>{`
        @keyframes ripple-expand {
          0% {
            width: 0px;
            height: 0px;
            opacity: 1;
          }
          100% {
            width: 500px;
            height: 500px;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default RippleContainer;
