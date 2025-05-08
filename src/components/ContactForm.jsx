// src/components/ContactForm.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', licenseType: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = 'Name is required';
    if (!form.email) errs.email = 'Email is required';
    if (!form.licenseType) errs.licenseType = 'License type is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      alert('Form submitted (demo only)');
      setForm({ name: '', email: '', company: '', licenseType: '', message: '' });
      setErrors({});
    } else {
      setErrors(errs);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 text-center bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Contact Us</h2>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto space-y-4 text-left"
      >
        {['name', 'email', 'company'].map(field => (
          <div key={field}>
            <input
              type="text"
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              onChange={handleChange}
              className="w-full border dark:border-gray-700 p-3 rounded dark:bg-gray-800 dark:text-white"
            />
            {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
          </div>
        ))}
        <div>
          <select
            name="licenseType"
            value={form.licenseType}
            onChange={handleChange}
            className="w-full border dark:border-gray-700 p-3 rounded dark:bg-gray-800 dark:text-white"
          >
            <option value="">Select License Type</option>
            <option value="Windows">Windows</option>
            <option value="MS Office">MS Office</option>
            <option value="Adobe Suite">Adobe Suite</option>
          </select>
          {errors.licenseType && <p className="text-red-500 text-sm">{errors.licenseType}</p>}
        </div>
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="w-full border dark:border-gray-700 p-3 rounded dark:bg-gray-800 dark:text-white"
          rows={4}
        />
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition w-full">
          Submit
        </button>
      </motion.form>
    </section>
  );
};

export default ContactForm;
