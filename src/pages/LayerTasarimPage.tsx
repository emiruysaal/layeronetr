import { motion } from "framer-motion";
import { Pencil, CheckCircle, ArrowRight, Layers, Scan, Cog } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { useQuoteModal } from "@/contexts/QuoteModalContext";
import cadDesignHero from "@/assets/cad-design-hero.png";

const features = [
  {
    icon: Scan,
    title: "Tersine Mühendislik",
    description: "3D tarama teknolojileri ile mevcut parçalarınızın dijital modellerini oluşturuyoruz. Kırık, aşınmış veya teknik çizimi olmayan parçalarınızı yeniden üretilebilir hale getiriyoruz."
  },
  {
    icon: Layers,
    title: "3D CAD Modelleme",
    description: "Endüstri standardı yazılımlarla profesyonel 3D modeller tasarlıyoruz. Konsept aşamasından üretime hazır modellere kadar tüm süreçte yanınızdayız."
  },
  {
    icon: Cog,
    title: "DfAM - Katmanlı İmalat için Tasarım",
    description: "Tasarımlarınızı 3D baskı teknolojilerine uygun hale getiriyoruz. Malzeme tasarrufu, destek yapısı optimizasyonu ve üretilebilirlik analizleri ile verimli çözümler sunuyoruz."
  }
];

const benefits = [
  "Üretim maliyetlerinde %30'a varan tasarruf",
  "Konsepten üretime hızlı geçiş",
  "Teknik çizim gerektirmeyen parça üretimi",
  "Tasarım revizyonlarında esneklik",
  "Karmaşık geometrilerin üretilebilir hale getirilmesi",
  "Montaj parça sayısının azaltılması"
];

const LayerTasarimPage = () => {
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
                  <Pencil className="w-6 h-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Layer 1</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Layer Tasarım
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Tersine mühendislik, profesyonel 3D modelleme ve DfAM (Design for Additive Manufacturing) yaklaşımı ile ürünlerinizin dijital ikizlerini oluşturuyoruz. Fikirlerinizi üretilebilir tasarımlara dönüştürüyoruz.
              </p>
              {/* Button hidden temporarily */}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={cadDesignHero}
                alt="3D Tasarım ve Modelleme"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Tasarım Hizmetlerimiz
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Endüstriyel tasarım ihtiyaçlarınız için kapsamlı çözümler sunuyoruz.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Neden Layer Tasarım?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Deneyimli mühendis kadromuz ile tasarımlarınızı katmanlı imalat teknolojilerine optimize ederek üretim süreçlerinizi hızlandırıyoruz.
              </p>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
                alt="CAD Tasarım Süreci"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Tasarım Projenizi Birlikte Hayata Geçirelim"
        subtitle="Fikirlerinizi profesyonel 3D modellere dönüştürmek için uzman ekibimizle iletişime geçin."
        buttonText="Teklif Al"
      />

      <Footer />
    </div>
  );
};

export default LayerTasarimPage;
