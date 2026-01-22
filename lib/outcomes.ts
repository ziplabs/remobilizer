import { getAllInsights } from "@/lib/insights";
import {
  outcomes,
  getOutcomeBySlug,
  type Outcome,
} from "@/app/_content/lenses";

export { outcomes, getOutcomeBySlug };
export type { Outcome };

export const getInsightsByOutcome = (slug: string) =>
  getAllInsights().filter((insight) => insight.outcomes.includes(slug));
