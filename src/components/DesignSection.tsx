import { motion } from "framer-motion";
import { Scan, Boxes, Cpu, ArrowRight, CheckCircle2 } from "lucide-react";
import catiaLogo from "@/assets/logo-catia.png";
import solidworksLogo from "@/assets/logo-solidworks.png";
import siemensNxLogo from "@/assets/logo-siemens-nx.png";

const features = [
  {
    icon: Scan,
    title: "Tersine Mühendislik",
    description: "3D tarama teknolojileri ile mevcut parçalarınızın dijital ikizlerini oluşturuyoruz.",
  },
  {
    icon: Boxes,
    title: "Topoloji Optimizasyonu",
    description: "Yapay zeka destekli algoritmalar ile malzeme kullanımını minimize ediyoruz.",
  },
  {
    icon: Cpu,
    title: "DfAM",
    description: "Design for Additive Manufacturing prensipleri ile üretilebilirlik garantisi.",
  },
];

const processSteps = [
  { step: "01", title: "Girdi", subtitle: "Fikir & Gereksinim" },
  { step: "02", title: "Tasarım", subtitle: "CAD & Modelleme" },
  { step: "03", title: "Doğrulama", subtitle: "Analiz & Simülasyon" },
  { step: "04", title: "Çıktı", subtitle: "Üretim Dosyası" },
];

const DesignSection = () => {
  return (
    <section id="tasarim" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elevated group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* The Layer Method - Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-3xl p-8 md:p-12 border border-border"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">The Layer Method</h3>
            <p className="text-muted-foreground">Tasarım sürecimizin sistematik akışı</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-muted/50 rounded-2xl p-6 text-center border border-border hover:border-primary/30 transition-colors">
                  <div className="text-4xl font-bold text-primary mb-2">{item.step}</div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                </div>
                
                {/* Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Benefits */}
          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {["Hızlı iterasyon", "Maliyet optimizasyonu", "Üretilebilirlik garantisi", "Teknik dokümantasyon"].map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Software Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-8">
            Kullandığımız Yazılımlar
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {/* CATIA */}
            <div className="flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
              <div className="h-10 flex items-center bg-slate-800 px-6 py-2 rounded-lg">
                <img src={catiaLogo} alt="CATIA" className="h-6 w-auto" />
              </div>
              <span className="text-xs text-muted-foreground">Dassault Systèmes</span>
            </div>

            {/* SOLIDWORKS */}
            <div className="flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
              <div className="h-10 flex items-center bg-slate-800 px-6 py-2 rounded-lg">
                <img src={solidworksLogo} alt="SOLIDWORKS" className="h-6 w-auto" />
              </div>
              <span className="text-xs text-muted-foreground">Dassault Systèmes</span>
            </div>

            {/* SIEMENS NX */}
            <div className="flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
              <div className="h-14 flex items-center">
                <img src={siemensNxLogo} alt="Siemens NX" className="h-14 w-auto" />
              </div>
              <span className="text-xs text-muted-foreground">Siemens Digital Industries</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignSection;
