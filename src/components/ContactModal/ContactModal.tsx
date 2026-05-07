import styles from "./ContactModal.module.css";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setStatus("idle");
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setStatus("idle");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

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
        
        <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="user_name">Name</label>
            <input type="text" id="user_name" name="user_name" placeholder="John Doe" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="user_email">Email</label>
            <input type="email" id="user_email" name="user_email" placeholder="john@example.com" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} placeholder="Tell me about your project..." required></textarea>
          </div>
          
          <button type="submit" className={styles.submitBtn} disabled={isSending}>
            {isSending ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
            {!isSending && status !== "success" && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            )}
          </button>

          {status === "error" && (
            <p className={styles.errorMsg}>Something went wrong. Please try again or email me directly.</p>
          )}
        </form>
      </div>
    </div>
  );
}
