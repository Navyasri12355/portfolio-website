"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-32">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold"
      >
        Hi, I’m <span className="text-blue-400">Navyasri Pulipati</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-lg text-gray-400 max-w-2xl"
      >
        I'm a 3rd Year Engineering Student of RVCE specializing in AI & ML, focused on
        building ethical, scalable, and real-world systems.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 flex gap-4"
      >
        <a 
          href="/Navyasri Pulipati_Resume.pdf" 
          download="Navyasri_Pulipati_Resume.pdf"
          className="px-6 py-3 bg-blue-500 text-black rounded-lg hover:bg-blue-400 transition"
        >
          Download Resume
        </a>
        <a 
          href="https://github.com/Navyasri12355" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 border border-gray-700 rounded-lg hover:border-gray-500 transition"
        >
          GitHub
        </a>
      </motion.div>
    </section>
  );
}
