import Image from "next/image";
import styles from "./Work.module.css";

export default function Work() {
  return (
    <section className={styles.workSection} id="work">
      <div className={styles.workHeader}>
        <h2 className={styles.workTitle}>Selected Work</h2>
        <button className={styles.seeAllBtn}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 16 16 12 12 8"></polyline>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
          SEE ALL
        </button>
      </div>

      <div className={styles.workGrid}>
        <div className={styles.workItem}>
          <Image src="/work1.png" alt="E-Commerce AI Platform" fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.workItemImage} />
          <div className={styles.workItemOverlay}>
            <div>
              <div className={styles.workCategory}>WEB APP & AI</div>
              <div className={styles.workName}>NextShop Intelligence</div>
            </div>
          </div>
        </div>

        <div className={styles.workItem}>
          <Image src="/work2.png" alt="Fitness Tracking App" fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.workItemImage} />
          <div className={styles.workItemOverlay}>
            <div>
              <div className={styles.workCategory}>REACT NATIVE</div>
              <div className={styles.workName}>Pulse Mobile</div>
            </div>
          </div>
        </div>

        <div className={styles.workItem}>
          <Image src="/work3.png" alt="3D Product Configurator" fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.workItemImage} />
          <div className={styles.workItemOverlay}>
            <div>
              <div className={styles.workCategory}>THREE.JS</div>
              <div className={styles.workName}>Aero Configurator</div>
            </div>
          </div>
        </div>

        <div className={styles.workItem}>
          <Image src="/work1.png" alt="Fintech Dashboard" fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.workItemImage} />
          <div className={styles.workItemOverlay}>
            <div>
              <div className={styles.workCategory}>UI/UX & NEXT.JS</div>
              <div className={styles.workName}>Apex Finance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
