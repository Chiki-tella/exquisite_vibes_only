import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.branding}>
            <div className={styles.logo}>CHRISTELLA.</div>
            <p className={styles.tagline}>Crafting exquisite digital experiences through code and design.</p>
          </div>

          <div className={styles.contactInfo}>
            <h4 className={styles.sectionTitle}>Get in Touch</h4>
            <div className={styles.contactGrid}>
              <div className={styles.contactItem}>
                <span className={styles.label}>EMAIL</span>
                <a href="mailto:christellamunezeroimpano@gmail.com" className={styles.value}>christellamunezeroimpano@gmail.com</a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.label}>WHATSAPP</span>
                <a href="https://wa.me/+250792529538" className={styles.value} target="_blank" rel="noopener noreferrer">+250 792 529 538</a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.label}>GITHUB</span>
                <a href="https://github.com/Chiki-tella" className={styles.value} target="_blank" rel="noopener noreferrer">github.com/Chiki-tella</a>
              </div>
            </div>
          </div>

          <div className={styles.linksSection}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <nav className={styles.nav}>
              <a href="#services">Services</a>
              <a href="#work">Work</a>
              <a href="#process">Process</a>
              <a href="#faq">FAQ</a>
            </nav>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            © {currentYear} Christella. All rights reserved.
          </div>
          <div className={styles.imprintedLogo}>CHRISTELLA.</div>
        </div>
      </div>
    </footer>
  );
}
