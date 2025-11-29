import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calculator, TrendingUp, Clock, DollarSign, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ROICta = () => {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-6">
              <Calculator className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-muted-foreground">ROI Calculator</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-normal tracking-tight mb-4">
              How much could you save?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-serif">
              Calculate the potential time and cost savings AI automation could bring to your team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <Card className="border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-md border border-border flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-medium font-mono">Time Savings</h3>
              </div>
              <p className="text-sm text-muted-foreground font-serif leading-relaxed">
                See how many hours your team could reclaim each month by automating repetitive tasks
              </p>
            </Card>

            <Card className="border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-md border border-border flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-medium font-mono">Cost Reduction</h3>
              </div>
              <p className="text-sm text-muted-foreground font-serif leading-relaxed">
                Calculate the operational cost savings based on your team size and hourly rates
              </p>
            </Card>

            <Card className="border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-md border border-border flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-medium font-mono">Custom Rates</h3>
              </div>
              <p className="text-sm text-muted-foreground font-serif leading-relaxed">
                Adjust automation rates based on your specific use cases and task types
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/roi-calculator">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 h-12 font-mono">
                Calculate your ROI
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICta;
