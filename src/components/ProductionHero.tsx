import { motion } from "framer-motion";
import productionHeroImage from "@/assets/production-hero.png";

const ProductionHero = () => {
  return (
    <section className="bg-background relative overflow-hidden">
      {/* Full-width Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]"
      >
        <img
          src={productionHeroImage}
          alt="3D Baskı Üretim Tesisi"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
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
            Layer 3D
          </motion.span>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Endüstriyel 3D Baskı Çözümleri
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Prototipten seri üretime, tek parçadan toplu siparişe kadar her ölçekte 
            katmanlı imalat hizmeti. Projeleriniz için doğru teknolojiyi birlikte belirleyelim.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ProductionHero;
