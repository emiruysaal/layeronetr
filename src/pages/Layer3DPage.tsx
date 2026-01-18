import { motion } from "framer-motion";
import { Printer, CheckCircle, ArrowRight, Zap, Target, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { useQuoteModal } from "@/contexts/QuoteModalContext";
import fdmPrinter from "@/assets/fdm-printer.png";
import slaPrinter from "@/assets/sla-printer.png";
import slsPrinter from "@/assets/sls-printer.png";

const technologies = [
  {
    name: "FDM",
    fullName: "Fused Deposition Modeling",
    image: fdmPrinter,
    description: "Termoplastik filament kullanarak katman katman üretim. Fonksiyonel prototipler ve son kullanım parçaları için ideal.",
    materials: ["PLA", "ABS", "PETG", "Naylon", "TPU", "PC"],
    advantages: ["Ekonomik üretim", "Geniş malzeme seçeneği", "Büyük parça kapasitesi"]
  },
  {
    name: "SLA",
    fullName: "Stereolithography",
    image: slaPrinter,
    description: "UV lazer ile fotopolimer reçine kürleme. Yüksek detay ve pürüzsüz yüzey kalitesi gerektiren parçalar için.",
    materials: ["Standard Reçine", "Esnek Reçine", "Dayanıklı Reçine", "Döküm Reçinesi"],
    advantages: ["Yüksek hassasiyet", "Pürüzsüz yüzey", "İnce detaylar"]
  },
  {
    name: "SLS",
    fullName: "Selective Laser Sintering",
    image: slsPrinter,
    description: "Lazer ile toz malzeme sinterleme. Destek yapısı gerektirmeyen karmaşık geometriler için mükemmel.",
    materials: ["PA12 Naylon", "PA11", "TPU", "Cam Dolgulu Naylon"],
    advantages: ["Karmaşık geometriler", "Yüksek mukavemet", "Fonksiyonel parçalar"]
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Hızlı Teslimat",
    description: "24-72 saat içinde prototip teslimatı"
  },
  {
    icon: Target,
    title: "Yüksek Hassasiyet",
    description: "±0.1mm tolerans değerleri"
  },
  {
    icon: Zap,
    title: "Hızlı İterasyon",
    description: "Aynı gün tasarım revizyonu"
  }
];

const Layer3DPage = () => {
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
                  <Printer className="w-6 h-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Layer 3</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Layer 3D
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                FDM, SLA ve SLS teknolojileri ile hızlı prototipleme ve fonksiyonel parça üretimi. Fikirlerinizi 24 saat içinde fiziksel ürünlere dönüştürüyoruz.
              </p>
              {/* Button hidden temporarily */}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1631557512824-fe7fd9efc3ec?auto=format&fit=crop&w=800&q=80"
                alt="3D Baskı Teknolojisi"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-12 bg-[#0F172A]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 text-white"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              3D Baskı Teknolojilerimiz
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Her ihtiyaca uygun teknoloji ve malzeme seçenekleri sunuyoruz.
            </p>
          </motion.div>

          <div className="space-y-16">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="bg-slate-50 rounded-2xl p-8">
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-full max-w-md mx-auto"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                    {tech.fullName}
                  </span>
                  <h3 className="text-3xl font-bold text-slate-900 mt-2 mb-4">{tech.name} Teknolojisi</h3>
                  <p className="text-lg text-slate-600 mb-6">{tech.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Malzemeler:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tech.materials.map((material) => (
                        <span key={material} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Avantajları:</h4>
                    <div className="space-y-2">
                      {tech.advantages.map((advantage) => (
                        <div key={advantage} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span className="text-slate-600">{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Projeniz İçin En Uygun Teknolojiyi Birlikte Belirleyelim"
        subtitle="CAD dosyanızı gönderin, size özel üretim çözümü ve fiyat teklifi sunalım."
        buttonText="Teklif Al"
      />

      <Footer />
    </div>
  );
};

export default Layer3DPage;
