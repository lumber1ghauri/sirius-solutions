import { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const BACKGROUND_IMAGE = '/background-white.png';

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
    </div>
  );
};

export default Background;