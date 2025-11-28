import { TrendingDown, TrendingUp } from "lucide-react";

const ProblemFraming = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5" />
      
      <div className="container relative mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <TrendingDown className="h-6 w-6 text-red-500" />
                </div>
                <div className="text-5xl font-bold text-red-500">28-35%</div>
              </div>
              <p className="text-lg text-muted-foreground">
                Time sales reps spend actually selling
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                According to Salesforce's State of Sales
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Your team's problem isn't effort. It's how much of that effort is stuck in manual, repeatable work.
              </h2>
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Efficiency</h3>
                    <p className="text-muted-foreground">
                      Remove repetitive work, clean data, prepare context automatically.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Opportunity</h3>
                    <p className="text-muted-foreground">
                      Surface insights you couldn't see before — patterns in calls, win/loss drivers, message performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemFraming;
