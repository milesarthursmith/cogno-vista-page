import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AgentExamples from "./pages/AgentExamples";
import ROICalculatorPage from "./pages/ROICalculatorPage";
import QuizPage from "./pages/QuizPage";
import CaseStudies from "./pages/CaseStudies";
import WinLossInsights from "./pages/case-studies/WinLossInsights";
import ReEngagement from "./pages/case-studies/ReEngagement";
import MessageIntelligence from "./pages/case-studies/MessageIntelligence";
import ContentSummarization from "./pages/case-studies/ContentSummarization";
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
          <Route path="/agents" element={<AgentExamples />} />
          <Route path="/roi-calculator" element={<ROICalculatorPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/win-loss-insights" element={<WinLossInsights />} />
          <Route path="/case-studies/re-engagement" element={<ReEngagement />} />
          <Route path="/case-studies/message-intelligence" element={<MessageIntelligence />} />
          <Route path="/case-studies/content-summarization" element={<ContentSummarization />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
