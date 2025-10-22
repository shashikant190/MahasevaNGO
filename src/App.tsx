import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Campaigns from "./pages/Campaigns";
import CampaignEducation from "./pages/CampaignEducation";
import CampaignHealthcare from "./pages/CampaignHealthcare";
import Gallery from "./pages/Gallery";
import Volunteer from "./pages/Volunteer";
import CSR from "./pages/CSR";
import Contact from "./pages/Contact";
import Awards from "./pages/Awards";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/campaign/education" element={<CampaignEducation />} />
          <Route path="/campaign/healthcare" element={<CampaignHealthcare />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/csr" element={<CSR />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/awards" element={<Awards />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
