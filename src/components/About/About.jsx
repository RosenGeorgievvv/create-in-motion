import React from "react";
import { motion } from "framer-motion";
import worldMap from "../../assets/worldMap.png";

const About = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.6, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${worldMap})`}} >
      {/* Background Overlay */}
      <motion.div className="absolute inset-0 bg-black" variants={overlayVariants} initial="hidden" animate="visible"></motion.div>

      {/* Content Section */}
      <motion.div className="relative max-w-4xl px-8 text-center text-white space-y-6" variants={containerVariants} initial="hidden" animate="visible" >
        <motion.h1 className="text-4xl sm:text-6xl font-bold" variants={itemVariants} >
        <span className="text-green-400">Create In Motion</span>
        </motion.h1>
        <motion.p className="text-lg sm:text-xl leading-relaxed" variants={itemVariants} >
          Welcome to <strong>Create In Motion</strong>, a global platform
          dedicated to exploring the beauty of the world, embracing diverse
          cultures, and connecting people through the magic of travel and
          creativity.
        </motion.p>
        <motion.p className="text-lg sm:text-xl leading-relaxed" variants={itemVariants} >
          Whether you're an adventurer, an artist, or someone looking to connect
          with like-minded explorers, Create In Motion inspires you to capture
          the world's wonders and share your journey.
        </motion.p>
        <motion.p className="text-lg sm:text-xl font-semibold" variants={itemVariants} >
          Join us on our mission to{" "}
          <strong>travel the world</strong>, <strong>embrace diversity</strong>,
          and <strong>stay rooted in nature's beauty</strong>.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
