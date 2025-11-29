interface AbstractBackgroundProps {
  variant?: 'hero' | 'services' | 'contact';
  className?: string;
}

const AbstractBackground = ({ variant = 'hero', className = '' }: AbstractBackgroundProps) => {
  const variants = {
    hero: (
      <>
        {/* Large cream blob - top right */}
        <div 
          className="absolute top-0 right-0 w-[500px] h-[500px] animate-blob-float"
          style={{
            background: 'radial-gradient(circle at 30% 40%, hsl(var(--art-cream)), hsl(var(--art-beige)) 50%, transparent 70%)',
            borderRadius: '60% 40% 70% 30% / 40% 60% 30% 70%',
            filter: 'blur(60px)',
            opacity: 0.25,
            pointerEvents: 'none',
          }}
        />
        
        {/* Coral accent blob - middle right */}
        <div 
          className="absolute top-1/3 right-1/4 w-[350px] h-[350px] animate-blob-float-delayed"
          style={{
            background: 'radial-gradient(circle at 60% 50%, hsl(var(--art-coral)), hsl(var(--art-blush)) 40%, transparent 65%)',
            borderRadius: '50% 60% 40% 70% / 60% 40% 70% 50%',
            filter: 'blur(50px)',
            opacity: 0.2,
            pointerEvents: 'none',
          }}
        />
        
        {/* Sand accent blob - bottom */}
        <div 
          className="absolute bottom-20 right-1/3 w-[400px] h-[400px] animate-blob-float-slow"
          style={{
            background: 'radial-gradient(circle at 40% 60%, hsl(var(--art-sand)), hsl(var(--art-beige)) 45%, transparent 70%)',
            borderRadius: '70% 30% 60% 40% / 50% 60% 40% 50%',
            filter: 'blur(55px)',
            opacity: 0.18,
            pointerEvents: 'none',
          }}
        />
      </>
    ),
    
    services: (
      <>
        {/* Large cream blob - left side */}
        <div 
          className="absolute top-1/4 left-0 w-[600px] h-[600px] animate-blob-float"
          style={{
            background: 'radial-gradient(circle at 40% 50%, hsl(var(--art-cream)), hsl(var(--art-beige)) 50%, transparent 70%)',
            borderRadius: '55% 45% 65% 35% / 45% 55% 45% 55%',
            filter: 'blur(70px)',
            opacity: 0.15,
            pointerEvents: 'none',
          }}
        />
        
        {/* Coral blob - right side */}
        <div 
          className="absolute top-1/2 right-0 w-[450px] h-[450px] animate-blob-float-slow"
          style={{
            background: 'radial-gradient(circle at 60% 40%, hsl(var(--art-coral)), hsl(var(--art-blush)) 45%, transparent 70%)',
            borderRadius: '45% 55% 50% 50% / 55% 45% 60% 40%',
            filter: 'blur(60px)',
            opacity: 0.15,
            pointerEvents: 'none',
          }}
        />
        
        {/* Blush accent - center */}
        <div 
          className="absolute top-2/3 left-1/3 w-[350px] h-[350px] animate-blob-float-delayed"
          style={{
            background: 'radial-gradient(circle at 50% 50%, hsl(var(--art-blush)), hsl(var(--art-sand)) 40%, transparent 65%)',
            borderRadius: '65% 35% 55% 45% / 40% 60% 50% 50%',
            filter: 'blur(55px)',
            opacity: 0.12,
            pointerEvents: 'none',
          }}
        />
      </>
    ),
    
    contact: (
      <>
        {/* Warm cream blob - top */}
        <div 
          className="absolute top-0 left-1/4 w-[500px] h-[500px] animate-blob-float-slow"
          style={{
            background: 'radial-gradient(circle at 40% 50%, hsl(var(--art-cream)), hsl(var(--art-sand)) 50%, transparent 70%)',
            borderRadius: '60% 40% 65% 35% / 50% 50% 60% 40%',
            filter: 'blur(65px)',
            opacity: 0.2,
            pointerEvents: 'none',
          }}
        />
        
        {/* Coral accent - bottom right */}
        <div 
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] animate-blob-float"
          style={{
            background: 'radial-gradient(circle at 60% 50%, hsl(var(--art-coral)), hsl(var(--art-blush)) 45%, transparent 70%)',
            borderRadius: '50% 50% 60% 40% / 55% 45% 50% 50%',
            filter: 'blur(60px)',
            opacity: 0.22,
            pointerEvents: 'none',
          }}
        />
        
        {/* Soft beige blob - left */}
        <div 
          className="absolute top-1/3 left-0 w-[350px] h-[350px] animate-blob-float-delayed"
          style={{
            background: 'radial-gradient(circle at 40% 60%, hsl(var(--art-beige)), hsl(var(--art-sand)) 40%, transparent 65%)',
            borderRadius: '70% 30% 50% 50% / 60% 40% 50% 50%',
            filter: 'blur(50px)',
            opacity: 0.18,
            pointerEvents: 'none',
          }}
        />
      </>
    ),
  };

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} style={{ zIndex: 0 }}>
      {variants[variant]}
    </div>
  );
};

export default AbstractBackground;
