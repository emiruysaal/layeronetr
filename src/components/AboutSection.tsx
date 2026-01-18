import { motion } from "framer-motion";
import { Pencil, BarChart3, Printer, Factory, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const layers = [
  {
    id: 1,
    name: "Layer Tasarım",
    subtitle: "Design & DfAM",
    icon: Pencil,
    description: "Tersine mühendislik, 3D modelleme ve DfAM yaklaşımı ile ürünlerinizin dijital ikizlerini oluşturuyoruz.",
    color: "from-orange/20 to-orange/5",
    href: "/layer-tasarim",
  },
  {
    id: 2,
    name: "Layer Analiz",
    subtitle: "Simulation",
    icon: BarChart3,
    description: "FEA, CFD ve termal analizler ile tasarımlarınızı sanal ortamda doğruluyoruz.",
    color: "from-blue-500/20 to-blue-500/5",
    href: "/layer-analiz",
  },
  {
    id: 3,
    name: "Layer 3D",
    subtitle: "Rapid Prototyping",
    icon: Printer,
    description: "FDM, SLA ve SLS teknolojileri ile hızlı prototipleme ve fonksiyonel parça üretimi.",
    color: "from-green-500/20 to-green-500/5",
    href: "/layer-3d",
  },
  {
    id: 4,
    name: "Layer İmalat",
    subtitle: "Manufacturing",
    icon: Factory,
    description: "Endüstriyel ölçekte katmanlı imalat ve seri üretim çözümleri.",
    color: "from-purple-500/20 to-purple-500/5",
    href: "/layer-imalat",
  },
  {
    id: 5,
    name: "Layer Akademi",
    subtitle: "Education",
    icon: GraduationCap,
    description: "Teknik eğitimler, danışmanlık ve know-how transferi hizmetleri.",
    color: "from-rose-500/20 to-rose-500/5",
    href: "/layer-akademi",
  },
];

const AboutSection = () => {
  return (
    <section id="hakkinda" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle radial gradient for depth - matching AboutHero */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-50/50 via-white to-white pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Ekosistemimiz</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6">
            5 Katmanlı Çözüm Mimarisi
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Birbirine entegre çalışan 5 katmanlı yapımızla nihai ürüne kadar tüm süreci mühendislik disiplini ile yönetiyoruz.
          </p>
        </motion.div>

        {/* Layer Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <Link to={layer.href} className="block h-full">
                <div className={`relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elevated h-full`}>
                  {/* Layer Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {layer.id}
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${layer.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <layer.icon className="w-7 h-7 text-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-foreground mb-1">{layer.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{layer.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{layer.description}</p>

                  {/* Arrow */}
                  <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">Detaylar</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              {/* Connector Line (except last) */}
              {index < layers.length - 1 && (
                <div className="hidden xl:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
