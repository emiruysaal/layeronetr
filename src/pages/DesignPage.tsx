import Header from "@/components/Header";
import DesignHero from "@/components/DesignHero";
import DesignSection from "@/components/DesignSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const DesignPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <DesignHero />
        <DesignSection />
      </main>
      <CTASection
        title="Tasarım Projenizi Başlatalım"
        subtitle="Uzman mühendislik ekibimiz fikrinizi hayata geçirmek için hazır."
        buttonText="Tasarım Danışmanlığı"
      />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default DesignPage;
