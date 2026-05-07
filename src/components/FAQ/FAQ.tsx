"use client";

import { useState, useEffect } from "react";
import styles from "./FAQ.module.css";

function FAQItem({ q, a, isOpen, onClick }: { q: string, a: string, isOpen: boolean, onClick: () => void }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (isOpen) {
      let i = 0;
      setDisplayedText("");
      const interval = setInterval(() => {
        setDisplayedText(a.slice(0, i + 1));
        i++;
        if (i >= a.length) clearInterval(interval);
      }, 20); // Typing speed
      return () => clearInterval(interval);
    } else {
      setDisplayedText("");
    }
  }, [isOpen, a]);

  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}>
      <button className={styles.questionBtn} onClick={onClick}>
        <span className={styles.question}>{q}</span>
        <span className={styles.iconWrapper}>
          <span className={styles.icon}>{isOpen ? "✕" : "+"}</span>
        </span>
      </button>
      <div className={styles.answerContainer}>
        <div className={styles.answerWrapper}>
          <div className={styles.answerContent}>
            {/* Invisible full text to reserve correct height for smooth CSS transition */}
            <p className={styles.invisibleText} aria-hidden="true">{a}</p>
            {/* Actually visible typing text positioned absolutely over the invisible one */}
            <p className={styles.typingText}>
              {isOpen ? displayedText : ""}
              {isOpen && displayedText.length < a.length && <span className={styles.cursor}>|</span>}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is your primary tech stack?",
      a: "For the web, I build exclusively with Next.js, React, and TypeScript. For mobile, I use React Native. I also integrate Three.js for 3D experiences and various AI APIs (OpenAI, Anthropic) for intelligent features."
    },
    {
      q: "Do you design the interfaces as well?",
      a: "Yes, I offer end-to-end services. I design intuitive, modern, and dark-mode optimized interfaces before building them, ensuring the final product matches the premium aesthetic exactly."
    },
    {
      q: "How do you handle 3D web performance?",
      a: "I optimize Three.js scenes by compressing assets (GLTF/Draco), using instanced meshes, and carefully managing the render loop with React Three Fiber to ensure smooth 60fps experiences."
    },
    {
      q: "Are you available for freelance projects?",
      a: "Currently, I am accepting select freelance projects that align with my expertise in Web3, AI tooling, and high-end creative portfolios."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection} id="faq">
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      <div className={styles.faqList}>
        {faqs.map((faq, idx) => (
          <FAQItem 
            key={idx} 
            q={faq.q} 
            a={faq.a} 
            isOpen={openIndex === idx} 
            onClick={() => toggleFAQ(idx)} 
          />
        ))}
      </div>
    </section>
  );
}
