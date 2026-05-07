"use client";

import { useState } from "react";
import styles from "./Hero.module.css";
import ContactModal from "../ContactModal/ContactModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={`${styles.badge} animate-fade-in`}>
            <span className={styles.badgeText}>Available for new projects</span>
          </div>

          <h1 className={`${styles.heroTitle} animate-fade-in delay-1`}>
            Crafting <i>Extraordinary</i><br />
            Digital Experiences
          </h1>

          <p className={`${styles.heroSubtitle} animate-fade-in delay-2`}>
            Blending code and design to build high-performance web and mobile applications that stand out in the digital landscape.
          </p>

          <div className={`${styles.ctaWrapper} animate-fade-in delay-3`}>
            <a href="#work" className={styles.primaryBtn}>
              View My Work
            </a>
            <button className={styles.secondaryBtn} onClick={() => setIsModalOpen(true)}>
              Let's Talk
            </button>
          </div>
        </div>

        <div className={`${styles.logosSection} animate-fade-in delay-4`}>
          <span className={styles.logosTitle}>MY SERVICES</span>
          <div className={styles.logos}>
            <div className={styles.logoItem}>
              <svg width="80" height="24" viewBox="0 0 100 30" fill="currentColor">
                <text x="0" y="20" fontFamily="satoshi" fontSize="20" fontWeight="bold">REACT</text>
              </svg>
            </div>
            <div className={styles.logoItem}>
              <svg width="100" height="24" viewBox="0 0 100 30" fill="currentColor">
                <text x="0" y="20" fontFamily="serif" fontSize="18" fontStyle="italic">Next.js</text>
              </svg>
            </div>
            <div className={styles.logoItem}>
              <svg width="80" height="24" viewBox="0 0 100 30" fill="currentColor">
                <text x="0" y="20" fontFamily="sans-serif" fontSize="16" letterSpacing="2">THREE.JS</text>
              </svg>
            </div>
            <div className={styles.logoItem}>
              <svg width="60" height="24" viewBox="0 0 80 30" fill="currentColor">
                <text x="0" y="20" fontFamily="sans-serif" fontSize="16" letterSpacing="1">AI/ML</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
