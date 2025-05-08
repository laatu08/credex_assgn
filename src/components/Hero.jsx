// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-gray-800 dark:to-gray-900 text-white px-4 pt-20">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Easily Sell Your Unused Software Licenses
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-lg md:text-2xl mb-6"
      >
        Turn unused software into cash in just a few clicks.
      </motion.p>
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.1 }}
        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-200 transition"
      >
        Get a Quote
      </motion.a>
    </section>
  );
};

export default Hero;
