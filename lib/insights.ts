import standardizeVsBestOfBreed from "@/content/insights/standardize-vs-best-of-breed";
import whyAiIsntFixingCoreChallenges from "@/content/insights/why-ai-isnt-fixing-core-challenges-enterprise-software";
import aiRevenueGrowth from "@/content/insights/ai-revenue-growth";
import buildVsBuyAi from "@/content/insights/build-vs-buy-ai";
import agenticUsagePricing from "@/content/insights/agentic-usage-pricing";

export type Insight = typeof standardizeVsBestOfBreed;

const insights = [
  aiRevenueGrowth,
  buildVsBuyAi,
  agenticUsagePricing,
  whyAiIsntFixingCoreChallenges,
  standardizeVsBestOfBreed,
];

export const getAllInsights = () =>
  [...insights].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

export const getInsightBySlug = (slug: string) =>
  insights.find((item) => item.slug === slug);
