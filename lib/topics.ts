import { getAllInsights } from "@/lib/insights";

export type Topic = {
  slug: string;
  title: string;
  description: string;
};

export const topics: Topic[] = [
  {
    slug: "ai-strategy",
    title: "AI Strategy",
    description: "Leadership decisions on where AI fits, where it does not, and why.",
  },
  {
    slug: "platform-strategy",
    title: "Platform Strategy",
    description: "Standardize vs. best-of-breed, platform ownership, and optionality.",
  },
  {
    slug: "enterprise-architecture",
    title: "Enterprise Architecture",
    description: "Foundational choices that shape scale, integration, and resilience.",
  },
  {
    slug: "security-governance",
    title: "Security & Governance",
    description: "Risk, auditability, and the controls that hold up to scrutiny.",
  },
  {
    slug: "operating-model",
    title: "Operating Model",
    description: "Where accountability sits and how execution actually gets done.",
  },
  {
    slug: "cost-economics",
    title: "Cost & Economics",
    description: "Unit economics, spend visibility, and the cost of speed.",
  },
];

export const normalizeToSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export const getTopicBySlug = (slug: string) =>
  topics.find((topic) => topic.slug === slug);

export const getInsightsByTopic = (slug: string) => {
  const normalizedSlug = normalizeToSlug(slug);
  return getAllInsights().filter((insight) =>
    insight.tags.some(
      (tag) => normalizeToSlug(tag) === normalizedSlug || tag === slug,
    ),
  );
};
