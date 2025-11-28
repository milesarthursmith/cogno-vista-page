import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Positioning from "@/components/Positioning";
import Credibility from "@/components/Credibility";
import Services from "@/components/Services";
import ProblemFraming from "@/components/ProblemFraming";
import HowItWorks from "@/components/HowItWorks";
import Approach from "@/components/Approach";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Positioning />
      <Credibility />
      <Services />
      <ProblemFraming />
      <HowItWorks />
      <Approach />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
