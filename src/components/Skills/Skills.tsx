import styles from "./Skills.module.css";

export default function Skills() {
  const skills = [
    { category: "Web Development", items: ["Next.js", "React", "TypeScript", "Node.js"] },
    { category: "Mobile Apps", items: ["React Native", "Expo", "iOS", "Android"] },
    { category: "Interactive & 3D", items: ["Three.js", "WebGL", "Framer Motion", "GSAP"] },
    { category: "AI / ML", items: ["OpenAI API", "LangChain", "TensorFlow.js", "Python"] },
  ];

  return (
    <section className={styles.skillsSection} id="skills">
      <div className={styles.header}>
        <h2 className={styles.title}>My Expertise</h2>
        <p className={styles.subtitle}>A comprehensive toolkit built over years of engineering and design.</p>
      </div>

      <div className={styles.grid}>
        {skills.map((skillGroup, idx) => (
          <div key={idx} className={styles.skillCard}>
            <h3 className={styles.skillCategory}>{skillGroup.category}</h3>
            <ul className={styles.skillList}>
              {skillGroup.items.map((item, i) => (
                <li key={i} className={styles.skillItem}>
                  <span className={styles.bullet}></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
