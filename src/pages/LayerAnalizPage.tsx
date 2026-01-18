import { motion } from "framer-motion";
import { BarChart3, CheckCircle, ArrowRight, Wind, Thermometer, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { useQuoteModal } from "@/contexts/QuoteModalContext";
import ansysAnalysisHero from "@/assets/ansys-analysis-hero.png";

const analysisTypes = [
  {
    icon: Shield,
    title: "FEA - Sonlu Elemanlar Analizi",
    description: "Yapısal mukavemet, gerilme ve deformasyon analizleri ile tasarımlarınızın mekanik performansını sanal ortamda test ediyoruz. Statik, dinamik ve yorulma analizleri gerçekleştiriyoruz."
  },
  {
    icon: Wind,
    title: "CFD - Hesaplamalı Akışkanlar Dinamiği",
    description: "Akış simülasyonları ile hava, su ve diğer akışkanların davranışlarını modelliyoruz. Aerodinamik optimizasyon ve soğutma sistem tasarımlarında kritik veriler sağlıyoruz."
  },
  {
    icon: Thermometer,
    title: "Termal Analiz",
    description: "Isı transferi ve termal gerilme analizleri ile ürünlerinizin çalışma koşullarındaki termal davranışını öngörüyoruz. Soğutma çözümleri ve malzeme seçimi konusunda rehberlik ediyoruz."
  }
];

const processSteps = [
  {
    step: "01",
    title: "Tasarım Transferi",
    description: "CAD modelinizi analiz ortamına aktarıyoruz"
  },
  {
    step: "02",
    title: "Mesh Oluşturma",
    description: "Optimum sonuç için uygun ağ yapısı oluşturuyoruz"
  },
  {
    step: "03",
    title: "Simülasyon",
    description: "Gerçek çalışma koşullarını simüle ediyoruz"
  },
  {
    step: "04",
    title: "Raporlama",
    description: "Detaylı analiz raporu ve öneriler sunuyoruz"
  }
];

const LayerAnalizPage = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-orange-50/50 to-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange/20 to-orange/5 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Layer 2</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Layer Analiz
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                FEA, CFD ve termal simülasyonlar ile tasarımlarınızı üretim öncesinde sanal ortamda doğruluyoruz. Prototip maliyetlerini düşürüyor, ürün geliştirme sürecinizi hızlandırıyoruz.
              </p>
              {/* Button hidden temporarily */}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={ansysAnalysisHero}
                alt="Mühendislik Simülasyonu"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Analysis Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Analiz Hizmetlerimiz
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Endüstri standardı yazılımlarla kapsamlı mühendislik simülasyonları gerçekleştiriyoruz.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {analysisTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-b from-slate-50 to-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <type.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{type.title}</h3>
                <p className="text-slate-600 leading-relaxed">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Analiz Sürecimiz
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Sistematik yaklaşımımızla güvenilir sonuçlar elde ediyoruz.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#0F172A] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Tasarımınızı Sanal Ortamda Test Edin"
        subtitle="Üretime geçmeden önce simülasyonlarla tasarımınızı doğrulayın, maliyetleri azaltın."
        buttonText="Teklif Al"
      />

      <Footer />
    </div>
  );
};

export default LayerAnalizPage;
