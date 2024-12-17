import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../../assets/background.jpg';

const HomePage = () => {
  const fullText = 'Create-In-Motion';
  
  const letters = fullText.split('');

  return (
    <section className="relative h-screen bg-cover bg-center " style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-center space-y-4">
        <h1 className="text-white text-4xl sm:text-6xl lg:text-8xl font-bold flex">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              className={index === 0 ? '' : 'inline-block'}
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }}
              transition={{
                delay: index * 0.1, 
                duration: 0.4,
                repeatType: 'reverse', 
              }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <motion.p
          className="text-white text-lg sm:text-xl lg:text-2xl font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: letters.length * 0.1, duration: 1 }}
        >
          Travel the world, embrace diverse cultures, and stay rooted in the beauty of nature.
        </motion.p>
      </div>
    </section>
  );
};

export default HomePage;
