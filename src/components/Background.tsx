import { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const BACKGROUND_IMAGE = import.meta.env.BASE_URL + 'background-white.png';

const Background = () => {
  const { theme } = useTheme();
  
  useEffect(() => {
    // Preload the image
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = BACKGROUND_IMAGE;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="fixed inset-0 isolate">
      <div 
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          willChange: 'transform',
        }}
      />
      <div 
        className={`absolute inset-0 -z-10 transition-colors duration-300 ${
          theme === 'dark' ? 'bg-gray-900/90' : 'bg-white/85'
        }`}
      />
      {/* Example particle animation */}
      <motion.div
        className="absolute w-8 h-8 bg-[#44bee7]/20 rounded-full"
        style={{ left: '50%', top: '50%' }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default Background;