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
          className="absolute top-0 right-0 w-[600px] h-[600px] animate-blob-float"
          style={{
            background: 'radial-gradient(circle at 30% 40%, hsl(var(--art-cream)), hsl(var(--art-beige)) 60%, transparent 85%)',
            borderRadius: '60% 40% 70% 30% / 40% 60% 30% 70%',
            opacity: 0.7,
            pointerEvents: 'none',
          }}
        />
        
        {/* Coral accent blob - middle right */}
        <div 
          className="absolute top-1/3 right-1/4 w-[450px] h-[450px] animate-blob-float-delayed"
          style={{
            background: 'radial-gradient(circle at 60% 50%, hsl(var(--art-coral)), hsl(var(--art-blush)) 55%, transparent 80%)',
            borderRadius: '50% 60% 40% 70% / 60% 40% 70% 50%',
            opacity: 0.6,
            pointerEvents: 'none',
          }}
        />
        
        {/* Sand accent blob - bottom */}
        <div 
          className="absolute bottom-10 right-1/3 w-[500px] h-[500px] animate-blob-float-slow"
          style={{
            background: 'radial-gradient(circle at 40% 60%, hsl(var(--art-sand)), hsl(var(--art-coral)) 55%, transparent 80%)',
            borderRadius: '70% 30% 60% 40% / 50% 60% 40% 50%',
            opacity: 0.55,
            pointerEvents: 'none',
          }}
        />
      </>
    ),
    
    services: (
      <>
        {/* Large cream blob - left side */}
        <div 
          className="absolute top-1/4 left-0 w-[700px] h-[700px] animate-blob-float"
          style={{
            background: 'radial-gradient(circle at 40% 50%, hsl(var(--art-cream)), hsl(var(--art-beige)) 60%, transparent 85%)',
            borderRadius: '55% 45% 65% 35% / 45% 55% 45% 55%',
            opacity: 0.5,
            pointerEvents: 'none',
          }}
        />
        
        {/* Coral blob - right side */}
        <div 
          className="absolute top-1/2 right-0 w-[550px] h-[550px] animate-blob-float-slow"
          style={{
            background: 'radial-gradient(circle at 60% 40%, hsl(var(--art-coral)), hsl(var(--art-blush)) 55%, transparent 80%)',
            borderRadius: '45% 55% 50% 50% / 55% 45% 60% 40%',
            opacity: 0.5,
            pointerEvents: 'none',
          }}
        />
        
        {/* Blush accent - center */}
        <div 
          className="absolute top-2/3 left-1/3 w-[450px] h-[450px] animate-blob-float-delayed"
          style={{
            background: 'radial-gradient(circle at 50% 50%, hsl(var(--art-blush)), hsl(var(--art-sand)) 55%, transparent 80%)',
            borderRadius: '65% 35% 55% 45% / 40% 60% 50% 50%',
            opacity: 0.45,
            pointerEvents: 'none',
          }}
        />
      </>
    ),
    
    contact: (
      <>
        {/* Warm cream blob - top */}
        <div 
          className="absolute top-0 left-1/4 w-[600px] h-[600px] animate-blob-float-slow"
          style={{
            background: 'radial-gradient(circle at 40% 50%, hsl(var(--art-cream)), hsl(var(--art-sand)) 60%, transparent 85%)',
            borderRadius: '60% 40% 65% 35% / 50% 50% 60% 40%',
            opacity: 0.6,
            pointerEvents: 'none',
          }}
        />
        
        {/* Coral accent - bottom right */}
        <div 
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] animate-blob-float"
          style={{
            background: 'radial-gradient(circle at 60% 50%, hsl(var(--art-coral)), hsl(var(--art-blush)) 55%, transparent 80%)',
            borderRadius: '50% 50% 60% 40% / 55% 45% 50% 50%',
            opacity: 0.65,
            pointerEvents: 'none',
          }}
        />
        
        {/* Soft beige blob - left */}
        <div 
          className="absolute top-1/3 left-0 w-[450px] h-[450px] animate-blob-float-delayed"
          style={{
            background: 'radial-gradient(circle at 40% 60%, hsl(var(--art-beige)), hsl(var(--art-coral)) 55%, transparent 80%)',
            borderRadius: '70% 30% 50% 50% / 60% 40% 50% 50%',
            opacity: 0.55,
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
