// src/components/HowItWorks.jsx
import React from 'react';
import { FaUpload, FaDollarSign, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const steps = [
  { icon: <FaUpload size={40} />, title: 'Upload License', desc: 'Submit your license details securely.' },
  { icon: <FaDollarSign size={40} />, title: 'Get Valuation', desc: 'Receive a fair market price instantly.' },
  { icon: <FaCheckCircle size={40} />, title: 'Get Paid', desc: 'Receive payment quickly and safely.' },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 rounded shadow w-64"
          >
            <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
