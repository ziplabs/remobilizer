import InsightPage, {
  generateMetadata as generateInsightMetadata,
} from "../[slug]/page";

export const generateMetadata = () =>
  generateInsightMetadata({
    params: Promise.resolve({ slug: "build-vs-buy-ai" }),
  });

export default function BuildVsBuyAiPage() {
  return <InsightPage params={Promise.resolve({ slug: "build-vs-buy-ai" })} />;
}
