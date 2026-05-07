"use client";

import { useState } from "react";
import styles from "./CTA.module.css";
import ContactModal from "../ContactModal/ContactModal";

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <span className={styles.preTitle}>READY TO START?</span>
            <h2 className={styles.title}>Let’s build something <i>extraordinary</i> together.</h2>
            <p className={styles.description}>
              Currently accepting new projects and collaborations. Whether you have a clear vision or just a starting point, I’m here to help you bring it to life.
            </p>
            <div className={styles.buttonWrapper}>
              <button className={styles.mainButton} onClick={() => setIsModalOpen(true)}>
                START A PROJECT
                <svg suppressHydrationWarning width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
          </div>
          
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
