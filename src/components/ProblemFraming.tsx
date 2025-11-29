import { TrendingDown, TrendingUp } from "lucide-react";

const ProblemFraming = () => {
  return (
    <section className="py-24 bg-background">
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
                Your team's problem isn't effort. It's how much of that effort is stuck in manual, repeatable work.
              </h2>
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif font-medium text-lg mb-2">Efficiency</h3>
                    <p className="text-muted-foreground font-serif">
                      Remove repetitive work, clean data, prepare context automatically.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif font-medium text-lg mb-2">Opportunity</h3>
                    <p className="text-muted-foreground font-serif">
                      Surface insights you couldn't see before — patterns in calls, win/loss drivers, message performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-red-50 flex items-center justify-center">
                    <TrendingDown className="h-5 w-5 text-red-600" />
                  </div>
                  <div className="text-4xl font-serif font-medium text-red-600">28-35%</div>
                </div>
                <p className="text-muted-foreground font-serif">
                  Time sales reps spend actually selling
                </p>
                <p className="text-sm text-muted-foreground mt-2 font-serif">
                  According to Salesforce's State of Sales
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-red-50 flex items-center justify-center">
                    <TrendingDown className="h-5 w-5 text-red-600" />
                  </div>
                  <div className="text-4xl font-serif font-medium text-red-600">40%</div>
                </div>
                <p className="text-muted-foreground font-serif">
                  Time marketers spend on administrative tasks
                </p>
                <p className="text-sm text-muted-foreground mt-2 font-serif">
                  According to HubSpot's Marketing Statistics
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-red-50 flex items-center justify-center">
                    <TrendingDown className="h-5 w-5 text-red-600" />
                  </div>
                  <div className="text-4xl font-serif font-medium text-red-600">60%</div>
                </div>
                <p className="text-muted-foreground font-serif">
                  Time operations teams spend on manual data work
                </p>
                <p className="text-sm text-muted-foreground mt-2 font-serif">
                  According to McKinsey Global Institute
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemFraming;
