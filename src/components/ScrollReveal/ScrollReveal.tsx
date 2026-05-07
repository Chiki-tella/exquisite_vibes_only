"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function ScrollReveal({ children, delay = 0 }: { children: ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      {children}
    </motion.div>
  );
}
