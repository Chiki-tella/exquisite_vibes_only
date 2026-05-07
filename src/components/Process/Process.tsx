import styles from "./Process.module.css";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We start by diving deep into your goals, target audience, and brand identity to formulate a concrete action plan.",
    },
    {
      number: "02",
      title: "UI/UX Design",
      description: "Crafting wireframes and high-fidelity mockups, ensuring the interface is both exquisitely beautiful and highly intuitive.",
    },
    {
      number: "03",
      title: "Development",
      description: "Writing clean, scalable, and highly optimized code using Next.js, React Native, and custom animations to bring the designs to life.",
    },
    {
      number: "04",
      title: "Testing & Launch",
      description: "Rigorous quality assurance, performance optimization, and SEO checks before deploying your masterpiece to the world.",
    }
  ];

  return (
    <section className={styles.processSection} id="process">
      <h2 className={styles.title}>My Process</h2>
      <div className={styles.timeline}>
        {steps.map((step, idx) => (
          <div key={idx} className={styles.step}>
            <div className={styles.numberWrapper}>
              <span className={styles.number}>{step.number}</span>
              {idx !== steps.length - 1 && <div className={styles.line}></div>}
            </div>
            <div className={styles.content}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
