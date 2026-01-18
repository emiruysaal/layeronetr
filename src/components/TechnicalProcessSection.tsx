import { motion } from "framer-motion";
import processDesign from "@/assets/process-design.jpg";
import processAnalysis from "@/assets/process-analysis.jpg";
import processProduction from "@/assets/process-production.jpg";

const processes = [
  {
    title: "DfAM Odaklı Tasarım",
    description: "CAD verilerinin katmanlı imalat kısıtlarına göre optimize edilmesi (DfAM) ve topoloji optimizasyonu ile ağırlık/dayanım dengesinin mükemmelleştirilmesi.",
    image: processDesign,
    imageAlt: "CAD Modeling and Engineering Design"
  },
  {
    title: "Sanal Doğrulama (FEA/CFD)",
    description: "Üretim öncesi sanal ortamda yapısal ve termal analizler (CAE) uygulanarak risklerin minimize edilmesi ve tasarımın mühendislik doğruluğunun kanıtlanması.",
    image: processAnalysis,
    imageAlt: "FEA Simulation and Stress Analysis"
  },
  {
    title: "Hassas Katmanlı İmalat",
    description: "Endüstriyel sistemlerle mikron seviyesinde boyutsal doğruluk (±0.1mm), izotropik yapı ve yüksek mekanik dayanıma sahip son kullanım parçalarının üretimi.",
    image: processProduction,
    imageAlt: "Industrial 3D Printing Process"
  }
];

const TechnicalProcessSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Mühendislik Yaklaşımımız
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Tasarımdan üretime kadar her aşamada mühendislik mükemmelliği
          </p>
        </motion.div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {processes.map((process, index) => (
            <motion.div
              key={process.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img 
                  src={process.image} 
                  alt={process.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Content */}
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {process.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalProcessSection;
