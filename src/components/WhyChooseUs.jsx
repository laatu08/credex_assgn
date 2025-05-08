// src/components/WhyChooseUs.jsx
import React from 'react';
import { FaShieldAlt, FaBolt, FaHandshake, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  { icon: <FaShieldAlt size={30} />, title: 'Secure Transactions', desc: 'Your data is safe and encrypted.' },
  { icon: <FaBolt size={30} />, title: 'Fast Process', desc: 'Quick valuations and payouts.' },
  { icon: <FaHandshake size={30} />, title: 'Trusted by Many', desc: 'Thousands of happy customers.' },
  { icon: <FaStar size={30} />, title: 'Best Prices', desc: 'Get top dollar for your licenses.' },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 text-center bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-blue-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded shadow"
          >
            <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
