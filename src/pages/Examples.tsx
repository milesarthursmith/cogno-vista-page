import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AbstractBackground from "@/components/AbstractBackground";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, Mail, Search, Database, BarChart, FileText, Users, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const agentExamples = [
  {
    icon: Mail,
    name: "Outreach Agent",
    description: "Automates personalized outreach across email, SMS, and voice channels",
    capabilities: [
      "Multi-channel contact sequencing",
      "Dynamic personalization from CRM data",
      "Response detection and routing",
      "A/B testing of messaging",
      "Automated follow-ups based on engagement",
    ],
    techStack: ["Relevance AI", "Salesforce", "Gmail API", "Twilio", "Clay", "GPT-5"],
  },
  {
    icon: Search,
    name: "Research & Insight Agent",
    description: "Gathers, synthesizes, and delivers competitive intelligence and market insights",
    capabilities: [
      "Automated web scraping and monitoring",
      "Competitive analysis reports",
      "News and trend aggregation",
      "Sentiment analysis",
      "Custom report generation",
    ],
    techStack: ["n8n", "GPT-5", "Perplexity API", "Google Cloud", "BigQuery", "Slack"],
  },
  {
    icon: Database,
    name: "Data Enrichment Agent",
    description: "Continuously enriches and cleans contact and company records",
    capabilities: [
      "Missing field completion",
      "Duplicate detection and merging",
      "Company hierarchy mapping",
      "Contact validation",
      "Technographic data enrichment",
    ],
    techStack: ["Clay", "Clearbit", "ZoomInfo API", "Salesforce", "Python", "Zapier"],
  },
  {
    icon: Users,
    name: "Sales Intelligence Agent",
    description: "Analyzes calls, meetings, and deals to surface insights and coaching opportunities",
    capabilities: [
      "Call transcription and summarization",
      "Win/loss pattern analysis",
      "Deal risk scoring",
      "Competitor mention tracking",
      "Automated meeting notes",
    ],
    techStack: ["Gong", "Salesforce", "GPT-5", "BigQuery", "Looker", "Slack"],
  },
  {
    icon: FileText,
    name: "Marketing Asset Agent",
    description: "Generates on-brand marketing copy, ads, and content at scale",
    capabilities: [
      "Google Ads and Meta ad generation",
      "Email sequence copywriting",
      "Landing page content creation",
      "SEO-optimized blog drafts",
      "A/B variant generation",
    ],
    techStack: ["GPT-5", "Claude", "Brand guidelines API", "Google Ads API", "HubSpot", "Airtable"],
  },
  {
    icon: BarChart,
    name: "Analytics & Reporting Agent",
    description: "Automatically pulls data, generates insights, and creates executive reports",
    capabilities: [
      "Cross-platform data aggregation",
      "Trend detection and alerting",
      "Automated dashboard updates",
      "Natural language insights",
      "Scheduled report distribution",
    ],
    techStack: ["BigQuery", "Looker", "GPT-5", "Google Sheets API", "Slack", "n8n"],
  },
  {
    icon: Bot,
    name: "Knowledge Retrieval Agent (RAG)",
    description: "Provides instant answers from your internal documentation and knowledge base",
    capabilities: [
      "Document embedding and indexing",
      "Contextual question answering",
      "Source citation",
      "Multi-document synthesis",
      "Access control enforcement",
    ],
    techStack: ["Pinecone", "GPT-5", "LangChain", "Notion API", "Confluence API", "Slack"],
  },
  {
    icon: Zap,
    name: "Workflow Automation Agent",
    description: "Orchestrates complex multi-step processes across your tech stack",
    capabilities: [
      "Conditional logic and branching",
      "Error handling and retries",
      "Human-in-the-loop approvals",
      "Cross-system data sync",
      "Custom webhook integrations",
    ],
    techStack: ["n8n", "Zapier", "Make", "APIs", "Google Cloud Functions", "Airtable"],
  },
];

