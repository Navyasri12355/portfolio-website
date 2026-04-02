"use client";
import { motion } from "framer-motion";

export default function Section({ children, id, style = {} }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        padding: "7rem 4rem",
        maxWidth: "1200px",
        margin: "0 auto",
        ...style,
      }}
    >
      {children}
    </motion.section>
  );
}