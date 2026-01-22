import { getAllInsights } from "@/lib/insights";

export type Outcome = {
  slug: string;
  title: string;
  shortDescription: string;
  longIntro?: string;
  failurePatterns?: string[];
  relatedDecisions?: string[];
};

export const outcomes: Outcome[] = [
  {
    slug: "platform-resilience",
    title: "Platform resilience",
    shortDescription:
      "A durable AI and data platform that supports scale without brittle dependencies.",
    longIntro:
      "Leaders are accountable for platform choices that hold up under growth, vendor shifts, and regulatory pressure.",
    failurePatterns: [
      "Platform fragmentation that slows delivery and creates duplicated controls.",
      "Vendor dependencies that narrow options when priorities shift.",
    ],
    relatedDecisions: ["standardize-vs-best-of-breed", "build-vs-buy"],
  },
  {
    slug: "risk-governance",
    title: "Risk and governance",
    shortDescription:
      "Controls and auditability that satisfy regulators, boards, and customers.",
    longIntro:
      "Governance outcomes depend on the decisions leaders make about access, oversight, and accountability.",
    failurePatterns: [
      "Inconsistent approvals that create shadow pathways.",
      "Controls that exist on paper but fail under audit.",
    ],
    relatedDecisions: ["centralize-vs-federate", "security-gates"],
  },
  {
    slug: "cost-discipline",
    title: "Cost discipline",
    shortDescription:
      "Unit economics that remain predictable as AI usage scales.",
    longIntro:
      "Sustained outcomes require spend visibility and clear ownership of costs.",
    failurePatterns: [
      "Inferred costs that surface only after scale.",
      "Spend shared across teams without accountability.",
    ],
    relatedDecisions: ["when-to-scale", "vendor-consolidation"],
  },
  {
    slug: "delivery-velocity",
    title: "Delivery velocity",
    shortDescription:
      "Execution speed that does not sacrifice quality or governance.",
    longIntro:
      "Velocity depends on how leaders structure approvals, ownership, and tooling.",
    failurePatterns: [
      "Security review queues that stall releases.",
      "Platform gatekeeping that teams route around.",
    ],
    relatedDecisions: ["security-gates", "centralize-vs-federate"],
  },
  {
    slug: "customer-trust",
    title: "Customer trust",
    shortDescription:
      "Product reliability and transparency that sustain long-term adoption.",
    longIntro:
      "Trust outcomes hinge on how teams manage model behavior, data use, and disclosure.",
    failurePatterns: [
      "Opaque model behavior that undermines confidence.",
      "Data use that outpaces customer expectations.",
    ],
    relatedDecisions: ["model-risk", "data-access-boundaries"],
  },
  {
    slug: "strategic-optionality",
    title: "Strategic optionality",
    shortDescription:
      "Room to pivot when the market or the technology changes.",
    longIntro:
      "Optionality comes from decisions about standardization, vendor mix, and internal capabilities.",
    failurePatterns: [
      "Single-vendor dependence that restricts new moves.",
      "Capability gaps that force emergency purchasing.",
    ],
    relatedDecisions: ["standardize-vs-best-of-breed", "vendor-consolidation"],
  },
];

export const getOutcomeBySlug = (slug: string) =>
  outcomes.find((outcome) => outcome.slug === slug);

export const getInsightsByOutcome = (slug: string) =>
  getAllInsights().filter((insight) => insight.outcomes.includes(slug));