const caseStudies = [
  {
    id: "win-loss-insights",
    title: "AI Win/Loss Insights for a Global SaaS GTM Team",
    company: "Global SaaS Company",
    companyInitials: "WL",
    description: "Eliminated 100+ hours/month of manual analysis and enabled the first time-series view of decision drivers",
    tags: ["Win/loss analysis", "LLM extraction", "Time-series analytics"],
    impact: [
      { metric: "100+", label: "Hours saved monthly" },
      { metric: "First", label: "Time-series view" },
      { metric: "Validated", label: "Hypothesis testing" }
    ]
  },
  {
    id: "re-engagement",
    title: "AI Re-Engagement Engine for Closed Lost Opportunities",
    company: "SaaS Company",
    companyInitials: "RE",
    description: "Scaled from pilot to hundreds of AI emails/day, generating SQLs and Closed Won pipeline safely",
    tags: ["Multi-agent system", "CRM automation", "Safety guardrails"],
    impact: [
      { metric: "Multiple", label: "SQLs generated" },
      { metric: "42%", label: "Lower cost per SQL" },
      { metric: "20k+", label: "Accounts engaged" }
    ]
  },
  {
    id: "message-intelligence",
    title: "Message Intelligence Platform for Marketing & Sales",
    company: "Fast-Growing SaaS",
    companyInitials: "MI",
    description: "Unified messaging performance across channels and created a feedback loop between marketing and sales",
    tags: ["Semantic matching", "Cross-channel analytics", "Content generation"],
    impact: [
      { metric: "3", label: "Data sources unified" },
      { metric: "35%", label: "Performance boost" },
      { metric: "100%", label: "Team alignment" }
    ]
  },
  {
    id: "content-summarization",
    title: "Automated Newsletter & YouTube Summarisation",
    company: "GTM Leadership Team",
    companyInitials: "CS",
    description: "Converted an overwhelming content feed into a curated intelligence stream, saving hours per week",
    tags: ["Content ingestion", "AI summarization", "Knowledge archive"],
    impact: [
      { metric: "3-5hrs", label: "Saved per week" },
      { metric: "500+", label: "Items archived" },
      { metric: "24/7", label: "Automated" }
    ]
  }
];

const Examples = () => {
  return (
    <div className="min-h-screen relative">
      <AbstractBackground />
      <Header />
      
      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-serif font-medium mb-6">
              Examples & Case Studies
            </h1>
            <p className="text-xl text-muted-foreground font-serif">
              Real automation wins and production-ready agent patterns that eliminate busywork
            </p>
          </div>

          {/* Tabs for Case Studies and Agent Examples */}
          <div className="mb-20">
            <div className="max-w-7xl mx-auto">
              <Tabs defaultValue="case-studies" className="w-full">
                <TabsList className="grid w-full max-w-md mx-auto mb-12 grid-cols-2">
                  <TabsTrigger value="case-studies" className="font-mono">Case Studies</TabsTrigger>
                  <TabsTrigger value="agent-examples" className="font-mono">Agent Examples</TabsTrigger>
                </TabsList>
                
                <TabsContent value="case-studies">
                  <div className="grid gap-8 md:grid-cols-2">
                    {caseStudies.map((study) => (
                      <Link 
                        key={study.id} 
                        to={`/case-studies/${study.id}`}
                        className="group block"
                      >
                        <Card className="border border-border bg-card hover:shadow-md transition-shadow h-full">
                          <CardHeader>
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <span className="text-sm font-mono font-semibold">{study.companyInitials}</span>
                              </div>
                              <span className="font-mono text-xs text-muted-foreground">{study.company}</span>
                            </div>
                            <CardTitle className="text-2xl font-serif font-medium mb-2 group-hover:text-primary transition-colors">
                              {study.title}
                            </CardTitle>
                            <CardDescription className="font-serif">
                              {study.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                              {study.tags.map((tag, idx) => (
                                <Badge key={idx} variant="secondary" className="font-mono text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            
                            <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                              {study.impact.map((item, idx) => (
                                <div key={idx} className="text-center">
                                  <div className="text-lg font-bold text-primary mb-1">{item.metric}</div>
                                  <div className="text-xs text-muted-foreground font-mono">{item.label}</div>
                                </div>
                              ))}
                            </div>
                            
                            <div className="flex items-center gap-2 text-sm font-mono text-primary pt-2">
                              Read case study
                              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="agent-examples">
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {agentExamples.map((agent, index) => (
                      <Card key={index} className="border border-border bg-card hover:shadow-md transition-shadow">
                        <CardHeader>
                          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-foreground">
                            <agent.icon className="h-6 w-6" />
                          </div>
                          <CardTitle className="text-2xl font-serif font-medium mb-2">
                            {agent.name}
                          </CardTitle>
                          <CardDescription className="font-serif">
                            {agent.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div>
                            <h4 className="text-sm font-medium font-mono mb-3 text-foreground">
                              Key Capabilities
                            </h4>
                            <ul className="space-y-2">
                              {agent.capabilities.map((capability, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2 font-serif">
                                  <span className="text-foreground mt-1">•</span>
                                  <span>{capability}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium font-mono mb-3 text-foreground">
                              Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {agent.techStack.map((tech, idx) => (
                                <Badge 
                                  key={idx} 
                                  variant="secondary" 
                                  className="font-mono text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-medium mb-4">
              Ready to automate your workflow?
            </h2>
            <p className="text-muted-foreground font-serif mb-8">
              These examples show what's possible. We'll design and build custom agents and automations that fit your exact workflow and tech stack.
            </p>
            <a 
              href="/#contact" 
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-primary-foreground font-medium hover:bg-primary/90 transition-colors font-mono"
            >
              Get Started
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Examples;