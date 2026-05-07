"use client";

import styles from "./ProjectModal.module.css";
import { useEffect } from "react";
import Image from "next/image";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  github: string;
  live?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className={styles.projectImage}
            />
          </div>
          
          <div className={styles.details}>
            <span className={styles.category}>{project.category}</span>
            <h2 className={styles.title}>{project.title}</h2>
            <p className={styles.description}>{project.description}</p>
            
            <div className={styles.actions}>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
                VIEW SOURCE CODE
              </a>
              <button className={styles.secondaryBtn} onClick={onClose}>
                GO BACK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
