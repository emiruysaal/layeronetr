import Header from "@/components/Header";
import AnalysisHero from "@/components/AnalysisHero";
import AnalysisSection from "@/components/AnalysisSection";
import AnalysisProcessSection from "@/components/AnalysisProcessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const AnalysisPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <AnalysisHero />
        <AnalysisSection />
        <AnalysisProcessSection />
      </main>
      <CTASection
        title="Tasarımınızı Simüle Edelim"
        subtitle="Fiziksel test öncesinde sanal ortamda doğrulama yapın."
        buttonText="Analiz Talebi Oluştur"
      />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default AnalysisPage;
