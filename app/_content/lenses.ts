export type Outcome = {
  slug: string;
  title: string;
  shortDescription: string;
  longIntro?: string;
  howItShowsUp?: string[];
  failurePatterns?: string[];
  relatedDecisions?: string[];
};

export type DecisionSection = {
  title: string;
  body?: string;
  bullets?: string[];
};

export type Decision = {
  slug: string;
  title: string;
  shortDescription: string;
  longIntro?: string;
  sections?: DecisionSection[];
  relatedOutcomes?: string[];
};

export const outcomes: Outcome[] = [
  {
    slug: "platform-resilience",
    title: "Platform resilience",
    shortDescription:
      "A durable AI and data platform that supports scale without brittle dependencies.",
    longIntro:
      "Leaders are accountable for platform choices that hold up under growth, vendor shifts, and regulatory pressure.",
    howItShowsUp: [
      "An incident forces a platform migration plan that does not exist.",
      "Core services depend on one vendor feature with no fallback.",
      "Teams run parallel stacks after a merger and cannot consolidate.",
    ],
    failurePatterns: [
      "Platform fragmentation that slows delivery and creates duplicated controls.",
      "Vendor dependencies that narrow options when priorities shift.",
    ],
    relatedDecisions: ["standardize-vs-best-of-breed", "build-vs-buy"],
  },
  {
    slug: "risk-and-governance",
    title: "Risk and governance",
    shortDescription:
      "Controls and auditability that satisfy regulators, boards, and customers.",
    longIntro:
      "Governance outcomes depend on the decisions leaders make about access, oversight, and accountability.",
    howItShowsUp: [
      "Audit requests stall because evidence is scattered across teams.",
      "Model approvals happen by exception in Slack threads.",
      "A regulator asks for lineage and no one can produce it.",
    ],
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
    howItShowsUp: [
      "Usage spikes surprise finance because budgets were never tagged.",
      "Teams ship pilots with no view of unit economics.",
      "Optimization work is deferred until after the bill lands.",
    ],
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
    howItShowsUp: [
      "Release trains slip because reviews are batched once a month.",
      "Product teams bypass platform standards to hit launch dates.",
      "Security reviews become the gating item for every release.",
    ],
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
    howItShowsUp: [
      "Customers discover model errors before internal monitoring does.",
      "Support teams cannot explain why outputs changed.",
      "Legal reviews become the slowest step in shipping updates.",
    ],
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
    howItShowsUp: [
      "A vendor raises prices and there is no viable alternative.",
      "A new capability is needed but the platform cannot support it.",
      "Leadership pauses a roadmap because switching costs are unknown.",
    ],
    failurePatterns: [
      "Single-vendor dependence that restricts new moves.",
      "Capability gaps that force emergency purchasing.",
    ],
    relatedDecisions: ["standardize-vs-best-of-breed", "vendor-consolidation"],
  },
];

