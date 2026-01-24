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
  slug: "ai-revenue-growth",
  title: "Why AI Isn’t Translating Into Revenue Growth for Enterprise Software Giants",
  date: "2026-01-25",
  description:
    "AI features are now table stakes across incumbent platforms, but operators should not assume that feature velocity will translate into faster revenue growth or margin expansion.",
  tags: ["Enterprise Software", "AI Economics", "Monetization"],
  outcomes: ["cost-discipline", "strategic-optionality", "platform-resilience"],
  decisions: ["vendor-consolidation", "when-to-scale"],
  headerImage: {
    src: "/images/insights/ai-revenue-growth/header.jpg",
    alt: "Operators reviewing enterprise software growth assumptions.",
    width: 1200,
    height: 600,
  },
  blocks: [
    {
      type: "paragraph",
      text: "AI has arrived in enterprise software with real momentum. CRM, ITSM, ERP, HCM, and creative platforms now ship assistants, embedded agents, and natural language workflows as default capabilities. Salesforce, ServiceNow, Microsoft Dynamics, SAP, Oracle, Workday, Adobe, and Autodesk have all moved quickly to make AI visible to buyers. Yet revenue growth for incumbent platforms has not suddenly re-accelerated. Operators inside these companies and their customers are asking the same question: why does AI adoption feel rapid, but revenue and margin expansion remain stubbornly incremental?",
    },
    {
      type: "paragraph",
      text: "The core thesis is not that AI lacks value. AI is improving usability, productivity, and time-to-resolution in real workflows. But those gains are not the same as monetized differentiation. In enterprise software, revenue growth is governed by procurement reality, budget constraints, and the stickiness of existing contracts. AI is table stakes, not a guaranteed lever for higher pricing power or faster ARR expansion.",
    },
    {
      type: "heading",
      text: "AI as table stakes versus monetized differentiation",
    },
    {
      type: "paragraph",
      text: "In large enterprise categories, AI features are now expected. Buyers treat them as baseline functionality, not as a reason to expand spend. When multiple vendors in a category have similar AI claims, the pricing delta compresses quickly. The default procurement posture becomes: include AI in the base agreement, do not pay a premium for it. This dynamic shows up across CRM suites, ITSM platforms, and ERP vendors. Operators should recognize that the same AI capability that improves user experience may not translate into incremental revenue unless it alters a measurable business outcome.",
    },
    {
      type: "paragraph",
      text: "This is why bundling has become the dominant go-to-market pattern. If AI is viewed as a feature of the platform, the safest commercial move is to include it rather than try to sell it as a separate SKU. The tradeoff is clear: bundling can drive adoption, but it also limits pricing power. You can grow usage without growing contract value. That is a hard truth for revenue leaders who want AI to re-rate the business.",
    },
    {
      type: "paragraph",
      text: "There is also a renewal dynamic at work. Many enterprise customers already pay for large suites and are under pressure to demonstrate utilization. When AI shows up, the immediate internal framing is, “we already bought this.” That makes expansion conversations more difficult, because the buyer’s baseline expectation is that AI is part of the platform they already licensed.",
    },
    {
      type: "heading",
      text: "Bundling, procurement resistance, and pricing power limits",
    },
    {
      type: "paragraph",
      text: "Procurement organizations are under pressure to control spend, not expand it. In many enterprises, AI features are negotiated down or included as “innovation coverage” rather than a priced add-on. This is not because buyers dislike AI. It is because they already pay for large suites with substantial unused capacity. If the platform vendor wants incremental revenue, the buyer often expects a clear linkage to savings or headcount avoidance. AI features rarely clear that bar in the first contract cycle.",
    },
    {
      type: "paragraph",
      text: "A concrete operator scenario: a CIO reviews an AI add-on for their ITSM platform. The vendor proposes a usage-based price tied to automated ticket resolution. The CIO agrees the capability is useful but negotiates to include it in the renewal at no additional cost, citing existing overage clauses and the need to prove outcomes first. Adoption increases, but incremental ARR does not. This is a common pattern across large enterprise deals.",
    },
    {
      type: "paragraph",
      text: "Another limiter is internal price alignment. Many incumbents still operate on a seat-based model, while AI value accrues at the workflow level. If AI improves the experience of a small number of power users but does not justify more seats, revenue gains are limited. Usage grows without a corresponding expansion of billable units. The metrics diverge, and operators need to account for that gap.",
    },
    {
      type: "heading",
      text: "AI cost structure versus SaaS economics",
    },
    {
      type: "paragraph",
      text: "AI also introduces a cost structure that looks different from classic SaaS economics. Inference and model usage costs scale with activity, not seats. That shifts the margin profile, especially when AI usage grows faster than monetization. Many incumbents are now absorbing a non-trivial cost of goods sold that they did not have before. Unless pricing catches up, AI can compress margins even while it improves retention.",
    },
    {
      type: "paragraph",
      text: "Beyond inference costs, AI features often increase support load and policy reviews. When an AI feature creates a questionable output, customers expect accountability. That means more support tickets, more review workflows, and more operational overhead. These costs are rarely priced explicitly, but they still affect margin and capacity planning.",
    },
    {
      type: "paragraph",
      text: "This is why usage growth is not the same as ARR expansion. Operators often see a steep increase in AI activity and interpret it as a precursor to revenue growth. But unless the pricing model is aligned to usage, the revenue signal remains weak. Even with usage-based pricing, buyers push back when costs become variable and hard to forecast. The operator reality is that stable budgets matter more than raw consumption metrics.",
    },
    {
      type: "heading",
      text: "Why revenue acceleration is hard even with strong adoption",
    },
    {
      type: "paragraph",
      text: "Enterprise software is sold through multi-year agreements with rigid procurement cycles. That means AI adoption can surge inside the contract window without changing the contract itself. The revenue effect shows up later, if at all. Meanwhile, incumbent vendors are cautious about disrupting renewal economics. They often prioritize retention and multi-year predictability over aggressive AI monetization that could trigger churn risk.",
    },
    {
      type: "paragraph",
      text: "AI also creates a perception that vendors should be absorbing cost. Buyers assume that AI is simply “the next version” of the platform, not a separate product. When multiple vendors in the same category make similar claims, the buyer’s leverage increases. The practical outcome is constrained pricing power, even when the underlying product is improving.",
    },
    {
      type: "heading",
      text: "Operator checks",
    },
    {
      type: "list",
      items: [
        "Is AI adoption changing contract value, or only increasing usage inside fixed-price agreements?",
        "Are AI costs visible in gross margin, and do pricing models cover them at expected adoption levels?",
        "Which AI capabilities map to measurable business outcomes that procurement will fund?",
        "Are AI features bundled by default, and if so, what is the path to future monetization?",
        "Do renewal cycles allow for AI repricing, or will revenue impact lag adoption by multiple years?",
      ],
    },
    {
      type: "heading",
      text: "A pragmatic conclusion for revenue-focused operators",
    },
    {
      type: "paragraph",
      text: "AI is delivering real user value, but revenue acceleration is constrained by procurement behavior, pricing models, and cost structure. The primary risk for operators is not failing to ship AI. The real risk is assuming that AI adoption will automatically reset growth expectations. The only durable path to revenue impact is to align AI value with a clear pricing mechanism that buyers accept, while managing the cost of AI at scale. That is a commercial and operating challenge, not a feature roadmap challenge.",
    },
  ],
};

export default insight;
