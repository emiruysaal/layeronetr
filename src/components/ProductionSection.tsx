import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, CheckCircle2, ArrowRight } from "lucide-react";
import fdmPartsImage from "@/assets/fdm-parts.png";
import fdmPrinterImage from "@/assets/fdm-printer.png";
import slaPartsImage from "@/assets/sla-parts.png";
import slaPrinterImage from "@/assets/sla-printer.png";
import slsPartsImage from "@/assets/sls-parts.png";
import slsPrinterImage from "@/assets/sls-printer.png";
import ImageLightbox from "./ImageLightbox";
import { useQuoteModal } from "@/contexts/QuoteModalContext";

const technologies = [
  {
    id: "fdm",
    name: "FDM",
    fullName: "Fused Deposition Modeling",
    description: "Karbon fiber, PLA, ABS ve PA gibi mühendislik plastikleri ile fonksiyonel parça üretimi.",
    materials: ["Carbon Fiber PA", "PLA", "PC", "PETG", "ABS", "TPU"],
    features: [
      "Yüksek mekanik dayanım",
      "Fonksiyonel son kullanım parçaları",
      "Büyük boyutlu parça kapasitesi",
      "Düşük maliyet",
    ],
    specs: {
      "Katman Kalınlığı": "0.1 - 0.3 mm",
      "Yapı Hacmi": "500 x 500 x 500 mm",
      "Tolerans": "±0.2 mm",
    },
  },
  {
    id: "sla",
    name: "SLA",
    fullName: "Stereolithography",
    description: "Yüksek detay gerektiren reçine parçalar için hassas üretim çözümleri.",
    materials: ["Standard Resin", "Tough Resin", "Flexible Resin", "Castable Resin", "ABS Like"],
    features: [
      "Ultra yüksek detay",
      "Pürüzsüz yüzey kalitesi",
      "Döküm modelleri için ideal",
      "Hassas prototipleme",
    ],
    specs: {
      "Katman Kalınlığı": "0.025 - 0.1 mm",
      "Yapı Hacmi": "300 x 300 x 400 mm",
      "Tolerans": "±0.05 mm",
    },
  },
  {
    id: "sls",
    name: "SLS",
    fullName: "Selective Laser Sintering",
    description: "Karmaşık geometriler için destek yapısı gerektirmeyen toz bazlı üretim.",
    materials: ["PA12", "PA11", "TPU", "Glass-filled PA"],
    features: [
      "Destek yapısı gerektirmez",
      "Karmaşık geometriler",
      "Seri üretim kapasitesi",
      "Yüksek parça yoğunluğu",
    ],
    specs: {
      "Katman Kalınlığı": "0.06 - 0.12 mm",
      "Yapı Hacmi": "400 x 400 x 400 mm",
      "Tolerans": "±0.1 mm",
    },
  },
];

// SVG illustrations for each technology
const FDMIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Base plate */}
    <rect x="30" y="150" width="140" height="10" rx="2" className="fill-muted-foreground/20" />
    {/* Build platform */}
    <rect x="40" y="140" width="120" height="12" rx="1" className="fill-muted-foreground/30" />
    {/* Part being printed (layers) */}
    <rect x="60" y="120" width="80" height="5" className="fill-primary/40" />
    <rect x="60" y="115" width="80" height="5" className="fill-primary/50" />
    <rect x="60" y="110" width="80" height="5" className="fill-primary/60" />
    <rect x="60" y="105" width="80" height="5" className="fill-primary/70" />
    <rect x="60" y="100" width="80" height="5" className="fill-primary/80" />
    <rect x="60" y="95" width="80" height="5" className="fill-primary" />
    {/* Print head / extruder */}
    <rect x="55" y="60" width="30" height="35" rx="3" className="fill-foreground/80" />
    <rect x="62" y="75" width="16" height="20" className="fill-muted-foreground/50" />
    {/* Nozzle */}
    <path d="M65 95 L75 95 L70 105 Z" className="fill-primary" />
    {/* Filament spool */}
    <circle cx="160" cy="50" r="25" className="stroke-muted-foreground/40 fill-none" strokeWidth="8" />
    <circle cx="160" cy="50" r="10" className="fill-muted-foreground/30" />
    {/* Filament path */}
    <path d="M145 65 Q120 70, 70 70" className="stroke-primary" strokeWidth="2" strokeDasharray="4 2" />
    {/* Frame rails */}
    <rect x="20" y="40" width="8" height="130" rx="2" className="fill-muted-foreground/20" />
    <rect x="172" y="40" width="8" height="130" rx="2" className="fill-muted-foreground/20" />
    <rect x="20" y="35" width="160" height="8" rx="2" className="fill-muted-foreground/20" />
  </svg>
);

const SLAIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Resin tank */}
    <path d="M30 100 L30 160 Q30 170, 40 170 L160 170 Q170 170, 170 160 L170 100 Z" className="fill-cyan-500/20 stroke-muted-foreground/40" strokeWidth="2" />
    {/* Resin surface */}
    <rect x="35" y="100" width="130" height="5" className="fill-cyan-400/40" />
    {/* Laser beam */}
    <path d="M100 30 L100 100" className="stroke-violet-500" strokeWidth="3">
      <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
    </path>
    <circle cx="100" cy="100" r="6" className="fill-violet-500">
      <animate attributeName="r" values="4;8;4" dur="1.5s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite" />
    </circle>
    {/* Build platform coming up from resin */}
    <rect x="50" y="80" width="100" height="8" rx="2" className="fill-muted-foreground/40" />
    {/* Part being formed */}
    <rect x="60" y="88" width="80" height="12" rx="1" className="fill-primary/70" />
    {/* Z-axis rod */}
    <rect x="96" y="40" width="8" height="50" rx="1" className="fill-muted-foreground/30" />
    {/* Laser unit */}
    <rect x="75" y="20" width="50" height="20" rx="3" className="fill-foreground/80" />
    <circle cx="100" cy="35" r="5" className="fill-violet-500/50" />
    {/* Frame */}
    <rect x="20" y="15" width="160" height="5" rx="1" className="fill-muted-foreground/20" />
    <rect x="20" y="15" width="5" height="160" rx="1" className="fill-muted-foreground/20" />
    <rect x="175" y="15" width="5" height="160" rx="1" className="fill-muted-foreground/20" />
  </svg>
);

const SLSIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Powder bed chamber */}
    <rect x="25" y="80" width="150" height="90" rx="5" className="fill-muted-foreground/10 stroke-muted-foreground/30" strokeWidth="2" />
    {/* Powder surface */}
    <rect x="35" y="90" width="130" height="70" className="fill-amber-100/30" />
    {/* Sintered layers */}
    <rect x="60" y="110" width="80" height="8" className="fill-muted-foreground/40" />
    <rect x="65" y="118" width="70" height="8" className="fill-muted-foreground/50" />
    <rect x="70" y="126" width="60" height="8" className="fill-muted-foreground/60" />
    <rect x="75" y="134" width="50" height="8" className="fill-primary/70" />
    {/* Laser scanning */}
    <path d="M100 40 L80 100" className="stroke-red-500" strokeWidth="2">
      <animate attributeName="d" values="M100 40 L60 100;M100 40 L140 100;M100 40 L60 100" dur="2s" repeatCount="indefinite" />
    </path>
    {/* Laser source */}
    <rect x="80" y="25" width="40" height="20" rx="3" className="fill-foreground/80" />
    <circle cx="100" cy="40" r="4" className="fill-red-500">
      <animate attributeName="opacity" values="1;0.5;1" dur="0.5s" repeatCount="indefinite" />
    </circle>
    {/* Roller / Recoater */}
    <rect x="30" y="85" width="20" height="10" rx="2" className="fill-muted-foreground/50" />
    <circle cx="40" cy="95" r="3" className="fill-muted-foreground/70" />
    {/* Powder hoppers */}
    <path d="M20 80 L20 60 L35 60 L35 80 Z" className="fill-amber-200/40" />
    <path d="M165 80 L165 60 L180 60 L180 80 Z" className="fill-amber-200/40" />
    {/* Frame top */}
    <rect x="20" y="15" width="160" height="8" rx="2" className="fill-muted-foreground/20" />
    <rect x="20" y="15" width="8" height="160" rx="2" className="fill-muted-foreground/20" />
    <rect x="172" y="15" width="8" height="160" rx="2" className="fill-muted-foreground/20" />
  </svg>
);

const getIllustration = (id: string) => {
  switch (id) {
    case "fdm":
      return <FDMIllustration />;
    case "sla":
      return <SLAIllustration />;
    case "sls":
      return <SLSIllustration />;
    default:
      return <FDMIllustration />;
  }
};

