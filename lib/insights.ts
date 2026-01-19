import insight from "@/content/insights/ai-platform-strategy-standardize-vs-best-of-breed";

export type Insight = typeof insight;

const insights = [insight];

export const getAllInsights = () =>
  [...insights].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

export const getInsightBySlug = (slug: string) =>
  insights.find((item) => item.slug === slug);
