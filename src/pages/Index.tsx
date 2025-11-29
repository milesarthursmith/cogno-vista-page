import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AuditCta from "@/components/AuditCta";
import Positioning from "@/components/Positioning";
import Credibility from "@/components/Credibility";
import Services from "@/components/Services";
import ProblemFraming from "@/components/ProblemFraming";
import ROICta from "@/components/ROICta";
import HowItWorks from "@/components/HowItWorks";
import Approach from "@/components/Approach";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen">
      <Header />
      <Hero />
      <AuditCta />
      
      <Credibility />
      <Services />
      <ProblemFraming />
      <ROICta />
      <HowItWorks />
      <Approach />
      
      <Contact />
      <Footer />
    </div>;
};
export default Index;