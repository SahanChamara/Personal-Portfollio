
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/useInView';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationVariant?: 'fade-up' | 'fade-in' | 'slide-in' | 'scale-in';
  delay?: number;
  threshold?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  animationVariant = 'fade-up',
  delay = 0,
  threshold = 0.1,
}) => {
  const [ref, isInView] = useInView({ threshold });

  const variants = {
    'fade-up': 'opacity-0 translate-y-10',
    'fade-in': 'opacity-0',
    'slide-in': 'opacity-0 -translate-x-10',
    'scale-in': 'opacity-0 scale-95',
  };

  return (
    <div
      ref={ref}
      className={cn(
        className,
        isInView ? 'animate-in' : variants[animationVariant],
        `transition-all duration-700 ease-out`,
        delay ? `delay-${delay}` : ''
      )}
      style={{ 
        transitionDelay: delay ? `${delay}ms` : '0ms',
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
