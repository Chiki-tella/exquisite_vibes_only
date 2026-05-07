"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";
import ContactModal from "../ContactModal/ContactModal";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.nav}>
          <Link href="/" className={styles.logo}>
            arik.
          </Link>
          <nav className={styles.navLinks}>
            <Link href="#services">SERVICES</Link>
            <Link href="#skills">SKILLS</Link>
            <Link href="#work">WORK</Link>
            <Link href="#faq">FAQ</Link>
          </nav>
          <button className={styles.ctaButton} onClick={() => setIsModalOpen(true)}>
            <span className={styles.ctaText}>LET'S TALK</span>
            <span className={styles.ctaIcon}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </button>
        </div>
      </header>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
