import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Christella transformed our outdated platform into a modern, lightning-fast Next.js application. Her attention to detail in the UI and understanding of complex state management is unmatched.",
      author: "Sarah Jenkins",
      role: "CTO, TechFlow"
    },
    {
      text: "Integrating the AI features was a breeze with his expertise. He not only built the frontend but also optimized the entire ML pipeline to return results instantly.",
      author: "David Chen",
      role: "Founder, AI Solutions"
    }
  ];

  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.title}>Client Feedback</h2>
      <div className={styles.grid}>
        {testimonials.map((test, idx) => (
          <div key={idx} className={styles.card}>
            <svg className={styles.quoteIcon} width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className={styles.text}>{test.text}</p>
            <div className={styles.authorInfo}>
              <h4 className={styles.author}>{test.author}</h4>
              <span className={styles.role}>{test.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
