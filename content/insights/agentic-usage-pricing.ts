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
  author_name: string;
  author_role?: string;
  author_url?: string;
  is_guest?: boolean;
  headerImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  cta?: {
    text: string;
    href: string;
    label?: string;
  };
  blocks: InsightBlock[];
};

const insight: Insight = {
  slug: "agentic-usage-pricing",
  title: "Why Agentic AI Increases Usage but Not Pricing Power in Enterprise Software",
  date: "2026-02-03",
  description:
    "Agentic AI deepens workflow dependency and improves UX, but does not automatically increase willingness-to-pay and can add governance overhead.",
  tags: ["AI Strategy", "Platform Economics", "Operating Models"],
  outcomes: ["cost-discipline", "platform-resilience", "customer-trust"],
  decisions: ["security-gates", "vendor-consolidation"],
  author_name: "Editor",
  author_role: "Founder, Ziplabs",
  is_guest: false,
  headerImage: {
    src: "/images/insights/agentic-usage-pricing/header.jpg",
    alt: "Operators reviewing agentic workflow usage data.",
    width: 1200,
    height: 600,
  },
  blocks: [
    {
      type: "paragraph",
      text: "Agentic AI is reshaping how enterprise software feels in day-to-day work. Agents can draft responses, route approvals, and take multi-step actions across CRM, ITSM, finance, and HR systems. The result is more activity, faster execution, and higher usage. Yet pricing power often remains flat. Operators see a paradox: deeper dependency on the platform does not automatically translate into higher willingness-to-pay.",
    },
    {
      type: "paragraph",
      text: "The explanation is structural. Agentic features reduce surface friction, but they also increase coupling to platform-specific data models and workflow engines. That deepens dependency while adding governance requirements and cost variability. In many enterprises, those tradeoffs dampen pricing elasticity rather than expanding it.",
    },
    {
      type: "heading",
      text: "Usage growth and pricing power are different signals",
    },
    {
      type: "paragraph",
      text: "Agentic AI can drive substantial usage increases. A service desk agent in ServiceNow may automate more tickets per day. A sales assistant in Salesforce or Microsoft Dynamics can update records faster. An HR agent in Workday can streamline onboarding tasks. These improvements show up in activity metrics and user satisfaction. But pricing power is a budget decision, not a usage metric. If the workflow is already mission critical, higher usage does not necessarily justify higher spend.",
    },
    {
      type: "paragraph",
      text: "In many enterprise categories, buyers expect that more efficient workflows should reduce cost, not increase it. When an agent reduces manual effort, the buyer often sees that as a reason to hold pricing steady or negotiate down, especially in renewal cycles. This is why usage growth can coexist with pricing compression.",
    },
    {
      type: "paragraph",
      text: "Procurement behavior reinforces this. If an agent is positioned as a productivity feature inside an existing platform, buyers assume it should be included. If it is priced separately, it must compete with other budget priorities and demonstrate clear, auditable outcomes. In many cases, the burden of proof is higher than the vendor expects, which limits pricing leverage even as usage expands.",
    },
    {
      type: "heading",
      text: "Dependency, coupling, and governance overhead",
    },
    {
      type: "paragraph",
      text: "Agentic systems often create tighter coupling to platform data models. An agent that can move a ticket through ITSM queues or modify an ERP transaction depends on how those systems define states, roles, and exceptions. That coupling can increase exit friction over time. Operators should understand that a higher level of dependency is not inherently negative, but it changes the long-term flexibility of the operating model.",
    },
    {
      type: "paragraph",
      text: "The governance impact is real. Agents require broader access to data and more extensive logging to maintain auditability. If an agent can take actions, it also needs controls to prevent unintended consequences. Those controls add overhead and can slow adoption. In practice, the more agentic a workflow becomes, the more governance and monitoring it requires. That overhead can offset some of the productivity gains.",
    },
    {
      type: "paragraph",
      text: "Coupling also shows up in cross-platform workflows. If an agent orchestrates actions across ServiceNow, Jira, Salesforce, and a data platform, the organization becomes dependent on consistent definitions of states and handoffs. Each system carries its own workflow semantics. The agent makes the seams visible, and resolving those seams requires additional integration and governance work.",
    },
    {
      type: "paragraph",
      text: "A common operator scenario: a platform team rolls out an agent that auto-approves low-risk finance requests. Usage spikes, and cycle time improves. But audit and compliance teams quickly require additional evidence trails and exception handling. The organization ends up adding a new approval layer and monitoring process. The net result is higher usage but no clear justification for a price increase.",
    },
    {
      type: "heading",
      text: "Good-enough expectations and pricing compression",
    },
    {
      type: "paragraph",
      text: "Agentic AI can also normalize expectations. Once the workflow is smoother, the market expects similar capabilities across vendors. In CRM, ITSM, ERP, and HCM categories, vendors are converging on similar agentic patterns. Buyers interpret that convergence as commodity baseline rather than premium innovation. This reduces the ability to charge more, even if the product has improved.",
    },
    {
      type: "paragraph",
      text: "Another operator scenario: an enterprise rolls out a cross-platform agent that touches ServiceNow, Jira, and a custom data platform. It increases usage and ticket throughput but also triggers a requirement for centralized governance. The organization must invest in policy checks and access monitoring, which offsets the cost savings. The agent improves experience, but it does not create new budget capacity.",
    },
    {
      type: "heading",
      text: "Operator checks",
    },
    {
      type: "list",
      items: [
        "Does agentic usage create measurable business outcomes that procurement will fund?",
        "Where does agentic behavior increase coupling to platform-specific data models?",
        "What new governance or audit requirements will agents introduce?",
        "Are usage-based AI costs aligned with renewal pricing and budget predictability?",
        "If an agent is removed, does the workflow still function without disruption?",
      ],
    },
    {
      type: "heading",
      text: "A pragmatic close on pricing and dependency",
    },
    {
      type: "paragraph",
      text: "Agentic AI can deepen workflow dependency and improve experience, but it does not automatically expand pricing power. Operators should evaluate agentic features through two lenses: the operational value they deliver and the governance and coupling they introduce. The real risk is not that agents fail to work. The risk is assuming that higher usage signals a willingness-to-pay that procurement budgets will not support.",
    },
  ],
};

export default insight;
