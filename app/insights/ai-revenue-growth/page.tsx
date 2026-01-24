import InsightPage, {
  generateMetadata as generateInsightMetadata,
} from "../[slug]/page";

export const generateMetadata = () =>
  generateInsightMetadata({
    params: Promise.resolve({ slug: "ai-revenue-growth" }),
  });

export default function AiRevenueGrowthPage() {
  return <InsightPage params={Promise.resolve({ slug: "ai-revenue-growth" })} />;
}
