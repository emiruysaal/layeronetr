import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import TechnicalProcessSection from "@/components/TechnicalProcessSection";
import BrandLogoStrip from "@/components/BrandLogoStrip";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CTASection
          title="Hemen Hızlı Teknik Destek Alın"
          subtitle="Uzman mühendislerimiz katmanlı imalat ve tasarım projelerinizde her an yanınızda."
          buttonText="Teklif Al"
        />
        <TechnicalProcessSection />
        <BrandLogoStrip />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
