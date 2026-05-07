import Link from "next/link";
import styles from "./Services.module.css";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "MOBILE APP DEV",
      desc: "Creating seamless, high-performance cross-platform mobile applications using React Native. Delivering native-like experiences with complex animations and state management.",
      link: "#mobile",
      linkText: "EXPLORE MOBILE"
    },
    {
      id: "02",
      title: "WEB & THREE.JS",
      desc: "Building highly interactive web platforms with Next.js and Three.js. Specializing in 3D product configurators, immersive storytelling, and performance-optimized frontends.",
      link: "#web",
      linkText: "EXPLORE WEB"
    },
    {
      id: "03",
      title: "AI & ML INTEGRATION",
      desc: "Empowering applications with intelligence. Integrating Large Language Models, custom computer vision pipelines, and predictive algorithms into modern web and mobile apps.",
      link: "#ai",
      linkText: "EXPLORE AI"
    }
  ];

  return (
    <section className={`${styles.servicesSection} animate-fade-in delay-3`} id="services">
      {services.map((service) => (
        <div key={service.id} className={styles.serviceCard}>
          <span className={styles.serviceNumber}>{service.id}</span>
          <h3 className={styles.serviceTitle}>{service.title}</h3>
          <p className={styles.serviceDesc}>{service.desc}</p>
          <Link href={service.link} className={styles.serviceLink}>
            <svg suppressHydrationWarning width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 16 16 12 12 8"></polyline>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            {service.linkText}
          </Link>
        </div>
      ))}
    </section>
  );
}
