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
  slug: "why-ai-isnt-fixing-core-challenges-enterprise-software",
  title: "Why AI Isn’t Fixing the Core Challenges of Enterprise Software",
  date: "2026-01-22",
  description:
    "AI features are shipping fast across incumbent platforms, but the underlying architectural, economic, and organizational constraints remain. Operators still have to manage those realities.",
  tags: ["Enterprise Software", "AI Strategy", "Operating Models"],
  outcomes: ["platform-resilience", "strategic-optionality", "cost-discipline"],
  decisions: ["standardize-vs-best-of-breed", "centralize-vs-federate"],
  author_name: "Editor",
  author_role: "Founder, Ziplabs",
  is_guest: false,
  headerImage: {
    src: "/images/insights/why-ai-isnt-fixing-core-challenges-enterprise-software/header.jpg",
    alt: "Leaders discussing AI impacts in a workplace setting.",
    width: 1200,
    height: 600,
  },
  blocks: [
    {
      type: "paragraph",
      text: "The last two years have been a sprint to embed AI into enterprise software. Copilots, agents, natural language workflows, and embedded assistants are now baseline expectations in CRM platforms such as Salesforce and Microsoft Dynamics, ITSM platforms like ServiceNow and BMC, HCM platforms like Workday and Oracle, ERP suites from SAP and Oracle, and creative stacks such as Adobe and Autodesk. The question most operators are asking is not whether AI is real. It is whether AI is actually fixing the hard problems that have defined enterprise software for decades: slow implementation cycles, brittle integrations, fragmented data, and economic models that strain under customization and change.",
    },
    {
      type: "paragraph",
      text: "This is not a dismissal of AI progress. AI has introduced material improvements in productivity, support workflows, and user experience. The core thesis is simple: those gains are real, but they do not resolve the foundational architectural, economic, and organizational constraints of enterprise software. Operators should not confuse feature velocity with constraint removal. The core challenges remain, and they are still the constraints that determine cost, risk, and time-to-change.",
    },
    {
      type: "heading",
      text: "Why incumbents moved so aggressively on AI",
    },
    {
      type: "paragraph",
      text: "Incumbent enterprise software companies had to move fast because AI redefined buyer expectations. Once one major platform demonstrated a useful AI assistant or agent, every other platform faced immediate pressure to match. Across vendors like Salesforce, ServiceNow, Microsoft, SAP, Oracle, and Workday, the immediate goal was parity with new interaction patterns rather than a rewrite of the underlying stack. In enterprise categories with long renewal cycles, narrative momentum matters. Operators want evidence that their core platforms are evolving, not stagnating.",
    },
    {
      type: "paragraph",
      text: "There is also a strategic defense motive. AI can shift power toward the application layer by reducing reliance on external tools and by controlling user interaction. If AI-enabled workflows sit inside the core platform, vendors can protect their integration surface and monetize incremental capacity. Even when AI does not solve the underlying architecture, it can reinforce platform centrality.",
    },
    {
      type: "paragraph",
      text: "Finally, AI lets vendors surface value without re-platforming. It is easier to add an agent on top of an existing system than to unwind the data model, rebuild the workflow engine, or remove years of accumulated customization. AI can be layered into the product roadmap without fighting the internal politics of deep architectural change. That makes it attractive to vendor leadership and to enterprise buyers seeking near-term wins.",
    },
    {
      type: "heading",
      text: "What AI genuinely improves inside enterprise platforms",
    },
    {
      type: "paragraph",
      text: "AI is making enterprise software more accessible and less brittle at the edges. Natural language interfaces lower the barrier to entry for users who never learned the system’s formal vocabulary. Agents can sequence routine tasks, reducing the number of clicks and the reliance on specialist roles to move work forward. In operations teams, this changes the feel of daily work in a meaningful way, especially for frontline roles that previously depended on ticket escalation.",
    },
    {
      type: "paragraph",
      text: "AI also improves the retrieval and synthesis layer. Support teams get faster access to relevant case history. Finance teams can summarize reconciliations. HR teams can draft communications and policy responses. These are real productivity gains, even if they are not transformative in the architectural sense. AI compresses time around knowledge work and reduces the friction of cross-functional coordination, particularly where the bottleneck was simply finding the right context.",
    },
    {
      type: "paragraph",
      text: "Another meaningful gain is observability at the application layer. Many platforms now use AI to detect anomalies, flag risky transactions, or propose remediation steps. That can shorten incident response and improve compliance posture when it is tied into real control processes. These gains matter, but they still operate within the limits of the platform’s data model and integration architecture.",
    },
    {
      type: "heading",
      text: "The core challenges AI does not resolve",
    },
    {
      type: "paragraph",
      text: "AI does not undo architectural complexity. Most enterprise platforms are built on layered data models that reflect decades of product history. AI can read those layers, but it does not simplify them. If your system relies on brittle integrations between CRM, ERP, and data warehouses, an AI layer will not reduce the coupling. It might even increase it by creating new dependency paths across those systems.",
    },
    {
      type: "paragraph",
      text: "AI also does not make customization free. Enterprises customize because their operating model is unique, and that uniqueness is a competitive reality. AI can help generate configuration scripts or suggest workflow changes, but the downstream cost of maintaining those custom paths remains. The more AI accelerates change, the faster technical debt accumulates unless the underlying architecture supports safe iteration.",
    },
    {
      type: "paragraph",
      text: "Agentic features deserve specific scrutiny. They often reduce surface friction while increasing coupling to platform-specific data models and workflow engines. An agent that can create a case, route approval, and trigger downstream updates is powerful, but it ties the organization more tightly to how that platform defines states, roles, and exceptions. Over time, that creates new dependencies, governance obligations, and exit friction even when the short-term experience feels smoother.",
    },
    {
      type: "paragraph",
      text: "Economic constraints remain as well. AI workloads introduce new consumption costs, and those costs compound with existing licensing structures. Many incumbents are layering usage-based pricing on top of already complex enterprise agreements. Operators face new budget volatility without a corresponding simplification of the licensing model. AI can reduce effort in some areas, but it also adds cost centers that are harder to forecast.",
    },
    {
      type: "paragraph",
      text: "Organizational inertia is another persistent constraint. AI can suggest changes, but it cannot resolve the governance processes that decide whether change is allowed. Security reviews, compliance sign-offs, data access boundaries, and procurement cycles are still real. In many organizations, these processes are the limiting factor, not the capability of the software itself. AI does not remove the human and institutional coordination work that determines speed.",
    },
    {
      type: "paragraph",
      text: "A common operator scenario: a CIO evaluates an AI agent that accelerates purchase approvals in the ERP, but the approval chain itself remains unchanged because it is tied to audit requirements. The agent speeds the clicks and the handoffs, yet the number of approvals, exceptions, and checkpoints stays the same. Cycle time improves at the margin, but the core governance burden does not move.",
    },
    {
      type: "paragraph",
      text: "Another pattern: an operations team uses an AI agent to triage IT tickets across ServiceNow and Jira. The routing is faster, but the team loses some predictability in why a ticket moved to a given queue. They gain speed while taking on a new transparency and auditability problem, which then requires monitoring and escalation rules to compensate.",
    },
    {
      type: "paragraph",
      text: "Finally, customer expectations do not reset. Enterprises still expect reliability, auditability, and accountability. AI features can introduce variability and increase the need for monitoring. Operators may have to add new layers of oversight to keep AI outputs within acceptable boundaries. That is not a trivial requirement. It adds operational overhead to systems that already demand careful governance.",
    },
    {
      type: "heading",
      text: "Why these constraints persist even as AI advances",
    },
    {
      type: "paragraph",
      text: "Most enterprise platforms are not optimized for continuous reinvention. Their architectural choices were made to support stability, backward compatibility, and large-scale adoption. Those properties are valuable, but they create inertia. AI is being added to systems that were not designed for constant change. As a result, AI advances are layered onto legacy structures rather than replacing them.",
    },
    {
      type: "paragraph",
      text: "The economics of enterprise software also reinforce continuity. Large customers pay for stability and predictability. Vendors are cautious about breaking existing workflows because it threatens renewals. AI can be introduced as an overlay precisely because it does not require fundamental change. That is why AI progress can be fast while foundational constraints remain untouched.",
    },
    {
      type: "paragraph",
      text: "There is also a deeper organizational reality: enterprise software is as much about operating models as it is about technology. AI can automate tasks, but it does not eliminate the need for policy decisions about data ownership, risk tolerance, and accountability. Those decisions are shaped by org structure, regulatory context, and leadership priorities. Until those change, AI cannot fully shift the system.",
    },
    {
      type: "heading",
      text: "How operators should evaluate AI claims from vendors",
    },
    {
      type: "paragraph",
      text: "The key is to separate capability claims from constraint removal. An AI feature can be valuable without changing the underlying operating cost or integration burden. When a vendor claims a workflow is “automated,” ask what happens to the data model, the approval chain, and the exception path. If those remain unchanged, the cost and complexity profile likely remains unchanged as well.",
    },
    {
      type: "paragraph",
      text: "Operators should also ask where AI introduces new dependencies. Does the feature rely on vendor-hosted models? Does it add a new usage-based cost? Does it require broader data access than your current governance model allows? If the answer is yes, the feature may solve a local problem while introducing a broader platform risk. Agentic systems in particular can embed logic into platform-specific workflows, which increases exit friction and makes governance harder to standardize across tools.",
    },
    {
      type: "paragraph",
      text: "Another test is durability. If you remove the AI layer, does the workflow still make sense? If the answer is no, the organization is now dependent on AI performance and cost in a way that may not align with long-term operating stability. In enterprise software, resilience matters as much as innovation. AI should be assessed through that lens.",
    },
    {
      type: "paragraph",
      text: "Finally, evaluate whether AI changes the pace of decision-making, not just execution. The real constraint is often the approval, integration, and governance loop. If AI only accelerates the last mile, it may create a perception of speed without altering the bottleneck. Operators should align AI adoption with the slowest constraint in the system, not with the most visible feature.",
    },
    {
      type: "heading",
      text: "A steadier operating lens for AI in enterprise software",
    },
    {
      type: "paragraph",
      text: "AI is not a reset button for enterprise software. It is an accelerant within existing constraints. That does not make it unimportant. It means the most durable gains will come from pairing AI adoption with deliberate architectural simplification, cost discipline, and governance redesign. Those moves are slower and harder than adding an AI feature, but they are where long-term leverage is created.",
    },
    {
      type: "paragraph",
      text: "For operators, the right posture is pragmatic. Embrace AI where it reduces friction and improves decision quality, but keep the long view on the constraints that actually govern change. The primary risk is not slow AI adoption. The real risk is mistaking visible acceleration for structural progress, and then committing to operating models that are harder to unwind.",
    },
  ],
};

export default insight;
