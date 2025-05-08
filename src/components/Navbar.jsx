// src/components/Navbar.jsx
import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow-md fixed w-full z-10">
      <div className="flex items-center gap-2 text-2xl font-bold text-blue-600 dark:text-white">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L24 6v12l-12 6-12-6V6z"/>
        </svg>
        SoftSell
      </div>
      <div className="flex items-center">
        <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Contact Us
        </a>
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
