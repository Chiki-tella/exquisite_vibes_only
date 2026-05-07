import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.heroImageWrapper} animate-fade-in`}>
        <Image
          src="/chiki.png"
          alt="Portrait of Web Designer"
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className={styles.heroImage}
          priority
        />
      </div>

      <div className={`${styles.heroContent} animate-fade-in delay-1`}>
        <h1 className={styles.heroTitle}>
          Creative Mobile<br />
          <i>&</i> Web Developer
        </h1>
        <p className={styles.heroSubtitle}>
          Building immersive digital experiences leveraging Next.js, React Native, Three.js, and cutting-edge AI/ML integrations.
        </p>
        <button className={styles.servicesBtn}>
          <div className={styles.arrowIconWrapper}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </div>
          MY SERVICES
        </button>
      </div>

      <div className={`${styles.logos} animate-fade-in delay-2`}>
        <svg width="80" height="24" viewBox="0 0 100 30" fill="currentColor">
          <text x="0" y="20" fontFamily="satoshi" fontSize="20" fontWeight="bold">REACT</text>
        </svg>
        <svg width="100" height="24" viewBox="0 0 100 30" fill="currentColor">
          <text x="0" y="20" fontFamily="serif" fontSize="18" fontStyle="italic">Next.js</text>
        </svg>
        <svg width="80" height="24" viewBox="0 0 100 30" fill="currentColor">
          <text x="0" y="20" fontFamily="sans-serif" fontSize="16" letterSpacing="2">THREE.JS</text>
        </svg>
        <svg width="60" height="24" viewBox="0 0 80 30" fill="currentColor">
          <text x="0" y="20" fontFamily="sans-serif" fontSize="16" letterSpacing="1">AI/ML</text>
        </svg>
      </div>
    </section>
  );
}
