import { motion } from "framer-motion";
import workshopImage from "@/assets/layerone-workshop.png";

const AboutHero = () => {
  return (
    <section className="bg-white relative overflow-hidden">
      {/* Full-width Workshop Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]"
      >
        <img
          src={workshopImage}
          alt="LayerOne Üretim Atölyesi"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
      </motion.div>

      {/* Text Content - Below Image */}
      <div className="container mx-auto px-4 py-12 md:py-16 -mt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 inline-block"
          >
            Hakkında
          </motion.span>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            Mühendislik ve İnovasyon
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed"
          >
            LayerOne olarak, tasarımdan üretime kadar tüm süreçleri kapsayan entegre mühendislik çözümleri sunuyoruz. 5 katmanlı ekosistemimizle endüstriyel dönüşümünüzü hızlandırıyoruz.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
