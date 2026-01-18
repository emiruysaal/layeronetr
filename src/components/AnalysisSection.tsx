import { motion } from "framer-motion";
import { Activity, Thermometer, Waves, Grid3X3, Shield, Zap } from "lucide-react";

const analysisTypes = [
  {
    icon: Activity,
    title: "Yapısal Analiz",
    description: "Statik ve dinamik yük koşulları altında gerilme ve deformasyon analizi.",
  },
  {
    icon: Thermometer,
    title: "Termal Analiz",
    description: "Isı transferi ve sıcaklık dağılımı simülasyonları.",
  },
  {
    icon: Waves,
    title: "CFD Analizi",
    description: "Akışkanlar dinamiği ve aerodinamik performans optimizasyonu.",
  },
  {
    icon: Grid3X3,
    title: "Sonlu Elemanlar (FEA)",
    description: "Karmaşık geometriler için hassas mühendislik simülasyonları.",
  },
  {
    icon: Shield,
    title: "Yorulma Analizi",
    description: "Döngüsel yükler altında ömür tahmini ve dayanıklılık analizi.",
  },
  {
    icon: Zap,
    title: "Titreşim Analizi",
    description: "Modal analiz ve frekans tepkisi simülasyonları.",
  },
];

const AnalysisSection = () => {
  return (
    <section id="analiz" className="py-24 bg-background text-foreground">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Hizmetler</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Analiz Türleri
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Projenizin gereksinimlerine göre yapısal dayanımdan termal performansa, 
            akışkan davranışından titreşim karakteristiğine kadar geniş bir analiz yelpazesi sunuyoruz.
          </p>
        </motion.div>

        {/* Analysis Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {analysisTypes.map((analysis, index) => (
            <motion.div
              key={analysis.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-muted/50 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <analysis.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3">{analysis.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{analysis.description}</p>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
            </motion.div>
          ))}
        </div>

        {/* Benefits Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid sm:grid-cols-3 gap-8 text-center"
        >
          {[
            { value: "%70", label: "Prototip Maliyeti Tasarrufu" },
            { value: "%90", label: "İlk Seferde Doğru Tasarım" },
            { value: "2x", label: "Daha Hızlı Pazara Çıkış" },
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AnalysisSection;