const ProductionSection = () => {
  const [activeTab, setActiveTab] = useState("fdm");
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
  const { openQuoteModal } = useQuoteModal();
  const activeTech = technologies.find((t) => t.id === activeTab)!;

  return (
    <section id="uretim" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Teknolojiler</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Üretim Teknolojileri
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Her projenin kendine özgü gereksinimleri vardır. Malzeme seçiminden yüzey kalitesine, 
            mekanik dayanımdan üretim hızına kadar tüm kriterleri değerlendirerek size en uygun teknolojiyi öneriyoruz.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">24 Saat Numune Teslimat</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">Fonksiyonel Son Kullanım Parçaları</span>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          {technologies.map((tech) => (
            <button
              key={tech.id}
              onClick={() => setActiveTab(tech.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tech.id
                  ? "bg-primary text-primary-foreground shadow-elevated"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {tech.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-3xl border border-border overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              {/* Left - Illustration */}
              <div className="p-8 md:p-12 bg-muted/30 flex flex-col items-center justify-center gap-8">
                <div className="w-full max-w-md aspect-square">
                  {getIllustration(activeTab)}
                </div>
                
                {/* Real Examples Gallery */}
                {activeTab === "fdm" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full"
                  >
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 text-center">
                      FDM Üretim Örnekleri
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div 
                        className="rounded-xl overflow-hidden shadow-lg cursor-pointer"
                        onClick={() => setLightboxImage({ src: fdmPartsImage, alt: "FDM ile üretilmiş endüstriyel parçalar" })}
                      >
                        <img 
                          src={fdmPartsImage} 
                          alt="FDM ile üretilmiş endüstriyel parçalar" 
                          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div 
                        className="rounded-xl overflow-hidden shadow-lg cursor-pointer"
                        onClick={() => setLightboxImage({ src: fdmPrinterImage, alt: "FDM 3D yazıcı ile üretim" })}
                      >
                        <img 
                          src={fdmPrinterImage} 
                          alt="FDM 3D yazıcı ile üretim" 
                          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {activeTab === "sla" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full"
                  >
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 text-center">
                      SLA Üretim Örnekleri
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div 
                        className="rounded-xl overflow-hidden shadow-lg cursor-pointer"
                        onClick={() => setLightboxImage({ src: slaPartsImage, alt: "SLA ile üretilmiş yüksek detaylı reçine parçalar" })}
                      >
                        <img 
                          src={slaPartsImage} 
                          alt="SLA ile üretilmiş yüksek detaylı reçine parçalar" 
                          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div 
                        className="rounded-xl overflow-hidden shadow-lg cursor-pointer"
                        onClick={() => setLightboxImage({ src: slaPrinterImage, alt: "SLA 3D yazıcı UV lazer ile üretim" })}
                      >
                        <img 
                          src={slaPrinterImage} 
                          alt="SLA 3D yazıcı UV lazer ile üretim" 
                          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {activeTab === "sls" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full"
                  >
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 text-center">
                      SLS Üretim Örnekleri
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div 
                        className="rounded-xl overflow-hidden shadow-lg cursor-pointer"
                        onClick={() => setLightboxImage({ src: slsPartsImage, alt: "SLS ile üretilmiş karmaşık geometrili naylon parçalar" })}
                      >
                        <img 
                          src={slsPartsImage} 
                          alt="SLS ile üretilmiş karmaşık geometrili naylon parçalar" 
                          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div 
                        className="rounded-xl overflow-hidden shadow-lg cursor-pointer"
                        onClick={() => setLightboxImage({ src: slsPrinterImage, alt: "SLS 3D yazıcı lazer sinterleme" })}
                      >
                        <img 
                          src={slsPrinterImage} 
                          alt="SLS 3D yazıcı lazer sinterleme" 
                          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
              <div className="p-8 md:p-12">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground">{activeTech.name}</h3>
                  <p className="text-muted-foreground">{activeTech.fullName}</p>
                </div>

                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {activeTech.description}
                </p>

                {/* Materials */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                    Kullanılan Malzemeler
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeTech.materials.map((material) => (
                      <span
                        key={material}
                        className="px-3 py-1.5 bg-muted rounded-lg text-sm text-muted-foreground"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                    Özellikler
                  </h4>
                  <ul className="space-y-2">
                    {activeTech.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specs */}
                <div className="mb-8 p-4 bg-secondary/30 rounded-xl">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                    Teknik Özellikler
                  </h4>
                  <div className="space-y-3">
                    {Object.entries(activeTech.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-muted-foreground text-sm">{key}</span>
                        <span className="text-foreground font-semibold text-sm">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button hidden temporarily */}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <ImageLightbox
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
        imageSrc={lightboxImage?.src || ""}
        imageAlt={lightboxImage?.alt || ""}
      />
    </section>
  );
};

export default ProductionSection;
