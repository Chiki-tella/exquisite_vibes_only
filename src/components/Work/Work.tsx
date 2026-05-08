"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Work.module.css";
import ProjectModal from "./ProjectModal";

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "AuditAI",
      category: "AI AUDITING PLATFORM",
      description: "A comprehensive AI-driven platform designed to automate and streamline firm-level auditing processes. It utilizes advanced risk assessment models to ensure compliance and operational integrity while providing actionable insights for firm heads.",
      image: "/auditAI.png",
      github: "https://github.com/Chiki-tella/AuditAI",
      size: "large"
    },
    {
      title: "CommunityPulse",
      category: "COMMUNITY ENGAGEMENT",
      description: "A social engagement tool that provides real-time analytics and pulse checks for large communities. It helps leaders understand member sentiment, track participation trends, and drive meaningful interactions through data-driven decisions.",
      image: "/work2.png",
      github: "https://github.com/Chiki-tella/CommunityPulse",
      size: "small"
    },
    {
      title: "3D Macbook Apple Clone",
      category: "THREE.JS INTERACTIVE",
      description: "An immersive 3D experience showcasing high-fidelity product modeling. Built with Three.js and React Three Fiber to demonstrate interactive hardware rendering, custom textures, and smooth camera transitions in the browser.",
      image: "/work3.png",
      github: "https://github.com/Chiki-tella/3D_Macbook_Apple_Clone",
      size: "small"
    },
    {
      title: "TalentAI Screening Dashboard",
      category: "AI RECRUITMENT PLATFORM",
      description: "A next-generation recruitment hub that leverages AI to screen and rank talent efficiently. Features a deep-dive analytics dashboard for HR teams to evaluate candidates based on skills, experience, and cultural fit using proprietary scoring algorithms.",
      image: "/work1.png",
      github: "https://github.com/Chiki-tella/Umurava_AI_Hackathon",
      live: "https://talent-ai-tau.vercel.app/",
      size: "large"
    }
  ];

  return (
    <>
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
                  suppressHydrationWarning
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                  className={styles.workItemImage}
                />
                <div className={styles.overlay}>
                  <div className={styles.links}>
                    <button
                      className={styles.iconLink}
                      onClick={() => setSelectedProject(project)}
                      title="View Details"
                    >
                      <svg suppressHydrationWarning width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                      <span className={styles.linkText}>INFO</span>
                    </button>
                    <a href={project.github} className={styles.iconLink} target="_blank" rel="noopener noreferrer" title="View GitHub Repository">
                      <svg suppressHydrationWarning width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      <span className={styles.linkText}>CODE</span>
                    </a>
                    {project.live && (
                      <a href={project.live} className={styles.iconLink} target="_blank" rel="noopener noreferrer" title="View Live Demo">
                        <svg suppressHydrationWarning width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        <span className={styles.linkText}>LIVE</span>
                      </a>
                    )}
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

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
