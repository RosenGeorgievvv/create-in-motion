import React from 'react';
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion'; 

const Footer = () => {
  return (
    <section className="w-full bg-gray-200 shadow-md">
      <div className="flex justify-center items-center gap-12 p-4">
        <motion.a
          href="https://www.facebook.com/CreateInMotion"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
          style={{ cursor: 'pointer' }}
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaFacebook size={32} />
        </motion.a>

        <motion.a
          href="mailto:triibria11@gmail.com"
          className="text-gray-700 hover:text-gray-900"
          style={{ cursor: 'pointer' }}
          whileHover={{ scale: 1.2 }} 
          whileTap={{ scale: 0.9 }} 
        >
          <FaEnvelope size={32} />
        </motion.a>

        <motion.a
          href="https://www.instagram.com/create_in_motion?igsh=NGRnc3A2ZzVteHR4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:text-pink-800"
          style={{ cursor: 'pointer' }}
          whileHover={{ scale: 1.2, rotate: -10 }} 
          whileTap={{ scale: 0.9 }} 
        >
          <FaInstagram size={32} />
        </motion.a>
      </div>
    </section>
  );
};

export default Footer;
