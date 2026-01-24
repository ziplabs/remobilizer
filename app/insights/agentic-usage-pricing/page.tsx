import InsightPage, {
  generateMetadata as generateInsightMetadata,
} from "../[slug]/page";

export const generateMetadata = () =>
  generateInsightMetadata({
    params: Promise.resolve({ slug: "agentic-usage-pricing" }),
  });

export default function AgenticUsagePricingPage() {
  return (
    <InsightPage params={Promise.resolve({ slug: "agentic-usage-pricing" })} />
  );
}
