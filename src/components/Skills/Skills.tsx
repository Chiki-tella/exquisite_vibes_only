import styles from "./Skills.module.css";

export default function Skills() {
  const skillGroups = [
    { 
      category: "Web Platforms", 
      items: ["Next.js", "React", "TypeScript", "Node.js", "TailwindCSS"]
    },
    { 
      category: "Mobile Apps", 
      items: ["React Native", "Expo", "iOS", "Android"]
    },
    { 
      category: "Interactive & 3D", 
      items: ["Three.js", "WebGL", "Framer Motion", "GSAP"]
    },
    { 
      category: "AI / ML", 
      items: ["OpenAI API", "LangChain", "TensorFlow.js", "Python"]
    },
    { 
      category: "Databases", 
      items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Firebase"]
    },
    { 
      category: "System Architecture", 
      items: ["Microservices", "REST APIs", "GraphQL", "WebSockets"]
    },
    { 
      category: "UI/UX Design", 
      items: ["Figma", "Adobe CC", "Prototyping", "Design Systems"]
    },
    { 
      category: "Cloud & DevOps", 
      items: ["AWS", "Vercel", "Docker", "CI/CD", "Git"]
    }
  ];

  return (
    <section className={styles.skillsSection} id="skills">
      <div className={styles.headerWrapper}>
        <span className={styles.preTitle}>EXPERTISE</span>
        <h2 className={styles.title}>Technical <i>Arsenal.</i></h2>
      </div>

      <div className={styles.grid}>
        {skillGroups.map((group, idx) => (
          <div key={idx} className={styles.skillCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.skillCategory}>{group.category}</h3>
            </div>
            <div className={styles.skillTags}>
              {group.items.map((item, i) => (
                <span key={i} className={styles.tag}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
