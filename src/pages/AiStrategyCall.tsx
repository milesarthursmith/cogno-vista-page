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

      <section className="py-24 pt-32 relative z-10">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-normal mb-3">
              AI Strategy Call
            </h1>
            <p className="text-sm md:text-base text-muted-foreground font-serif">
              Choose a time that suits you for a 30-minute session to review
              your workflows, identify AI opportunities, and outline next steps.
            </p>
          </div>

          <Card className="border border-border p-4 md:p-6">
            <div
              className="calendly-inline-widget"
              data-url={CALENDLY_URL}
              style={{ minWidth: 320, height: 700 }}
            />
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiStrategyCallPage;
