"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    text: "Christella transformed our outdated platform into a modern, lightning-fast Next.js application. Her attention to detail in the UI and understanding of complex state management is unmatched.",
    author: "Sarah Jenkins",
    role: "CTO, TechFlow"
  },
  {
    text: "Integrating the AI features was a breeze with her expertise. She not only built the frontend but also optimized the entire ML pipeline to return results instantly.",
    author: "David Chen",
    role: "Founder, AI Solutions"
  },
  {
    text: "Christella is a force of nature when it comes to React architecture. She took our messy legacy code and turned it into a performant, scalable masterpiece.",
    author: "James Wilson",
    role: "VP Engineering, CloudScale"
  },
  {
    text: "The visual flair she adds to every interaction is what sets our product apart. It's not just functional; it's exquisite.",
    author: "Elena Rodriguez",
    role: "Design Lead, Vivid"
  },
  {
    text: "Working with her was the best decision we made for our startup. Fast, reliable, and deeply technical.",
    author: "Marcus Thorne",
    role: "Co-founder, Nexus AI"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.header}>
        <span className={styles.preTitle}>TESTIMONIALS</span>
        <h2 className={styles.title}>Voices of Trust</h2>
      </div>

      <div className={styles.carouselContainer}>
        <div className={styles.carouselWindow}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={styles.card}
            >
              <svg className={styles.quoteIcon} width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className={styles.text}>{testimonials[index].text}</p>
              <div className={styles.authorInfo}>
                <h4 className={styles.author}>{testimonials[index].author}</h4>
                <span className={styles.role}>{testimonials[index].role}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={styles.controls}>
          <button onClick={prevTestimonial} className={styles.controlBtn} aria-label="Previous testimonial">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          </button>
          <div className={styles.dots}>
            {testimonials.map((_, idx) => (
              <div 
                key={idx} 
                className={`${styles.dot} ${idx === index ? styles.activeDot : ""}`}
                onClick={() => setIndex(idx)}
              />
            ))}
          </div>
          <button onClick={nextTestimonial} className={styles.controlBtn} aria-label="Next testimonial">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
