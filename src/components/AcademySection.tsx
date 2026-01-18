import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users, Award, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const services = [
  {
    icon: Award,
    title: "TÜBİTAK Mentörlüğü",
    description: "TÜBİTAK proje başvurularınızda teknik danışmanlık ve mentorluk desteği.",
  },
  {
    icon: BookOpen,
    title: "Tez Danışmanlığı",
    description: "Katmanlı imalat alanında lisans ve yüksek lisans tez danışmanlığı.",
  },
  {
    icon: Users,
    title: "Akademik Workshop'lar",
    description: "Üniversiteler ve araştırma merkezleri için uygulamalı eğitim programları.",
  },
  {
    icon: GraduationCap,
    title: "Know-How Transferi",
    description: "Endüstri 4.0 ve katmanlı imalat konularında bilgi ve deneyim aktarımı.",
  },
];

const AcademySection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    topic: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Başvurunuz alındı! En kısa sürede size dönüş yapacağız.");
    setFormData({ name: "", email: "", institution: "", topic: "", message: "" });
  };

  return (
    <section id="akademi" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Hizmetler</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Eğitim & Danışmanlık
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Akademik dünyaya katkı sağlıyor, know-how transferi ile 
            geleceğin mühendislerini yetiştiriyoruz.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elevated text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          id="iletisim"
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Akademik İşbirliği İçin Bize Ulaşın
              </h3>
              <p className="text-muted-foreground">
                Öğrenci, araştırmacı veya akademisyen olarak projeleriniz için destek alın.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="ornek@universite.edu.tr"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Kurum
                  </label>
                  <input
                    type="text"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Üniversite / Araştırma Merkezi"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Konu
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  >
                    <option value="">Konu Seçin</option>
                    <option value="tubitak">TÜBİTAK Mentörlüğü</option>
                    <option value="thesis">Tez Danışmanlığı</option>
                    <option value="workshop">Workshop Talebi</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mesajınız *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                  placeholder="Projeniz veya işbirliği talebiniz hakkında kısa bilgi verin..."
                />
              </div>

              {/* Button hidden temporarily */}

              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p>Başvurunuz 24 saat içinde değerlendirilecek ve size dönüş yapılacaktır.</p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademySection;
