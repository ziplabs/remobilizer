import { getAllInsights } from "@/lib/insights";
import {
  decisions,
  getDecisionBySlug,
  type Decision,
} from "@/app/_content/lenses";

export { decisions, getDecisionBySlug };
export type { Decision };

export const getInsightsByDecision = (slug: string) =>
  getAllInsights().filter((insight) => insight.decisions.includes(slug));
