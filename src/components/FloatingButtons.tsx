import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import ChatWidget from "./ChatWidget";

const FloatingButtons = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const whatsappNumber = "905551234567"; // Telefon numaranızı buraya girin
  const whatsappMessage = "Merhaba, 3D baskı hizmetleriniz hakkında bilgi almak istiyorum.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleAIClick = () => {
    setIsChatOpen((prev) => !prev);
  };

  const buttons = [
    {
      id: "ai",
      icon: Sparkles,
      label: "AI Asistan",
      className: "bg-gradient-to-br from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700",
      href: undefined,
      onClick: handleAIClick,
    },
    {
      id: "whatsapp",
      icon: MessageCircle,
      label: "Whatsapp İletişim",
      className: "bg-whatsapp hover:bg-whatsapp/90",
      href: whatsappUrl,
      onClick: undefined,
    },
  ];

  return null; // Floating buttons hidden temporarily
};

export default FloatingButtons;