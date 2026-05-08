"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    text: "Christella has a rare ability to bridge the gap between design and development. Her implementation of complex UI patterns while maintaining design integrity is truly remarkable.",
    author: "Amani Samuel",
    role: "Product designer",
    github: "https://github.com/amani-samuel"
  },
  {
    text: "Collaborating with Christella on the design system was a dream. She has a keen eye for aesthetics and a deep understanding of user behavior that brings every interface to life.",
    author: "Sandrine Uwase",
    role: "UI/UX Designer",
    github: "https://github.com/sandrine-uwase"
  },
  {
    text: "Her attention to security best practices, even in frontend development, is outstanding. She ensures every application is not just beautiful, but resilient against modern threats.",
    author: "Berard Irakoze",
    role: "Cybersecurity Enthusiast",
    github: "https://github.com/berard-irakoze"
  },
  {
    text: "As a fellow frontend developer, I'm consistently impressed by her React expertise. Her code is clean, modular, and optimized for performance across all devices.",
    author: "Laure Ganwa",
    role: "Frontend Developer",
    github: "https://github.com/laure-ganwa"
  },
  {
    text: "Working on the API integration with Christella was seamless. She understands backend logic deeply, making the communication between layers efficient and error-free.",
    author: "Mpuhwe Nikita",
    role: "Backend Developer",
    github: "https://github.com/mpuhwe-nikita"
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
              <svg suppressHydrationWarning className={styles.quoteIcon} width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className={styles.text}>{testimonials[index].text}</p>
              <div className={styles.footerRow}>
                <div className={styles.authorInfo}>
                  <h4 className={styles.author}>{testimonials[index].author}</h4>
                  <span className={styles.role}>{testimonials[index].role}</span>
                </div>
                <a 
                  href={testimonials[index].github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.githubLink}
                  aria-label={`${testimonials[index].author}'s GitHub`}
                >
                  <svg suppressHydrationWarning width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={styles.controls}>
          <button onClick={prevTestimonial} className={styles.controlBtn} aria-label="Previous testimonial">
            <svg suppressHydrationWarning width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
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
            <svg suppressHydrationWarning width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
