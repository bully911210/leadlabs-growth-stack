import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "@/components/ScrollToTop";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const MetaAds = lazy(() => import("./pages/MetaAds"));
const WhatsAppAPI = lazy(() => import("./pages/WhatsAppAPI"));
const N8nAutomation = lazy(() => import("./pages/N8nAutomation"));
const AboutFranz = lazy(() => import("./pages/AboutFranz"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse text-center">
      <div className="text-4xl font-dm-sans font-bold text-gradient mb-4">LeadLabs</div>
      <div className="text-muted-foreground">Loading...</div>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/meta-ads" element={<MetaAds />} />
            <Route path="/whatsapp-api" element={<WhatsAppAPI />} />
            <Route path="/n8n-automation" element={<N8nAutomation />} />
            <Route path="/about-franz" element={<AboutFranz />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
