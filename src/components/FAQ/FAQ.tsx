import styles from "./FAQ.module.css";

export default function FAQ() {
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

  return (
    <section className={styles.faqSection} id="faq">
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      <div className={styles.faqList}>
        {faqs.map((faq, idx) => (
          <div key={idx} className={styles.faqItem}>
            <h4 className={styles.question}>{faq.q}</h4>
            <p className={styles.answer}>{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
