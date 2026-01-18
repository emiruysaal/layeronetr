import { motion } from "framer-motion";

const partners = [
  "Siemens",
  "Dassault Systèmes",
  "ANSYS",
  "MATLAB",
  "Bambu Lab",
  "Creality",
  "Elegoo"
];

const BrandLogoStrip = () => {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Güvenilir Teknoloji Ortaklarımız
          </span>
          <div className="mt-3 mx-auto w-16 h-1 bg-primary rounded-full" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 md:gap-x-14 lg:gap-x-16"
        >
          {partners.map((partner, index) => (
            <motion.span
              key={partner}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              className="text-xl md:text-2xl font-bold text-slate-400 hover:text-slate-600 transition-colors duration-300 cursor-default select-none"
            >
              {partner}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandLogoStrip;
