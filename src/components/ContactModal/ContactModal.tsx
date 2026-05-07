import styles from "./ContactModal.module.css";
import { useEffect } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <h2 className={styles.title}>Let's Build Something.</h2>
        <p className={styles.subtitle}>Fill out the form below and I'll get back to you as soon as possible.</p>
        
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="John Doe" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="john@example.com" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={5} placeholder="Tell me about your project..." required></textarea>
          </div>
          <button type="submit" className={styles.submitBtn}>
            Send Message
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
