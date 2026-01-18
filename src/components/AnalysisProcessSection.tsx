import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Kapsam",
    description: "Problem tanımı",
  },
  {
    step: "02",
    title: "Modelleme",
    description: "Geometri ve mesh",
  },
  {
    step: "03",
    title: "Kurulum",
    description: "Sınır koşulları",
  },
  {
    step: "04",
    title: "Çözüm",
    description: "Simülasyon",
  },
  {
    step: "05",
    title: "Raporlama",
    description: "Sonuç analizi",
  },
];

const AnalysisProcessSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Analiz Sürecimiz
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center flex-1"
            >
              {/* Card */}
              <div className="flex-1 bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg text-center">
                {/* Step Number */}
                <div className="text-primary font-bold text-lg mb-2">{step.step}</div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-1">{step.title}</h3>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>

              {/* Arrow (except last) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center px-2">
                  <ArrowRight className="w-5 h-5 text-muted-foreground" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalysisProcessSection;
