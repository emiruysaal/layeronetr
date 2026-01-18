import { motion } from "framer-motion";
import { GraduationCap, CheckCircle, ArrowRight, BookOpen, Users, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { useQuoteModal } from "@/contexts/QuoteModalContext";

const programs = [
  {
    icon: BookOpen,
    title: "Teknik Eğitimler",
    description: "3D baskı teknolojileri, CAD/CAM yazılımları ve DfAM konularında uygulamalı eğitimler. Başlangıç seviyesinden uzmanlığa kadar kapsamlı müfredat.",
    topics: ["FDM/SLA/SLS Teknolojileri", "CAD Modelleme", "Malzeme Bilimi", "Post-Processing"]
  },
  {
    icon: Users,
    title: "Kurumsal Danışmanlık",
    description: "Şirketinizin 3D baskı yetkinliklerini geliştirmek için stratejik danışmanlık. Teknoloji seçimi, süreç optimizasyonu ve ekip eğitimi.",
    topics: ["Teknoloji Roadmap", "Süreç Optimizasyonu", "Maliyet Analizi", "Ekip Geliştirme"]
  },
  {
    icon: Award,
    title: "Know-How Transferi",
    description: "Yılların deneyimini kurumunuza aktarıyoruz. Best practice'ler, troubleshooting teknikleri ve endüstri sırları.",
    topics: ["Best Practices", "Troubleshooting", "Kalite Kontrol", "Verimlilik Artışı"]
  }
];

const trainingFormats = [
  {
    title: "Yüz Yüze Eğitim",
    description: "Bursa tesislerimizde uygulamalı eğitim",
    features: ["Canlı demo", "Hands-on pratik", "Sertifika"]
  },
  {
    title: "Online Eğitim",
    description: "Uzaktan erişimli interaktif eğitimler",
    features: ["Esnek zaman", "Kayıt erişimi", "Canlı Q&A"]
  },
  {
    title: "Şirket İçi Eğitim",
    description: "Ekibinize özel lokasyonunuzda eğitim",
    features: ["Özelleştirilmiş içerik", "Ekip bazlı", "Proje odaklı"]
  }
];

const LayerAkademiPage = () => {
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
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Layer 5</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Layer Akademi
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Teknik eğitimler, kurumsal danışmanlık ve know-how transferi ile ekibinizin katmanlı imalat yetkinliklerini geliştiriyoruz.
              </p>
              <Button
                onClick={openQuoteModal}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg rounded-xl"
              >
                Eğitim Programlarını İnceleyin
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
                alt="Eğitim ve Danışmanlık"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Eğitim Programlarımız
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Her seviyeye uygun, uygulamalı ve sonuç odaklı eğitim programları.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-b from-slate-50 to-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <program.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{program.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{program.description}</p>
                <div className="space-y-2">
                  {program.topics.map((topic) => (
                    <div key={topic} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm text-slate-600">{topic}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Formats Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Eğitim Formatları
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Size en uygun format ile eğitim alın.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {trainingFormats.map((format, index) => (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">{format.title}</h3>
                <p className="text-slate-600 mb-6">{format.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {format.features.map((feature) => (
                    <span key={feature} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Neden Layer Akademi?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Saha deneyimimizi teorik bilgiyle birleştirerek gerçek dünya problemlerine çözüm üretebilen profesyoneller yetiştiriyoruz.
              </p>
              <div className="space-y-4">
                {[
                  "Gerçek projelerden örnek vakalar",
                  "Uygulamalı hands-on eğitim",
                  "Sektör deneyimli eğitmenler",
                  "Güncel teknoloji ve trendler",
                  "Eğitim sonrası destek",
                  "Networking imkanları"
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                alt="Eğitim Ortamı"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ekibinizin Yetkinliklerini Geliştirin"
        subtitle="Kurumunuza özel eğitim programları için bizimle iletişime geçin."
        buttonText="Teklif Al"
      />

      <Footer />
    </div>
  );
};

export default LayerAkademiPage;
