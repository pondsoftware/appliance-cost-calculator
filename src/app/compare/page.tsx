import { Metadata } from "next";
import CompareCalculator from "@/components/CompareCalculator";

export const metadata: Metadata = {
  title: "Compare Appliance Electricity Costs Side by Side",
  description:
    "Compare the electricity costs of 2-3 appliances side by side. See which appliances cost more to run daily, monthly, and yearly based on your electricity rate.",
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Appliance Cost Comparison",
  description: "Compare the electricity costs of 2-3 appliances side by side. See which appliances cost more to run daily, monthly, and yearly based on your electricity rate.",
  url: "https://appliancecostcalculator.net/compare",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function ComparePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} />
      <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Compare Appliance Electricity Costs
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl">
        Select 2-3 appliances to compare their electricity costs side by side.
        See which ones are costing you the most and where you can save.
      </p>

      <CompareCalculator />
    </div>
    </>
  );
}
