import Header from "@/components/Header";
import ProductionHero from "@/components/ProductionHero";
import ProductionSection from "@/components/ProductionSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const ProductionPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <ProductionHero />
        <ProductionSection />
      </main>
      <CTASection
        title="24 Saat İçinde Numune Alın"
        subtitle="CAD dosyanızı yükleyin, aynı gün teklifinizi alın."
        buttonText="Hızlı Teklif Al"
      />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ProductionPage;
