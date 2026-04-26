import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function InteriorCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const springX = useSpring(0, { stiffness: 500, damping: 28 });
  const springY = useSpring(0, { stiffness: 500, damping: 28 });
  
  const dotX = useSpring(0, { stiffness: 1000, damping: 20 });
  const dotY = useSpring(0, { stiffness: 1000, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      springX.set(e.clientX - 16); // Center of 32x32 circle
      springY.set(e.clientY - 16);
      dotX.set(e.clientX - 3);   // Center of 6x6 dot
      dotY.set(e.clientY - 3);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    // Disable default body cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, [isVisible, springX, springY, dotX, dotY]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Outer Circle */}
      <motion.div
        style={{ x: springX, y: springY }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(197, 160, 89, 0.1)' : 'rgba(0, 0, 0, 0)',
        }}
        transition={{ duration: 0.2 }}
        className="absolute top-0 left-0 w-8 h-8 rounded-full border border-[#C5A059] flex items-center justify-center mix-blend-difference"
      />
      {/* Inner Dot */}
      <motion.div
        style={{ x: dotX, y: dotY }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        className="absolute top-0 left-0 w-1.5 h-1.5 bg-[#C5A059] rounded-full mix-blend-difference"
      />
    </div>
  );
}
