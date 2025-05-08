// src/components/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  { name: 'Jane Doe', role: 'IT Manager', company: 'TechCorp', text: 'SoftSell helped us quickly monetize unused licenses. Highly recommended!' },
  { name: 'John Smith', role: 'CFO', company: 'BizSolutions', text: 'The process was smooth and transparent. We got top value for our software.' },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">What Our Customers Say</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {reviews.map((review, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 rounded shadow w-80"
          >
            <p className="italic mb-4">"{review.text}"</p>
            <h3 className="font-semibold">{review.name}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{review.role}, {review.company}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
