import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuoteModalProvider } from "@/contexts/QuoteModalContext";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import DesignPage from "./pages/DesignPage";
import ProductionPage from "./pages/ProductionPage";
import AnalysisPage from "./pages/AnalysisPage";
import AcademyPage from "./pages/AcademyPage";
import KVKKPage from "./pages/KVKKPage";
import PrivacyPage from "./pages/PrivacyPage";
import ContactPage from "./pages/ContactPage";
import LayerTasarimPage from "./pages/LayerTasarimPage";
import LayerAnalizPage from "./pages/LayerAnalizPage";
import Layer3DPage from "./pages/Layer3DPage";
import LayerImalatPage from "./pages/LayerImalatPage";
import LayerAkademiPage from "./pages/LayerAkademiPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <QuoteModalProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/design" element={<DesignPage />} />
            <Route path="/production" element={<ProductionPage />} />
            <Route path="/analysis" element={<AnalysisPage />} />
            <Route path="/academy" element={<AcademyPage />} />
            <Route path="/kvkk" element={<KVKKPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/layer-tasarim" element={<LayerTasarimPage />} />
            <Route path="/layer-analiz" element={<LayerAnalizPage />} />
            <Route path="/layer-3d" element={<Layer3DPage />} />
            <Route path="/layer-imalat" element={<LayerImalatPage />} />
            <Route path="/layer-akademi" element={<LayerAkademiPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </QuoteModalProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
