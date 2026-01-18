import { Mail, MapPin, Phone, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Hakkında", href: "/about" },
    { name: "Tasarım", href: "/design" },
    { name: "3D Üretim", href: "/production" },
    { name: "Analiz", href: "/analysis" },
    { name: "Akademi", href: "/academy" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/layeronetr/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/layeronetr", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/layeronetr", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@layeronetr", label: "YouTube" },
  ];

  return (
    <footer id="iletisim" className="bg-secondary text-secondary-foreground">
      {/* Email Contact Box */}
      <div className="bg-gradient-to-r from-primary via-primary to-primary/90 py-8 md:py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center backdrop-blur-sm">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-primary-foreground">
                <p className="text-sm font-medium opacity-80">Bize Ulaşın</p>
                <a 
                  href="mailto:info@layeronetr.com"
                  className="text-xl md:text-2xl font-bold hover:opacity-90 transition-opacity tracking-wide"
                >
                  info@layeronetr.com
                </a>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-primary-foreground/20" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center backdrop-blur-sm">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-primary-foreground">
                <p className="text-sm font-medium opacity-80">Hemen Arayın</p>
                <a 
                  href="tel:+905458898010"
                  className="text-xl md:text-2xl font-bold hover:opacity-90 transition-opacity tracking-wide"
                >
                  +90 545 889 8010
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold">
                Layer<span className="text-primary">One</span>
              </span>
            </Link>
            <p className="text-secondary-foreground/70 mb-6 leading-relaxed">
              Mühendislikten üretime bütünleşik çözümler. Tasarım, analiz ve 
              katmanlı imalat teknolojileri ile endüstriyel dönüşümün parçası olun.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Hızlı Erişim</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Hizmetler</h4>
            <ul className="space-y-3 text-secondary-foreground/70">
              <li>Tersine Mühendislik</li>
              <li>DfAM Danışmanlık</li>
              <li>FDM / SLA / SLS Üretim</li>
              <li>Yapısal Analiz</li>
              <li>CFD Simülasyon</li>
              <li>Akademik İşbirliği</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a 
                  href="https://maps.app.goo.gl/tqR4joNPKof1dwFY7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  Alaaddinbey Mahallesi, Nilüfer/ Bursa<br />
                  Türkiye
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+905458898010" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  +90 545 889 8010
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@layeronetr.com" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  info@layeronetr.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/50">
            © {currentYear} LayerOne. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-sm text-secondary-foreground/50">
            <Link to="/kvkk" className="hover:text-primary transition-colors">KVKK Aydınlatma Metni</Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">Gizlilik Politikası</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
