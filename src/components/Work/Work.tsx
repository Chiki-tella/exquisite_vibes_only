import Image from "next/image";
import styles from "./Work.module.css";

export default function Work() {
  const projects = [
    {
      title: "E-Commerce AI Platform",
      category: "WEB APP & AI",
      image: "/work1.png",
      github: "#",
      live: "#",
      size: "large"
    },
    {
      title: "Fitness Tracking App",
      category: "REACT NATIVE",
      image: "/work2.png",
      github: "#",
      live: "#",
      size: "small"
    },
    {
      title: "3D Product Configurator",
      category: "THREE.JS",
      image: "/work3.png",
      github: "#",
      live: "#",
      size: "small"
    },
    {
      title: "Fintech Dashboard",
      category: "UI/UX & NEXT.JS",
      image: "/work1.png",
      github: "#",
      live: "#",
      size: "large"
    }
  ];

  return (
    <section className={styles.workSection} id="work">
      <div className={styles.headerWrapper}>
        <span className={styles.preTitle}>PORTFOLIO</span>
        <h2 className={styles.title}>Selected <i>Work.</i></h2>
      </div>

      <div className={styles.workGrid}>
        {projects.map((project, idx) => (
          <div key={idx} className={`${styles.workItem} ${styles[project.size]}`}>
            <div className={styles.imageContainer}>
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                className={styles.workItemImage} 
              />
              <div className={styles.overlay}>
                <div className={styles.links}>
                  <a href={project.github} className={styles.iconLink} target="_blank" rel="noopener noreferrer" title="GitHub">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                  <a href={project.live} className={styles.iconLink} target="_blank" rel="noopener noreferrer" title="Live Demo">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.projectInfo}>
              <span className={styles.projectCategory}>{project.category}</span>
              <h3 className={styles.projectTitle}>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
