import { motion } from "framer-motion";
import { Factory, CheckCircle, ArrowRight, Settings, TrendingUp, Package } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { useQuoteModal } from "@/contexts/QuoteModalContext";

const services = [
  {
    icon: Settings,
    title: "Endüstriyel Ölçekli Üretim",
    description: "Yüksek kapasiteli 3D baskı çiftliğimizle seri üretim ihtiyaçlarınızı karşılıyoruz. Yüzlerce parçayı tutarlı kalitede ve kısa sürede üretiyoruz."
  },
  {
    icon: Package,
    title: "Son Kullanım Parçaları",
    description: "Prototip aşamasının ötesinde, doğrudan ürününüzde kullanabileceğiniz fonksiyonel parçalar üretiyoruz. Kalite kontrol süreçlerimizle güvenilir sonuçlar elde ediyoruz."
  },
  {
    icon: TrendingUp,
    title: "Ölçeklenebilir Çözümler",
    description: "Tek parçadan binlerce adede kadar üretim yapabiliyoruz. İhtiyacınız arttıkça kapasitemizi esnek şekilde ölçeklendiriyoruz."
  }
];

const industries = [
  {
    name: "Otomotiv",
    description: "Jig & fixture, prototip parçalar, yedek parça üretimi",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Havacılık",
    description: "Hafif yapısal parçalar, kabin komponentleri",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Medikal",
    description: "Hasta spesifik implantlar, cerrahi kılavuzlar",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Tüketici Ürünleri",
    description: "Özelleştirilmiş ürünler, küçük seri üretim",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80"
  }
];

const stats = [
  { value: "1K+", label: "Üretilen Parça" },
  { value: "99%", label: "Kalite Oranı" },
  { value: "24/7", label: "Üretim" }
];

const LayerImalatPage = () => {
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
                  <Factory className="w-6 h-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Layer 4</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Layer İmalat
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Endüstriyel ölçekte katmanlı imalat ve seri üretim çözümleri. Prototipten seri üretime geçiş sürecinizi hızlandırıyoruz.
              </p>
              <Button
                onClick={openQuoteModal}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg rounded-xl"
              >
                Üretim Kapasitemizi Öğrenin
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=80"
                alt="Endüstriyel 3D Baskı Üretimi"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#0F172A]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              İmalat Çözümlerimiz
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Küçük partilerden büyük seri üretimlere kadar esnek çözümler.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-b from-slate-50 to-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Hizmet Verdiğimiz Sektörler
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Farklı endüstrilere özel üretim deneyimimizle yanınızdayız.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{industry.name}</h3>
                  <p className="text-slate-600 text-sm">{industry.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Üretim İhtiyaçlarınız İçin Çözüm Ortağınız"
        subtitle="Endüstriyel ölçekli 3D baskı ile üretim süreçlerinizi optimize edin."
        buttonText="Teklif Al"
      />

      <Footer />
    </div>
  );
};

export default LayerImalatPage;
