import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useQuoteModal } from "@/contexts/QuoteModalContext";

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

const CTASection = ({ title, subtitle, buttonText }: CTASectionProps) => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="relative w-full py-16 md:py-20 bg-[#0F172A]">
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl">
            {subtitle}
          </p>
          
          {/* Button hidden temporarily */}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
