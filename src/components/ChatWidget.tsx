import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useQuoteModal } from "@/contexts/QuoteModalContext";

interface Message {
  id: string;
  type: "bot" | "user";
  content: string;
  options?: Option[];
}

interface Option {
  id: string;
  label: string;
  icon: string;
  action: string;
}

const initialOptions: Option[] = [
  { id: "material", label: "Malzeme Seçici", icon: "🧪", action: "material" },
  { id: "tech", label: "Teknoloji Danışmanı", icon: "⚙️", action: "tech" },
  { id: "price", label: "Fiyat Tahmini", icon: "💰", action: "price" },
  { id: "academic", label: "Akademik Destek", icon: "🎓", action: "academic" },
];

const materialOptions: Option[] = [
  { id: "heat", label: "Yüksek Isı Dayanımı", icon: "🔥", action: "heat" },
  { id: "visual", label: "Görsel/Estetik", icon: "✨", action: "visual" },
  { id: "flex", label: "Esneklik", icon: "🔄", action: "flex" },
];

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatWidget = ({ isOpen, onClose }: ChatWidgetProps) => {
  const navigate = useNavigate();
  const { openQuoteModal } = useQuoteModal();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      type: "bot",
      content: "Merhaba! LayerOne mühendislik asistanı size nasıl yardımcı olabilir? Aşağıdaki konulardan birini seçebilirsiniz:",
      options: initialOptions,
    },
  ]);
  const [currentFlow, setCurrentFlow] = useState<string | null>(null);

  const addMessage = (type: "bot" | "user", content: string, options?: Option[]) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      options,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleOptionClick = (option: Option) => {
    // Add user message
    addMessage("user", `${option.icon} ${option.label}`);

    // Handle different flows
    switch (option.action) {
      case "material":
        setCurrentFlow("material");
        setTimeout(() => {
          addMessage("bot", "Projeniz için en kritik öncelik nedir?", materialOptions);
        }, 500);
        break;

      case "tech":
        setTimeout(() => {
          addMessage(
            "bot",
            "📌 **FDM:** Fonksiyonel parçalar ve prototipleme için ideal.\n\n📌 **SLA:** Pürüzsüz yüzeyler ve hassas detaylar için mükemmel.\n\n📌 **SLS:** Karmaşık geometriler ve dayanıklı parçalar için uygundur."
          );
          setTimeout(() => {
            addMessage("bot", "Başka bir konuda yardımcı olabilir miyim?", initialOptions);
          }, 1000);
        }, 500);
        break;

      case "price":
        setTimeout(() => {
          addMessage(
            "bot",
            "Fiyatlarımız parça hacmi, malzeme ve üretim teknolojisine göre değişmektedir. Kesin sonuç için 3D dosyanızı yükleyerek hızlıca teklif alabilirsiniz."
          );
          // Quote button hidden temporarily
        }, 500);
        break;

      case "academic":
        setTimeout(() => {
          addMessage(
            "bot",
            "🎓 Öğrenci ve akademisyenlere özel mentorluk, proje danışmanlığı ve uygun fiyatlı üretim desteğimiz bulunmaktadır."
          );
          setTimeout(() => {
            setMessages((prev) => [
              ...prev,
              {
                id: Date.now().toString(),
                type: "bot",
                content: "Akademi sayfamızı ziyaret etmek ister misiniz?",
                options: [{ id: "goAcademy", label: "Akademi Sayfası", icon: "🎓", action: "goAcademy" }],
              },
            ]);
          }, 800);
        }, 500);
        break;

      case "heat":
        setTimeout(() => {
          addMessage(
            "bot",
            "🔥 **Önerimiz: Carbon Fiber veya ASA**\n\nYüksek ısı dayanımı gerektiren uygulamalar için Carbon Fiber takviyeli filamentler veya ASA malzemesi idealdir. 150°C'ye kadar dayanıklılık sağlar."
          );
          setTimeout(() => {
            addMessage("bot", "Başka bir konuda yardımcı olabilir miyim?", initialOptions);
          }, 1000);
        }, 500);
        break;

      case "visual":
        setTimeout(() => {
          addMessage(
            "bot",
            "✨ **Önerimiz: SLA Reçine**\n\nGörsel kalite ve pürüzsüz yüzey için SLA teknolojisi ve reçine malzemeler en iyi sonucu verir. Detaylı figürler ve sunum modelleri için mükemmeldir."
          );
          setTimeout(() => {
            addMessage("bot", "Başka bir konuda yardımcı olabilir miyim?", initialOptions);
          }, 1000);
        }, 500);
        break;

      case "flex":
        setTimeout(() => {
          addMessage(
            "bot",
            "🔄 **Önerimiz: TPU veya TPE**\n\nEsnek parçalar için TPU (Termoplastik Poliüretan) veya TPE malzemeler kullanılır. Kauçuk benzeri esneklik ve dayanıklılık sağlar."
          );
          setTimeout(() => {
            addMessage("bot", "Başka bir konuda yardımcı olabilir miyim?", initialOptions);
          }, 1000);
        }, 500);
        break;

      case "openQuote":
        openQuoteModal();
        onClose();
        break;

      case "goAcademy":
        navigate("/academy");
        onClose();
        break;

      default:
        break;
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: "welcome",
        type: "bot",
        content: "Merhaba! LayerOne mühendislik asistanı size nasıl yardımcı olabilir? Aşağıdaki konulardan birini seçebilirsiniz:",
        options: initialOptions,
      },
    ]);
    setCurrentFlow(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] rounded-2xl shadow-2xl overflow-hidden border border-border/50"
        >
          {/* Header */}
          <div className="bg-[#0F172A] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                <span className="text-white text-sm">✨</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">LayerOne Asistan</h3>
                <span className="text-white/60 text-xs">Çevrimiçi</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={resetChat}
                className="text-white/60 hover:text-white transition-colors p-1"
                aria-label="Sohbeti sıfırla"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="text-white/60 hover:text-white transition-colors p-1"
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Body */}
          <div className="bg-white h-[400px] overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] ${
                    message.type === "user"
                      ? "bg-orange-50 border border-orange-300 text-orange-700 rounded-2xl rounded-br-md px-4 py-2"
                      : "bg-gray-100 text-gray-800 rounded-2xl rounded-bl-md px-4 py-3"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
                  
                  {/* Options */}
                  {message.options && message.options.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {message.options.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => handleOptionClick(option)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700 hover:bg-gray-50 hover:border-primary/50 hover:text-primary transition-all duration-200 shadow-sm"
                        >
                          <span>{option.icon}</span>
                          <span>{option.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Mesajınızı yazın..."
                className="flex-1 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                disabled
              />
              <Button size="icon" className="rounded-full" disabled>
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-400 text-center mt-2">
              Seçeneklerden birini seçerek devam edin
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatWidget;
