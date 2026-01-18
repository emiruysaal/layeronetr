import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import layeroneLogo from "@/assets/layerone-logo-full.png";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Animated Logo Section */}
          <div className="flex flex-col items-center justify-center mb-16 relative">
            {/* Floating particles background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-primary/20"
                  style={{
                    left: `${15 + i * 15}%`,
                    top: `${20 + (i % 3) * 25}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Glowing ring effect */}
            <motion.div
              className="absolute w-[420px] h-[200px] rounded-full"
              style={{
                background: "radial-gradient(ellipse, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Main logo container */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, rotateX: -90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ 
                duration: 1, 
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Shadow/reflection effect */}
              <motion.div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-64 h-4 rounded-full bg-foreground/10 blur-md"
                initial={{ opacity: 0, scaleX: 0.5 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />

              {/* Logo with float animation */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.img
                  src={layeroneLogo}
                  alt="LayerOne - 3D İmalat & Prototipleme"
                  className="w-80 md:w-[420px] h-auto mix-blend-multiply"
                  initial={{ scale: 0.8, filter: "blur(10px)" }}
                  animate={{ scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 pointer-events-none"
                initial={{ x: "-200%" }}
                animate={{ x: "200%" }}
                transition={{
                  duration: 2,
                  delay: 1,
                  repeat: Infinity,
                  repeatDelay: 5,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>

          {/* Contact Information */}
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              İletişim Bilgileri
            </h1>

            <div className="space-y-8">
              {/* Address */}
              <motion.div
                className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl border border-border/50"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Adres</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    NİLTİM Alaaddinbey Mah. 626. Sk. No:7/A<br />
                    Zer7 Plaza Kat:2 No:28<br />
                    16120 Nilüfer/Bursa
                  </p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.a
                href="tel:+905458898010"
                className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl border border-border/50 block"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Telefon</h3>
                  <p className="text-muted-foreground">+90 545 889 8010</p>
                </div>
              </motion.a>

              {/* Emails */}
              <div className="grid md:grid-cols-2 gap-4">
                <motion.a
                  href="mailto:info@layeronetr.com"
                  className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl border border-border/50 block"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Destek</h3>
                    <p className="text-muted-foreground text-sm">info@layeronetr.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:sales@layeronetr.com"
                  className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl border border-border/50 block"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Satış</h3>
                    <p className="text-muted-foreground text-sm">sales@layeronetr.com</p>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
