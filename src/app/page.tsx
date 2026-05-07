import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Skills from "@/components/Skills/Skills";
import Work from "@/components/Work/Work";
import Process from "@/components/Process/Process";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer/Footer";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        paddingTop: "100px",
      }}>
        <Hero />
        
        <ScrollReveal><Services /></ScrollReveal>
        <ScrollReveal><Skills /></ScrollReveal>
        <ScrollReveal><Process /></ScrollReveal>
        <ScrollReveal><Work /></ScrollReveal>
        <ScrollReveal><Testimonials /></ScrollReveal>
        <ScrollReveal><FAQ /></ScrollReveal>
        
      </main>
      <Footer />
    </>
  );
}