export const decisions: Decision[] = [
  {
    slug: "standardize-vs-best-of-breed",
    title: "Standardize vs. best-of-breed",
    shortDescription:
      "Balancing operational scale with the flexibility to choose the right tools.",
    longIntro:
      "This decision keeps resurfacing as AI capabilities move faster than centralized platforms can absorb.",
    sections: [
      {
        title: "Where the pressure comes from",
        bullets: [
          "Product teams ship on different stacks to hit launch dates.",
          "Security wants one review path while capability keeps shifting.",
          "Procurement sees six vendors and no consolidated roadmap.",
        ],
      },
      {
        title: "What breaks if you delay the call",
        bullets: [
          "Exceptions become default, and governance credibility erodes.",
          "The platform becomes a catalog, not a standard.",
          "Teams learn to route around controls to keep shipping.",
        ],
      },
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
    sections: [
      {
        title: "Signals it is time to consolidate",
        bullets: [
          "Multiple teams pay for overlapping tools with identical features.",
          "Contracts renew without a clear adoption plan.",
          "Security reviews scale linearly with vendor count.",
        ],
      },
      {
        title: "Tradeoffs that surface immediately",
        bullets: [
          "Migration work competes with product delivery.",
          "Roadmaps slow while teams learn a new platform.",
          "Decommissioning costs are higher than expected.",
        ],
      },
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
    sections: [
      {
        title: "What pushes teams to build",
        bullets: [
          "Vendor roadmaps cannot match a critical product deadline.",
          "Data residency or security constraints block a buy option.",
          "Differentiation depends on internal tooling control.",
        ],
      },
      {
        title: "What pushes teams to buy",
        bullets: [
          "Time-to-market pressure outweighs long-term control.",
          "Operational ownership is unclear for a build path.",
          "Total cost of maintenance is underestimated.",
        ],
      },
      {
        title: "The decision trap",
        body:
          "Owning the stack without owning operations leaves teams with neither speed nor leverage.",
      },
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
    sections: [
      {
        title: "Where it turns political",
        body:
          "The debate shifts from architecture to accountability once teams feel blocked or exposed.",
      },
      {
        title: "Where central control breaks down",
        bullets: [
          "Platform teams become a bottleneck for minor changes.",
          "Exception queues stack up and teams route around them.",
          "Local teams stop trusting centralized guidance.",
        ],
      },
      {
        title: "Where federation creates risk",
        bullets: [
          "Controls diverge across regions and products.",
          "Audit trails live in team-owned tools.",
          "Incident response spans multiple playbooks.",
        ],
      },
    ],
    relatedOutcomes: ["delivery-velocity", "risk-and-governance"],
  },
  {
    slug: "security-gates",
    title: "Security gates",
    shortDescription:
      "Balancing risk controls with delivery timelines.",
    longIntro:
      "Security review often becomes the pacing function for AI delivery.",
    sections: [
      {
        title: "Where queues form",
        bullets: [
          "Manual reviews stack up ahead of release windows.",
          "Teams wait on a single security owner for sign-off.",
          "Controls are tuned for legacy systems, not AI flows.",
        ],
      },
      {
        title: "How teams respond under pressure",
        bullets: [
          "Shadow deployments appear outside the review path.",
          "Evidence collection becomes a scramble at audit time.",
          "Risk posture varies by business unit and product.",
        ],
      },
    ],
    relatedOutcomes: ["risk-and-governance", "delivery-velocity"],
  },
  {
    slug: "when-to-scale",
    title: "When to scale",
    shortDescription:
      "Deciding when pilots become production commitments.",
    longIntro:
      "Many pilots succeed technically but stall when scaled across enterprise operations.",
    sections: [
      {
        title: "What leaders ask before scaling",
        bullets: [
          "Who owns the service when it breaks in production?",
          "Can we support this across every region and product line?",
          "What is the unit economics at steady-state usage?",
        ],
      },
      {
        title: "Where scale stalls",
        bullets: [
          "Governance and support models lag the pilot timeline.",
          "Reliability work is deferred until after launch.",
          "Costs expand faster than adoption plans.",
        ],
      },
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
    sections: [
      {
        title: "What regulators and risk teams scrutinize",
        bullets: [
          "Lineage and audit trails for every model change.",
          "Monitoring for drift, bias, and retraining triggers.",
          "Approval ownership across data, product, and security.",
        ],
      },
      {
        title: "Where ownership blurs",
        bullets: [
          "Model changes ship without a single accountable owner.",
          "Monitoring lives in team tools with no shared dashboard.",
          "Policies lag behind new model capabilities.",
        ],
      },
    ],
    relatedOutcomes: ["risk-and-governance", "customer-trust"],
  },
  {
    slug: "data-access-boundaries",
    title: "Data access boundaries",
    shortDescription:
      "Balancing access with privacy and regulatory obligations.",
    longIntro:
      "Leaders navigate where data can move and how it can be used in AI systems.",
    sections: [
      {
        title: "Where exceptions happen",
        bullets: [
          "Product teams request new data sources for pilots.",
          "Regional rules conflict with global platform defaults.",
          "Access approvals are handled case by case.",
        ],
      },
      {
        title: "What compliance needs from leaders",
        bullets: [
          "Clear boundaries for where data can be copied or used.",
          "Repeatable approvals with documented rationale.",
          "Visibility into who accessed what and why.",
        ],
      },
    ],
    relatedOutcomes: ["customer-trust", "risk-and-governance"],
  },
];

export const getOutcomeBySlug = (slug: string) =>
  outcomes.find((outcome) => outcome.slug === slug);

export const getDecisionBySlug = (slug: string) =>
  decisions.find((decision) => decision.slug === slug);
