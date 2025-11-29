import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Mail, Search, Database, BarChart, FileText, Users, Zap } from "lucide-react";

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

const AgentExamples = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-medium mb-6">
              Examples
            </h1>
            <p className="text-xl text-muted-foreground font-serif">
              Real-world agent use cases built with production-ready tools and integrations
            </p>
          </div>

          {/* Agents Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
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
                  {/* Capabilities */}
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

                  {/* Tech Stack */}
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

          {/* CTA Section */}
          <div className="mt-20 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-medium mb-4">
              Ready to build your own agent?
            </h2>
            <p className="text-muted-foreground font-serif mb-8">
              These examples show what's possible. We'll design and build custom agents that fit your exact workflow and tech stack.
            </p>
            <a 
              href="/#contact" 
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
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

export default AgentExamples;
