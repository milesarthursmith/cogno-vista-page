import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingUp, Clock, DollarSign } from "lucide-react";

const ROICalculator = () => {
  const [teamSize, setTeamSize] = useState(5);
  const [avgHourlyRate, setAvgHourlyRate] = useState(75);
  const [hoursPerWeekManual, setHoursPerWeekManual] = useState(15);
  const [automationPercent, setAutomationPercent] = useState(60);

  // Calculations
  const hoursAutomatedPerWeek = (hoursPerWeekManual * automationPercent) / 100;
  const totalHoursSavedPerWeek = hoursAutomatedPerWeek * teamSize;
  const totalHoursSavedPerMonth = totalHoursSavedPerWeek * 4.33;
  const totalHoursSavedPerYear = totalHoursSavedPerWeek * 52;
  
  const costSavingsPerMonth = totalHoursSavedPerMonth * avgHourlyRate;
  const costSavingsPerYear = totalHoursSavedPerYear * avgHourlyRate;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatHours = (value: number) => {
    return Math.round(value).toLocaleString();
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5" />
      
      <div className="container relative mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6 text-sm font-medium">
              <Calculator className="w-4 h-4" />
              ROI Calculator
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Calculate Your Potential Savings
            </h2>
            <p className="text-xl text-muted-foreground">
              See how much time and money AI automation could save your team
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <Card className="border border-border bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-8">Your Current Situation</h3>
              
              <div className="space-y-8">
                <div>
                  <Label htmlFor="teamSize" className="text-base font-semibold mb-3 block">
                    Team Size
                  </Label>
                  <div className="flex items-center gap-4">
                    <Input
                      id="teamSize"
                      type="number"
                      min="1"
                      max="100"
                      value={teamSize}
                      onChange={(e) => setTeamSize(Number(e.target.value))}
                      className="rounded-xl bg-background/50 border-border h-12"
                    />
                    <span className="text-muted-foreground whitespace-nowrap">people</span>
                  </div>
                </div>

                <div>
                  <Label htmlFor="hourlyRate" className="text-base font-semibold mb-3 block">
                    Average Hourly Rate
                  </Label>
                  <div className="flex items-center gap-4">
                    <div className="relative flex-1">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <Input
                        id="hourlyRate"
                        type="number"
                        min="10"
                        max="500"
                        value={avgHourlyRate}
                        onChange={(e) => setAvgHourlyRate(Number(e.target.value))}
                        className="rounded-xl bg-background/50 border-border h-12 pl-8"
                      />
                    </div>
                    <span className="text-muted-foreground whitespace-nowrap">per hour</span>
                  </div>
                </div>

                <div>
                  <Label htmlFor="manualHours" className="text-base font-semibold mb-3 block">
                    Hours Spent on Manual Tasks (per person/week)
                  </Label>
                  <div className="space-y-4">
                    <Slider
                      id="manualHours"
                      min={1}
                      max={40}
                      step={1}
                      value={[hoursPerWeekManual]}
                      onValueChange={([value]) => setHoursPerWeekManual(value)}
                      className="cursor-pointer"
                    />
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">1 hour</span>
                      <span className="text-primary font-semibold">{hoursPerWeekManual} hours</span>
                      <span className="text-muted-foreground">40 hours</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="automation" className="text-base font-semibold mb-3 block">
                    Expected Automation Rate
                  </Label>
                  <div className="space-y-4">
                    <Slider
                      id="automation"
                      min={10}
                      max={90}
                      step={5}
                      value={[automationPercent]}
                      onValueChange={([value]) => setAutomationPercent(value)}
                      className="cursor-pointer"
                    />
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">10%</span>
                      <span className="text-primary font-semibold">{automationPercent}%</span>
                      <span className="text-muted-foreground">90%</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Results Section */}
            <div className="space-y-6">
              <Card className="border border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg shadow-primary/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Time Savings</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-sm text-muted-foreground mb-2">Per Month</div>
                    <div className="text-4xl font-bold text-primary">
                      {formatHours(totalHoursSavedPerMonth)}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">hours saved</div>
                  </div>
                  
                  <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-sm text-muted-foreground mb-2">Per Year</div>
                    <div className="text-4xl font-bold text-primary">
                      {formatHours(totalHoursSavedPerYear)}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">hours saved</div>
                  </div>
                </div>
              </Card>

              <Card className="border border-primary/30 bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg shadow-accent/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold">Cost Savings</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-sm text-muted-foreground mb-2">Per Month</div>
                    <div className="text-4xl font-bold text-accent">
                      {formatCurrency(costSavingsPerMonth)}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">saved</div>
                  </div>
                  
                  <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-sm text-muted-foreground mb-2">Per Year</div>
                    <div className="text-4xl font-bold text-accent">
                      {formatCurrency(costSavingsPerYear)}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">saved</div>
                  </div>
                </div>
              </Card>

              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Based on your inputs:</strong> Your team could save approximately{" "}
                    <span className="text-primary font-semibold">{formatHours(totalHoursSavedPerWeek)} hours per week</span>{" "}
                    and reduce operational costs by{" "}
                    <span className="text-accent font-semibold">{formatCurrency(costSavingsPerMonth)} per month</span>.
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

export default ROICalculator;
