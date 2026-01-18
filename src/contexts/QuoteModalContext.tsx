import { createContext, useContext, useState, ReactNode } from "react";
import QuoteModal from "@/components/QuoteModal";

interface QuoteModalContextType {
  openQuoteModal: () => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export const useQuoteModal = () => {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  }
  return context;
};

interface QuoteModalProviderProps {
  children: ReactNode;
}

export const QuoteModalProvider = ({ children }: QuoteModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openQuoteModal = () => setIsOpen(true);
  const closeQuoteModal = () => setIsOpen(false);

  return (
    <QuoteModalContext.Provider value={{ openQuoteModal, closeQuoteModal }}>
      {children}
      <QuoteModal isOpen={isOpen} onClose={closeQuoteModal} />
    </QuoteModalContext.Provider>
  );
};
