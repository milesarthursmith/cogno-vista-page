import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AbstractBackground from "@/components/AbstractBackground";
import { Card } from "@/components/ui/card";

const CALENDLY_URL =
  "https://calendly.com/hello-humanstuff/30min?hide_event_type_details=1";

const AiStrategyCallPage = () => {
  useEffect(() => {
    const scriptId = "calendly-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen relative">
      <AbstractBackground />
      <Header />

      <section className="py-16 pt-28 relative z-10 pb-0">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-serif font-normal mb-3">
              AI Strategy Call
            </h1>
            <p className="text-sm md:text-base text-muted-foreground font-serif">
              Choose a time that suits you for a 30-minute session to review
              your workflows, identify AI opportunities, and outline next steps.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
            <div
              className="calendly-inline-widget"
              data-url={CALENDLY_URL}
              style={{ minWidth: '320px', height: '700px', width: '100%' }}
            />
          </div>
        </div>
      </section>

      <Footer />
      
      <style>{`
        .calendly-inline-widget,
        .calendly-inline-widget iframe {
          width: 100% !important;
          border: none !important;
        }
        
        .calendly-inline-widget iframe {
          overflow: hidden !important;
        }
        
        @media (max-width: 768px) {
          .calendly-inline-widget {
            height: 800px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AiStrategyCallPage;
