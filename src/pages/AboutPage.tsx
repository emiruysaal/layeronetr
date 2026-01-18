import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <AboutHero />
        <AboutSection />
        <ValuesSection />
      </main>
      <CTASection
        title="Projenizi Birlikte Geliştirelim"
        subtitle="Mühendislik ihtiyaçlarınız için uzman ekibimizle tanışın."
        buttonText="Teklif Al"
      />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default AboutPage;
