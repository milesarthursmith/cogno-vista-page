import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "AI Win/Loss Insights for a Global SaaS GTM Team",
      description: "How we eliminated 100+ hours/month of manual analysis and enabled the first time-series view of decision drivers",
      color: "bg-slate-100",
      link: "/case-studies/win-loss-insights"
    },
    {
      title: "AI Re-Engagement Engine for Closed Lost Opportunities",
      description: "How we scaled from pilot to hundreds of AI emails/day, generating SQLs and Closed Won pipeline safely",
      color: "bg-neutral-100",
      link: "/case-studies/re-engagement"
    },
    {
      title: "Message Intelligence Platform for Marketing & Sales",
      description: "How we unified messaging performance across channels and created a feedback loop between marketing and sales",
      color: "bg-stone-100",
      link: "/case-studies/message-intelligence"
    },
    {
      title: "Automated Newsletter & YouTube Summarisation",
      description: "How we converted an overwhelming content feed into a curated intelligence stream, saving hours per week",
      color: "bg-zinc-100",
      link: "/case-studies/content-summarization"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Real automation wins for teams who chose to focus on what matters. See how we've helped companies eliminate manual work and scale intelligently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={index}
                title={study.title}
                description={study.description}
                color={study.color}
                link={study.link}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;