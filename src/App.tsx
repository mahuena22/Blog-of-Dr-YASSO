import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import APropos from "./pages/APropos.tsx";
import Actualites from "./pages/Actualites.tsx";
import ContactPage from "./pages/Contact.tsx";
import Soutenir from "./pages/Soutenir.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/soutenir" element={<Soutenir />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
