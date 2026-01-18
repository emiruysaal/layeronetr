import Header from "@/components/Header";
import AcademyHero from "@/components/AcademyHero";
import AcademySection from "@/components/AcademySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const AcademyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <AcademyHero />
        <AcademySection />
      </main>
      <CTASection
        title="Eğitim Programlarımızı Keşfedin"
        subtitle="Kurumunuzun ihtiyaçlarına özel eğitim paketleri için bizimle iletişime geçin."
        buttonText="Eğitim Talebi Oluştur"
      />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default AcademyPage;
