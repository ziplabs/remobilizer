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
  slug: "standardize-vs-best-of-breed",
  title: "Standardize or Best-of-Breed? The AI Platform Choice Every Enterprise Re-litigates",
  date: "2025-12-15",
  description:
    "AI platform decisions revive a familiar enterprise tradeoff: unify to scale or optimize for capability. The real risk is pretending it is a one-time decision.",
  tags: ["AI Strategy", "Platform Strategy", "Enterprise Architecture"],
  outcomes: ["platform-resilience", "strategic-optionality"],
  decisions: ["standardize-vs-best-of-breed", "vendor-consolidation"],
  author_name: "Editor",
  author_role: "Founder, Ziplabs",
  is_guest: false,
  headerImage: {
    src: "/images/insights/standardize-vs-best-of-breed/header.jpg",
    alt: "Leaders discussing at a whiteboard during a meeting.",
    width: 1200,
    height: 600,
  },
  cta: {
    text: "If you are navigating this now, happy to compare notes.",
    href: "/contact",
  },
  blocks: [
    {
      type: "paragraph",
      text: "The question arrives quietly at first. A product team pilots a new model provider. A data science group ships an agent workflow on a different stack. Procurement asks why there are six AI vendors on the invoice. Security wants a single governance path for model access. The platform team is asked, again, whether the company should standardize.",
    },
    {
      type: "paragraph",
      text: "In practice, most enterprises are already in a best-of-breed world, even if they say otherwise. AI capability is moving too quickly, the stakes are too high, and the center cannot keep up with every edge use case. At the same time, the costs and risks of fragmentation are no longer theoretical. The tradeoff is real, and the consequences show up in delivery velocity, auditability, and credibility with the board.",
    },
    {
      type: "heading",
      text: "Why standardization still appeals",
    },
    {
      type: "paragraph",
      text: "Standardizing on a common AI platform promises a few things that executives can actually bank on: one security review, one procurement relationship, clearer operational ownership, and less friction moving data between teams. Platform leaders can offer a stable default. Compliance teams can point to a single control surface. Cost forecasting becomes possible. In regulated industries, those are not small benefits.",
    },
    {
      type: "paragraph",
      text: "The hidden cost is that the standard becomes a ceiling. When the preferred vendor lags in a critical capability, teams find workarounds. Exception paths become the new norm. The platform team becomes a gatekeeper rather than an enabler, and the credibility of the platform erodes. The best people quietly build outside the system, which creates a bigger governance problem than the one you were trying to solve.",
    },
    {
      type: "heading",
      text: "Why best-of-breed keeps winning",
    },
    {
      type: "paragraph",
      text: "Best-of-breed buys optionality. It allows teams to choose the right model, toolchain, or workflow for a specific job. It helps product leaders differentiate, especially when competitors can access the same baseline models. It is also the honest reflection of how innovation spreads inside large organizations: local wins, then pressure to scale.",
    },
    {
      type: "paragraph",
      text: "But the bill arrives later. Every additional vendor adds integration work, overlapping governance, and duplicated contracts. Security reviews become a queue. Procurement loses leverage. Data becomes less portable. When the platform breaks, the incident response becomes a coordination problem across vendors and internal owners. Many teams discover that their “best-of-breed” decision only worked because someone else absorbed the operational burden.",
    },
    {
      type: "heading",
      text: "Failure patterns that repeat",
    },
    {
      type: "list",
      items: [
        "A central platform is mandated, but exceptions are granted so often that the platform becomes a compliance checklist rather than a true product.",
        "A best-of-breed portfolio grows unchecked, until an audit or security incident forces a rapid, disruptive consolidation.",
        "M&A brings in parallel AI stacks. Integration is delayed for a year, and in the meantime core data is duplicated and model lineage is lost.",
        "Procurement negotiates a global vendor deal, but the platform team cannot deliver a viable migration path, leaving teams stuck with both stacks.",
        "A platform team builds a “one size fits all” toolkit without product input, and adoption stalls because it does not meet real product timelines.",
      ],
    },
    {
      type: "heading",
      text: "The uncomfortable truth",
    },
    {
      type: "paragraph",
      text: "This is not a one-time choice. It is a recurring strategic posture decision, and it shifts with market maturity, risk tolerance, and the company’s operating model. For some capabilities you need predictability. For others, you need speed and optionality. The mistake is treating the AI platform as a single decision instead of a portfolio of decisions with different lifecycles.",
    },
    {
      type: "paragraph",
      text: "It is also a leadership problem, not just a technology one. The tradeoff is really about where you want the organization to absorb friction: in central governance, or at the edges. In a fast-moving environment, that friction shows up as missed product windows or elevated risk exposure. Neither is free.",
    },
    {
      type: "heading",
      text: "Questions worth surfacing early",
    },
    {
      type: "list",
      items: [
        "Where do we need the most consistent governance because the downside is existential?",
        "Which teams are closest to the customer and should be allowed to move faster than the platform?",
        "How will we detect when a local best-of-breed choice becomes a company-wide dependency?",
        "What happens when our primary vendor falls behind for twelve months?",
        "If we had to consolidate in six months, what would break first?",
      ],
    },
    {
      type: "paragraph",
      text: "There is no universal posture that fits every enterprise. The right answer is often a calibrated mix, with explicit thresholds for when to standardize and when to allow deviation. The challenge is making those thresholds visible, understood, and enforceable without crushing momentum.",
    },
  ],
};

export default insight;
