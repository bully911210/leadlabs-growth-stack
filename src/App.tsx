import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MetaAds from "./pages/MetaAds";
import WhatsAppAPI from "./pages/WhatsAppAPI";
import N8nAutomation from "./pages/N8nAutomation";
import AboutFranz from "./pages/AboutFranz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/meta-ads" element={<MetaAds />} />
          <Route path="/whatsapp-api" element={<WhatsAppAPI />} />
          <Route path="/n8n-automation" element={<N8nAutomation />} />
          <Route path="/about-franz" element={<AboutFranz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
