import { getAllInsights } from "@/lib/insights";

export type Decision = {
  slug: string;
  title: string;
  shortDescription: string;
  longIntro?: string;
  whatWereSeeing?: string[];
  whatMakesThisHard?: string[];
  relatedOutcomes?: string[];
};

export const decisions: Decision[] = [
  {
    slug: "standardize-vs-best-of-breed",
    title: "Standardize vs. best-of-breed",
    shortDescription:
      "Balancing operational scale with the flexibility to choose the right tools.",
    longIntro:
      "This decision keeps resurfacing as AI capabilities move faster than centralized platforms can absorb.",
    whatWereSeeing: [
      "Exceptions becoming the default once teams ship real use cases.",
      "Procurement pressure to consolidate while product needs diverge.",
    ],
    whatMakesThisHard: [
      "Short-term wins at the edge can create long-term platform sprawl.",
      "Centralization can slow execution and reduce credibility.",
    ],
    relatedOutcomes: ["platform-resilience", "strategic-optionality"],
  },
  {
    slug: "vendor-consolidation",
    title: "Vendor consolidation",
    shortDescription:
      "Reducing stack sprawl without limiting innovation or speed.",
    longIntro:
      "Most enterprises start with multiple vendors and later confront the cost and risk of fragmentation.",
    whatWereSeeing: [
      "Overlapping tools used by different teams.",
      "Negotiated contracts without an adoption path.",
    ],
    whatMakesThisHard: [
      "Migration effort is often underestimated.",
      "Consolidation can break product roadmaps.",
    ],
    relatedOutcomes: ["cost-discipline", "strategic-optionality"],
  },
  {
    slug: "build-vs-buy",
    title: "Build vs. buy",
    shortDescription:
      "Determining when internal capability justifies ownership.",
    longIntro:
      "Leaders revisit this decision as AI capabilities shift and vendors evolve.",
    whatWereSeeing: [
      "Teams building to avoid vendor lock-in.",
      "Buy decisions made to hit near-term product timelines.",
    ],
    whatMakesThisHard: [
      "Build paths can stall without clear operating ownership.",
      "Buy paths can narrow future options.",
    ],
    relatedOutcomes: ["platform-resilience", "strategic-optionality"],
  },
  {
    slug: "centralize-vs-federate",
    title: "Centralize vs. federate",
    shortDescription:
      "Choosing who owns platform standards and approvals.",
    longIntro:
      "As adoption spreads, teams negotiate how much control stays central versus local.",
    whatWereSeeing: [
      "Platform teams asked to approve every exception.",
      "Product teams building parallel paths to move faster.",
    ],
    whatMakesThisHard: [
      "Central control can slow delivery.",
      "Federation can weaken governance.",
    ],
    relatedOutcomes: ["delivery-velocity", "risk-governance"],
  },
  {
    slug: "security-gates",
    title: "Security gates",
    shortDescription:
      "Balancing risk controls with delivery timelines.",
    longIntro:
      "Security review often becomes the pacing function for AI delivery.",
    whatWereSeeing: [
      "Approval queues that extend release cycles.",
      "Shadow deployments to avoid slow review loops.",
    ],
    whatMakesThisHard: [
      "Risk tolerance differs across business units.",
      "Controls rarely keep pace with changing models.",
    ],
    relatedOutcomes: ["risk-governance", "delivery-velocity"],
  },
  {
    slug: "when-to-scale",
    title: "When to scale",
    shortDescription:
      "Deciding when pilots become production commitments.",
    longIntro:
      "Many pilots succeed technically but stall when scaled across enterprise operations.",
    whatWereSeeing: [
      "Pilot results that do not translate into business adoption.",
      "Costs that rise faster than expected at scale.",
    ],
    whatMakesThisHard: [
      "Scale requires governance, not just infrastructure.",
      "Adoption depends on operating model readiness.",
    ],
    relatedOutcomes: ["cost-discipline", "delivery-velocity"],
  },
  {
    slug: "model-risk",
    title: "Model risk oversight",
    shortDescription:
      "Determining how model behavior is monitored and governed.",
    longIntro:
      "Model risk has become an enterprise concern beyond the data science team.",
    whatWereSeeing: [
      "Inconsistent monitoring and drift management.",
      "Limited transparency into model lineage.",
    ],
    whatMakesThisHard: [
      "Ownership is often split across teams.",
      "Regulatory expectations evolve quickly.",
    ],
    relatedOutcomes: ["risk-governance", "customer-trust"],
  },
  {
    slug: "data-access-boundaries",
    title: "Data access boundaries",
    shortDescription:
      "Balancing access with privacy and regulatory obligations.",
    longIntro:
      "Leaders navigate where data can move and how it can be used in AI systems.",
    whatWereSeeing: [
      "Policy exceptions to hit product deadlines.",
      "Conflicting interpretations of compliance requirements.",
    ],
    whatMakesThisHard: [
      "Data policies change slower than product needs.",
      "Privacy constraints vary across markets.",
    ],
    relatedOutcomes: ["customer-trust", "risk-governance"],
  },
];

export const getDecisionBySlug = (slug: string) =>
  decisions.find((decision) => decision.slug === slug);

export const getInsightsByDecision = (slug: string) =>
  getAllInsights().filter((insight) => insight.decisions.includes(slug));
