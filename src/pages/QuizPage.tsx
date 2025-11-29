import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft, CheckCircle, Loader2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

type QuizStep = {
  question: string;
  options: { value: string; label: string; points: number }[];
};

const quizSteps: QuizStep[] = [
  {
    question: "How many people are on your team?",
    options: [
      { value: "1-5", label: "1-5 people", points: 20 },
      { value: "6-15", label: "6-15 people", points: 40 },
      { value: "16-50", label: "16-50 people", points: 60 },
      { value: "50+", label: "50+ people", points: 80 },
    ],
  },
  {
    question: "How many hours per week does your team spend on repetitive manual tasks?",
    options: [
      { value: "0-5", label: "0-5 hours", points: 20 },
      { value: "5-15", label: "5-15 hours", points: 40 },
      { value: "15-30", label: "15-30 hours", points: 70 },
      { value: "30+", label: "30+ hours", points: 90 },
    ],
  },
  {
    question: "How would you describe your current tech stack and integration capabilities?",
    options: [
      { value: "basic", label: "Basic - mostly manual tools", points: 20 },
      { value: "moderate", label: "Moderate - some connected tools", points: 50 },
      { value: "advanced", label: "Advanced - well-integrated systems", points: 80 },
      { value: "enterprise", label: "Enterprise - comprehensive tech stack", points: 100 },
    ],
  },
  {
    question: "How well documented are your current processes?",
    options: [
      { value: "none", label: "Not documented", points: 20 },
      { value: "some", label: "Some key processes documented", points: 50 },
      { value: "most", label: "Most processes documented", points: 80 },
      { value: "all", label: "Fully documented with SOPs", points: 100 },
    ],
  },
  {
    question: "What's your budget readiness for automation investment?",
    options: [
      { value: "exploring", label: "Just exploring options", points: 20 },
      { value: "small", label: "Small pilot budget available", points: 50 },
      { value: "medium", label: "Medium budget approved", points: 80 },
      { value: "large", label: "Significant budget allocated", points: 100 },
    ],
  },
  {
    question: "What's your timeline for implementation?",
    options: [
      { value: "researching", label: "Still researching (6+ months)", points: 20 },
      { value: "planning", label: "Planning phase (3-6 months)", points: 50 },
      { value: "ready", label: "Ready soon (1-3 months)", points: 80 },
      { value: "urgent", label: "Need to start immediately", points: 100 },
    ],
  },
];

const QuizPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [email, setEmail] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [showEmailGate, setShowEmailGate] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentStep]: value });
  };

  const calculateScore = () => {
    let totalPoints = 0;
    Object.entries(answers).forEach(([stepIndex, answer]) => {
      const step = quizSteps[parseInt(stepIndex)];
      const option = step.options.find((opt) => opt.value === answer);
      if (option) totalPoints += option.points;
    });
    return Math.round((totalPoints / 600) * 100);
  };

  const handleNext = () => {
    if (currentStep < quizSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowEmailGate(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmitEmail = async () => {
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const score = calculateScore();
      
      // Store quiz response
      const { error: dbError } = await supabase.from("quiz_responses").insert({
        email,
        team_size: parseInt(answers[0].split("-")[0]) || 0,
        manual_hours_per_week: parseInt(answers[1].split("-")[0]) || 0,
        tech_stack_maturity: answers[2],
        process_documentation: answers[3],
        budget_readiness: answers[4],
        timeline: answers[5],
        readiness_score: score,
      });

      if (dbError) throw dbError;

      // Send results email
      const { error: emailError } = await supabase.functions.invoke("send-quiz-results", {
        body: { email, score, answers },
      });

      if (emailError) throw emailError;

      setShowResults(true);
      toast({
        title: "Success!",
        description: "Check your email for detailed results and recommendations.",
      });
    } catch (error: any) {
      console.error("Error submitting quiz:", error);
      toast({
        title: "Error",
        description: "Failed to submit quiz. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const score = calculateScore();
  const progress = ((currentStep + 1) / quizSteps.length) * 100;
  const currentQuestion = quizSteps[currentStep];

  const getScoreLevel = (score: number) => {
    if (score >= 80) return { level: "Highly Ready", color: "text-green-600" };
    if (score >= 60) return { level: "Ready", color: "text-blue-600" };
    if (score >= 40) return { level: "Moderately Ready", color: "text-yellow-600" };
    return { level: "Early Stage", color: "text-orange-600" };
  };

  if (showResults) {
    const scoreLevel = getScoreLevel(score);
    return (
      <div className="min-h-screen">
        <Header />
        <section className="py-24 pt-32">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <CheckCircle className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h1 className="text-4xl md:text-5xl font-serif font-normal mb-4">
                Your Results Are On The Way!
              </h1>
              <p className="text-lg text-muted-foreground font-serif mb-8">
                We've sent a detailed breakdown to <strong>{email}</strong> with personalized recommendations based on your readiness score.
              </p>

              <Card className="border border-border p-8 mb-8">
                <div className="mb-4">
                  <div className="text-6xl font-bold mb-2">{score}%</div>
                  <div className={`text-2xl font-serif ${scoreLevel.color}`}>
                    {scoreLevel.level}
                  </div>
                </div>
                <p className="text-muted-foreground font-serif">
                  Check your email for your complete automation readiness report including specific use cases and next steps.
                </p>
              </Card>

              <Button
                size="lg"
                onClick={() => (window.location.href = "/#contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 h-12 font-mono"
              >
                Book a consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (showEmailGate) {
    const scoreLevel = getScoreLevel(score);
    return (
      <div className="min-h-screen">
        <Header />
        <section className="py-24 pt-32">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <Card className="border border-border p-8 text-center mb-8">
                <h2 className="text-3xl font-serif font-normal mb-4">Your Readiness Score</h2>
                <div className="mb-6">
                  <div className="text-6xl font-bold mb-2">{score}%</div>
                  <div className={`text-2xl font-serif ${scoreLevel.color}`}>
                    {scoreLevel.level}
                  </div>
                </div>
                <p className="text-muted-foreground font-serif">
                  Great start! To unlock your detailed analysis and personalized automation recommendations, enter your email below.
                </p>
              </Card>

              <Card className="border border-border p-8">
                <h3 className="text-xl font-medium mb-4 font-mono">
                  Get Your Full Readiness Report
                </h3>
                <p className="text-sm text-muted-foreground font-serif mb-6">
                  Your detailed report will include:
                </p>
                <ul className="text-sm text-muted-foreground font-serif mb-6 space-y-2 text-left">
                  <li>• Specific automation opportunities for your team</li>
                  <li>• Estimated time and cost savings breakdown</li>
                  <li>• Recommended starting points based on your answers</li>
                  <li>• Implementation timeline and resource requirements</li>
                </ul>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email" className="font-mono">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-2"
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      onClick={() => setShowEmailGate(false)}
                      className="flex-1"
                      disabled={isSubmitting}
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    <Button
                      onClick={handleSubmitEmail}
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Get My Results
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-24 pt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-serif font-normal mb-4">
                Agent Readiness Quiz
              </h1>
              <p className="text-lg text-muted-foreground font-serif">
                Discover if your team is ready for AI automation in just 2 minutes
              </p>
            </div>

            <div className="mb-8">
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-muted-foreground text-center mt-2 font-mono">
                Question {currentStep + 1} of {quizSteps.length}
              </p>
            </div>

            <Card className="border border-border p-8">
              <h2 className="text-2xl font-serif font-normal mb-6">{currentQuestion.question}</h2>

              <RadioGroup
                value={answers[currentStep] || ""}
                onValueChange={handleAnswer}
                className="space-y-4"
              >
                {currentQuestion.options.map((option) => (
                  <div
                    key={option.value}
                    className={`flex items-center space-x-3 p-4 rounded-lg border transition-colors cursor-pointer ${
                      answers[currentStep] === option.value
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => handleAnswer(option.value)}
                  >
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label
                      htmlFor={option.value}
                      className="flex-1 cursor-pointer font-serif"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="flex gap-4 mt-8">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className="flex-1"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!answers[currentStep]}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {currentStep === quizSteps.length - 1 ? "See Results" : "Next"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default QuizPage;