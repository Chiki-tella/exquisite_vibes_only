import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Skills from "@/components/Skills/Skills";
import Work from "@/components/Work/Work";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer/Footer";

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
        <Services />
        <Skills />
        <Work />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
