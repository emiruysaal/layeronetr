import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const values = [
  {
    title: "Yenilikçilik",
    description: "En son teknolojileri takip eder ve uygularız",
  },
  {
    title: "Kalite",
    description: "Her projede mükemmelliği hedefleriz",
  },
  {
    title: "İşbirliği",
    description: "Müşterilerimizle birlikte çözüm üretiriz",
  },
  {
    title: "Hız",
    description: "24 saat numune teslimat kapasitesi",
  },
];

const ValuesSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle radial gradient for depth - matching other sections */}
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Değerlerimiz
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Her projemizde bu değerleri yaşatıyoruz
          </p>
        </motion.div>

        {/* Values Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-primary/30 transition-all duration-300 hover:shadow-lg text-center h-full">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <CheckCircle2 className="w-12 h-12 text-primary" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
