export type InsightBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export type Insight = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  outcomes: string[];
  decisions: string[];
  headerImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  blocks: InsightBlock[];
};

const insight: Insight = {
  slug: "build-vs-buy-ai",
  title: "When Customers Can Build Instead of Buy: AI’s Quiet Threat to Enterprise Software",
  date: "2026-01-24",
  description:
    "AI lowers the barrier to internal tool-building, changing the build-buy calculus and quietly eroding expansion revenue at the edges of large platforms.",
  tags: ["Build vs Buy", "AI Strategy", "Enterprise Platforms"],
  outcomes: ["strategic-optionality", "delivery-velocity", "platform-resilience"],
  decisions: ["build-vs-buy", "data-access-boundaries"],
  headerImage: {
    src: "/images/insights/build-vs-buy-ai/header.jpg",
    alt: "Operators reviewing a build-versus-buy decision.",
    width: 1200,
    height: 600,
  },
  blocks: [
    {
      type: "paragraph",
      text: "Enterprise software has long been anchored in a build-versus-buy tradeoff. Most large organizations buy core systems and then build around them. AI shifts that balance at the edges. With LLM APIs, internal workflow engines, and flexible data platforms, teams can now build lightweight capabilities that previously required a vendor module. The result is subtle but significant: expansion revenue that once came from module add-ons is now harder to capture, even when the core system remains in place.",
    },
    {
      type: "paragraph",
      text: "This is not a prediction that incumbents lose their position. Core systems still benefit from compliance certifications, auditability, and deep process coverage. But AI makes it easier to bypass the last-mile use cases that used to justify new seats or new modules. Operators need to understand this dynamic because it changes the economics of platform growth and the structure of internal tooling portfolios.",
    },
    {
      type: "heading",
      text: "Build at the edges, not replace the core",
    },
    {
      type: "paragraph",
      text: "The most common pattern is not replacing CRM, ITSM, ERP, or HCM platforms. It is building around them. Teams will still rely on Salesforce or Microsoft Dynamics for core account data, ServiceNow or BMC for ticketing, SAP or Oracle for finance, and Workday for HR. But they can now build intake apps, summarization tools, or approval assistants that sit on top of those systems using internal data platforms and LLM APIs.",
    },
    {
      type: "paragraph",
      text: "Data platform maturity makes this easier. With platforms like Snowflake, Databricks, Azure, AWS, and Google Cloud already central to many enterprises, teams can assemble internal apps that leverage governed datasets without waiting for vendor roadmaps. This is not about replacing the vendor’s core system. It is about avoiding incremental module purchases by using existing data and AI infrastructure.",
    },
    {
      type: "paragraph",
      text: "This is often faster and more aligned to local operating needs than waiting for a vendor module. It also lets teams experiment without a lengthy procurement cycle. For operators, the key question is not whether building is possible. It is whether the local build creates fragmentation that later becomes expensive to govern.",
    },
    {
      type: "heading",
      text: "Why AI changes the build-buy calculus",
    },
    {
      type: "paragraph",
      text: "AI reduces the effort needed to build workflows that feel “good enough.” A team can combine a data platform, an LLM API, and a lightweight UI to produce a solution that satisfies 70 percent of a niche need. That is often enough to avoid buying a specialized module. In the past, those capabilities required custom development teams and long integration cycles. Now they can be assembled by small platform teams or even by power users with oversight.",
    },
    {
      type: "paragraph",
      text: "A concrete operator scenario: a revenue operations team considers adding a guided selling module in their CRM. Instead, they build a small internal app that summarizes opportunity risks using existing data from Salesforce and a data warehouse. The internal app costs less, ships faster, and does not require another license tier. The core CRM remains, but expansion revenue that the vendor expected never materializes.",
    },
    {
      type: "paragraph",
      text: "This pattern is not limited to CRM. In ITSM, teams can build automated routing or triage tools that integrate with ServiceNow or Jira without purchasing a new module. In creative or marketing stacks, teams can build AI-assisted tagging and review pipelines that live alongside Adobe or other suites. The core systems remain, but the incremental spend shifts toward internal tooling.",
    },
    {
      type: "heading",
      text: "Governance and compliance still favor incumbents",
    },
    {
      type: "paragraph",
      text: "There are still real constraints that favor buying. Incumbent platforms have years of compliance, audit, and security controls baked in. For regulated workflows, internal tools often lack the evidence trail needed for audit. This is why core systems remain sticky. But the fact that the core is sticky does not protect the edges from internal build alternatives.",
    },
    {
      type: "paragraph",
      text: "Security and privacy requirements also matter. A locally built AI tool that touches customer data or HR records will trigger reviews that many teams are not prepared to run repeatedly. In some cases, buying a vetted module is still the fastest path because it comes with established controls and contractual assurances. Operators should not overcorrect toward building where the compliance cost outweighs the license cost.",
    },
    {
      type: "paragraph",
      text: "Another operator scenario: an HR team wants AI-driven policy response drafts. They could buy an add-on module from their HCM vendor, but the privacy review would take months. Instead, they build a controlled internal tool that uses approved data sources and a vetted model, with output review by HR. The tool meets governance requirements and avoids a new vendor contract. The HCM system remains central, but the add-on module is no longer necessary.",
    },
    {
      type: "heading",
      text: "What this means for platform strategy",
    },
    {
      type: "paragraph",
      text: "Operators should expect more internal builds at the edge and plan for it. The primary risk is not that internal tools exist, but that they proliferate without shared standards. AI makes building easier, which means governance, support, and lifecycle management need to scale faster than before. Without a shared platform approach, internal AI tools can fragment data access, duplicate logic, and increase operational risk.",
    },
    {
      type: "paragraph",
      text: "This is where platform owners earn their keep. The decision is not build versus buy in the abstract; it is which internal builds are allowed to live long-term, and which are temporary. When internal tools are treated as permanent but lack support commitments, the organization accumulates hidden operational debt. A clear lifecycle policy is as important as the initial build decision.",
    },
    {
      type: "paragraph",
      text: "For vendor relationships, this also means renewal strategies should focus on core system value, not expansion. Operators should be clear-eyed about where buying still provides compliance, reliability, and support benefits, and where internal builds are more cost-effective. That posture is not anti-vendor. It is a realistic response to what AI now enables at the edges.",
    },
    {
      type: "heading",
      text: "Operator checks",
    },
    {
      type: "list",
      items: [
        "Which edge workflows can be built internally without undermining audit or data controls?",
        "Are internal AI tools aligned to a shared governance and monitoring model?",
        "Where is vendor expansion actually delivering value versus simply reducing internal build effort?",
        "Do internal builds create exit friction by embedding proprietary workflows outside the platform?",
        "What is the long-term support plan for internally built AI tools?",
      ],
    },
    {
      type: "heading",
      text: "A grounded close for operators",
    },
    {
      type: "paragraph",
      text: "AI does not eliminate the need for enterprise platforms. It changes the economics of what gets built around them. The quiet threat to incumbents is not core replacement; it is the erosion of expansion revenue and the rise of internal tools that satisfy edge needs. Operators should treat this as a portfolio decision: keep the core stable, allow strategic internal builds, and enforce governance that keeps the whole system coherent.",
    },
  ],
};

export default insight;
