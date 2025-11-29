import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, Clock, DollarSign, ArrowRight, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ROICalculatorPage = () => {
  const [teamSize, setTeamSize] = useState(5);
  const [avgHourlyRate, setAvgHourlyRate] = useState(75);
  const [hoursPerWeekManual, setHoursPerWeekManual] = useState(15);
  const [automationPercent, setAutomationPercent] = useState(60);

  // Calculations
  const hoursAutomatedPerWeek = hoursPerWeekManual * automationPercent / 100;
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
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatHours = (value: number) => {
    return Math.round(value).toLocaleString();
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-24 pt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border text-muted-foreground mb-6 text-sm">
                <Calculator className="w-4 h-4" />
                ROI Calculator
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight mb-4">
                Calculate Your Potential Savings
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-serif">
                See how much time and money AI automation could save your team
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Input Section */}
              <Card className="border border-border bg-card p-8">
                <h2 className="text-xl font-medium mb-8 font-mono">Your Current Situation</h2>
                
                <div className="space-y-8">
                  <div>
                    <Label htmlFor="teamSize" className="text-sm font-medium mb-2 block font-mono">
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
                        className="h-11"
                      />
                      <span className="text-muted-foreground whitespace-nowrap text-sm font-mono">people</span>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="hourlyRate" className="text-sm font-medium mb-2 block font-mono">
                      Average Hourly Rate
                    </Label>
                    <div className="flex items-center gap-4">
                      <div className="relative flex-1">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
                        <Input
                          id="hourlyRate"
                          type="number"
                          min="10"
                          max="500"
                          value={avgHourlyRate}
                          onChange={(e) => setAvgHourlyRate(Number(e.target.value))}
                          className="h-11 pl-7"
                        />
                      </div>
                      <span className="text-muted-foreground whitespace-nowrap text-sm font-mono">per hour</span>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="manualHours" className="text-sm font-medium mb-2 block font-mono">
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
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">1 hour</span>
                        <span className="text-foreground font-medium">{hoursPerWeekManual} hours</span>
                        <span className="text-muted-foreground font-mono">40 hours</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="automation" className="text-sm font-medium mb-2 block font-mono">
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
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">10%</span>
                        <span className="text-foreground font-medium">{automationPercent}%</span>
                        <span className="text-muted-foreground">90%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Results Section */}
              <div className="space-y-6">
                <Card className="border border-border bg-card p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-md border border-border flex items-center justify-center">
                      <Clock className="h-5 w-5 text-foreground" />
                    </div>
                    <h2 className="text-xl font-medium font-mono">Time Savings</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="border border-border rounded-md p-5">
                      <div className="text-xs text-muted-foreground mb-2">Per Month</div>
                      <div className="text-3xl font-semibold text-foreground">
                        {formatHours(totalHoursSavedPerMonth)}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">hours saved</div>
                    </div>
                    
                    <div className="border border-border rounded-md p-5">
                      <div className="text-xs text-muted-foreground mb-2">Per Year</div>
                      <div className="text-3xl font-semibold text-foreground">
                        {formatHours(totalHoursSavedPerYear)}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">hours saved</div>
                    </div>
                  </div>
                </Card>

                <Card className="border border-border bg-card p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-md border border-border flex items-center justify-center">
                      <DollarSign className="h-5 w-5 text-foreground" />
                    </div>
                    <h2 className="text-xl font-medium font-mono">Cost Savings</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="border border-border rounded-md p-5">
                      <div className="text-xs text-muted-foreground mb-2">Per Month</div>
                      <div className="text-3xl font-semibold text-foreground">
                        {formatCurrency(costSavingsPerMonth)}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">saved</div>
                    </div>
                    
                    <div className="border border-border rounded-md p-5">
                      <div className="text-xs text-muted-foreground mb-2">Per Year</div>
                      <div className="text-3xl font-semibold text-foreground">
                        {formatCurrency(costSavingsPerYear)}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">saved</div>
                    </div>
                  </div>
                </Card>

                <div className="bg-muted/30 border border-border rounded-md p-5">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-muted-foreground leading-relaxed font-serif">
                      <strong className="text-foreground">Based on your inputs:</strong> Your team could save approximately{" "}
                      <span className="text-foreground font-medium">{formatHours(totalHoursSavedPerWeek)} hours per week</span>{" "}
                      and reduce operational costs by{" "}
                      <span className="text-foreground font-medium">{formatCurrency(costSavingsPerMonth)} per month</span>.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Automation Rates Detail Section */}
            <Card className="border border-border bg-card p-8 mb-12">
              <h2 className="text-2xl font-serif font-normal mb-6">Typical Automation Rates by Task Type</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h3 className="font-medium font-mono mb-1">Data Entry & Reporting</h3>
                    <p className="text-sm text-muted-foreground font-serif mb-2">70-90% automation rate</p>
                    <p className="text-xs text-muted-foreground font-serif leading-relaxed">
                      Automated data extraction, transformation, and reporting workflows eliminate manual spreadsheet work and generate insights in real-time.
                    </p>
                  </div>

                  <div className="border-l-2 border-primary pl-4">
                    <h3 className="font-medium font-mono mb-1">Email Triage & Responses</h3>
                    <p className="text-sm text-muted-foreground font-serif mb-2">50-70% automation rate</p>
                    <p className="text-xs text-muted-foreground font-serif leading-relaxed">
                      AI-powered email classification, routing, and template-based responses handle routine inquiries while escalating complex cases.
                    </p>
                  </div>

                  <div className="border-l-2 border-primary pl-4">
                    <h3 className="font-medium font-mono mb-1">Lead Qualification & Outreach</h3>
                    <p className="text-sm text-muted-foreground font-serif mb-2">60-80% automation rate</p>
                    <p className="text-xs text-muted-foreground font-serif leading-relaxed">
                      Automated lead scoring, enrichment, and personalized outreach sequences allow sales teams to focus on high-value conversations.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h3 className="font-medium font-mono mb-1">Research & Analysis</h3>
                    <p className="text-sm text-muted-foreground font-serif mb-2">40-60% automation rate</p>
                    <p className="text-xs text-muted-foreground font-serif leading-relaxed">
                      AI agents gather market intelligence, competitor analysis, and customer insights, compiling structured reports for decision-making.
                    </p>
                  </div>

                  <div className="border-l-2 border-primary pl-4">
                    <h3 className="font-medium font-mono mb-1">Content Review & QA</h3>
                    <p className="text-sm text-muted-foreground font-serif mb-2">30-50% automation rate</p>
                    <p className="text-xs text-muted-foreground font-serif leading-relaxed">
                      Automated content checking for brand consistency, grammar, compliance, and quality standards speeds up review cycles.
                    </p>
                  </div>

                  <div className="border-l-2 border-primary pl-4">
                    <h3 className="font-medium font-mono mb-1">Meeting Scheduling & Coordination</h3>
                    <p className="text-sm text-muted-foreground font-serif mb-2">80-95% automation rate</p>
                    <p className="text-xs text-muted-foreground font-serif leading-relaxed">
                      Smart scheduling agents handle availability checking, meeting coordination, and calendar management across time zones.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* CTA Section */}
            <Card className="border border-primary/20 bg-gradient-to-br from-card to-muted/20 p-8 md:p-12 text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl font-serif font-normal mb-4">Ready to unlock these savings?</h2>
              <p className="text-muted-foreground font-serif mb-8 max-w-2xl mx-auto">
                Book a 15-minute consultation to discuss your specific automation needs and get a custom implementation plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 h-12 font-mono">
                  Book a call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link to="/#contact">
                  <Button size="lg" variant="outline" className="rounded-lg px-8 h-12 border-border hover:bg-secondary font-mono w-full sm:w-auto">
                    Contact us
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ROICalculatorPage;
