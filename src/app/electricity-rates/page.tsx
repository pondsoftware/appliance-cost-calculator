import { Metadata } from "next";
import Link from "next/link";
import { STATE_RATES } from "@/data/electricity-rates";
import { US_AVERAGE_RATE } from "@/data/appliances";

export const metadata: Metadata = {
  title: "Electricity Rates by State — 2024 Average Residential Rates",
  description:
    "Compare average residential electricity rates across all 50 US states. See how your state ranks and understand how rates affect your appliance operating costs.",
  alternates: {
    canonical: "https://appliancecostcalculator.net/electricity-rates",
  },
};

const faqData = [
  {
    question: "What is the average electricity rate in the United States?",
    answer:
      "The national average residential electricity rate is approximately $0.16 per kWh as of 2024. However, rates vary dramatically by state, ranging from about $0.10/kWh in states like Idaho and Utah to over $0.38/kWh in Hawaii.",
  },
  {
    question: "Why do electricity rates vary so much by state?",
    answer:
      "Rates depend on the energy sources used (coal, natural gas, nuclear, hydro, renewables), infrastructure costs, regulatory environment, climate (which affects demand), and how deregulated the market is. States with abundant hydroelectric power (like Washington) tend to have lower rates.",
  },
  {
    question: "How do I find my exact electricity rate?",
    answer:
      "Check your most recent electricity bill. Look for the line item showing cost per kWh. You may see tiered rates (different prices for different usage levels) or time-of-use rates (different prices at different times of day). Use the total charges divided by total kWh for your effective rate.",
  },
  {
    question: "Do electricity rates change throughout the year?",
    answer:
      "Yes. Many utilities charge higher rates during summer months when demand peaks due to air conditioning. Time-of-use plans charge more during peak hours (typically 2-8 PM) and less at night. Rates also increase annually — the average has risen about 3-5% per year recently.",
  },
];

export default function ElectricityRatesPage() {
  const sortedRates = [...STATE_RATES].sort((a, b) => b.rate - a.rate);
  const cheapest5 = [...STATE_RATES].sort((a, b) => a.rate - b.rate).slice(0, 5);
  const expensive5 = sortedRates.slice(0, 5);

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Electricity Rates by State",
    description: "Compare average residential electricity rates across all 50 US states. See how your state ranks and understand how rates affect your appliance operating costs.",
    url: "https://appliancecostcalculator.net/electricity-rates",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://appliancecostcalculator.net",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Electricity Rates by State",
                item: "https://appliancecostcalculator.net/electricity-rates",
              },
            ],
          }),
        }}
      />
      <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-sm text-amber-600 hover:text-amber-800 mb-6 inline-block"
        >
          &larr; Back to calculator
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Electricity Rates by State — 2024 Average Residential Rates
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl">
          Your electricity rate is the single biggest factor in how much your
          appliances cost to run. The same refrigerator costs $53/year in Idaho
          but $203/year in Hawaii. Find your state below and use our{" "}
          <Link href="/" className="text-amber-600 hover:underline">
            calculator
          </Link>{" "}
          with your actual rate for precise estimates.
        </p>

        {/* Highlights */}
        <section className="mb-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 text-center">
            <p className="text-sm text-gray-600 mb-1">National Average</p>
            <p className="text-2xl font-bold text-amber-700">${US_AVERAGE_RATE.toFixed(2)}/kWh</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5 text-center">
            <p className="text-sm text-gray-600 mb-1">Cheapest State</p>
            <p className="text-2xl font-bold text-green-700">{cheapest5[0].state}</p>
            <p className="text-sm text-gray-600">${cheapest5[0].rate.toFixed(4)}/kWh</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-5 text-center">
            <p className="text-sm text-gray-600 mb-1">Most Expensive State</p>
            <p className="text-2xl font-bold text-red-700">{expensive5[0].state}</p>
            <p className="text-sm text-gray-600">${expensive5[0].rate.toFixed(4)}/kWh</p>
          </div>
        </section>

        {/* Most and least expensive */}
        <section className="mb-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5 Most Expensive States</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {expensive5.map((s, i) => (
                    <tr key={s.abbr} className={i % 2 === 0 ? "bg-red-50" : "bg-white"}>
                      <td className="px-4 py-2 font-medium text-gray-900">{s.state}</td>
                      <td className="px-4 py-2 text-right text-red-700 font-semibold">${s.rate.toFixed(4)}/kWh</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5 Cheapest States</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {cheapest5.map((s, i) => (
                    <tr key={s.abbr} className={i % 2 === 0 ? "bg-green-50" : "bg-white"}>
                      <td className="px-4 py-2 font-medium text-gray-900">{s.state}</td>
                      <td className="px-4 py-2 text-right text-green-700 font-semibold">${s.rate.toFixed(4)}/kWh</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Full table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            All 50 States + DC — Residential Electricity Rates
          </h2>
          <p className="text-gray-600 mb-4">
            Rates shown are average residential rates from the U.S. Energy Information
            Administration (EIA). Your actual rate may differ based on your utility provider
            and rate plan.
          </p>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-4 py-3 font-semibold text-gray-900">State</th>
                  <th className="px-4 py-3 font-semibold text-gray-900 text-right">Rate ($/kWh)</th>
                  <th className="px-4 py-3 font-semibold text-gray-900 text-right">vs. National Avg</th>
                  <th className="px-4 py-3 font-semibold text-gray-900 text-right">Annual Cost (avg home)</th>
                </tr>
              </thead>
              <tbody>
                {sortedRates.map((s, i) => {
                  const diff = ((s.rate - US_AVERAGE_RATE) / US_AVERAGE_RATE) * 100;
                  const annualCost = s.rate * 10500; // avg US home uses ~10,500 kWh/year
                  return (
                    <tr key={s.abbr} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-2 font-medium text-gray-900">{s.state} ({s.abbr})</td>
                      <td className="px-4 py-2 text-right text-gray-700">${s.rate.toFixed(4)}</td>
                      <td className={`px-4 py-2 text-right font-medium ${diff > 0 ? "text-red-600" : "text-green-600"}`}>
                        {diff > 0 ? "+" : ""}{diff.toFixed(1)}%
                      </td>
                      <td className="px-4 py-2 text-right text-gray-700">${annualCost.toFixed(0)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            *Annual cost based on average US household consumption of 10,500 kWh/year.
          </p>
        </section>

        {/* How rates affect costs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How Electricity Rates Affect Your Appliance Costs
          </h2>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <p className="text-gray-700 mb-4">
              The formula is simple: <strong>Annual Cost = Watts x Hours/Day x 365 / 1000 x Rate</strong>.
              This means your rate is a direct multiplier on every appliance cost. Here&apos;s how the
              same central air conditioner ($3,500W, 8 hrs/day) costs across different rate levels:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left font-semibold">Rate</th>
                    <th className="px-4 py-2 text-left font-semibold">Example State</th>
                    <th className="px-4 py-2 text-right font-semibold">AC Annual Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="px-4 py-2">$0.10/kWh</td>
                    <td className="px-4 py-2 text-gray-600">Idaho</td>
                    <td className="px-4 py-2 text-right font-semibold">${(3.5 * 8 * 365 * 0.10).toFixed(2)}</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">$0.16/kWh</td>
                    <td className="px-4 py-2 text-gray-600">National Average</td>
                    <td className="px-4 py-2 text-right font-semibold">${(3.5 * 8 * 365 * 0.16).toFixed(2)}</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">$0.22/kWh</td>
                    <td className="px-4 py-2 text-gray-600">New York</td>
                    <td className="px-4 py-2 text-right font-semibold">${(3.5 * 8 * 365 * 0.22).toFixed(2)}</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">$0.28/kWh</td>
                    <td className="px-4 py-2 text-gray-600">California</td>
                    <td className="px-4 py-2 text-right font-semibold">${(3.5 * 8 * 365 * 0.28).toFixed(2)}</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">$0.39/kWh</td>
                    <td className="px-4 py-2 text-gray-600">Hawaii</td>
                    <td className="px-4 py-2 text-right font-semibold">${(3.5 * 8 * 365 * 0.39).toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 mt-4">
              Hawaii residents pay nearly 4x more to run the same air conditioner as Idaho residents.
              <Link href="/" className="text-amber-600 hover:underline ml-1">
                Try the calculator
              </Link>{" "}
              with your actual rate to see your real costs.
            </p>
          </div>
        </section>

        {/* Understanding rate structures */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Understanding Rate Structures
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Flat Rate</h3>
              <p className="text-gray-700">
                The simplest structure — you pay the same price per kWh regardless of when or how much
                you use. Most common in regulated markets. Easy to calculate costs with our tool.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tiered Rate</h3>
              <p className="text-gray-700">
                Price per kWh increases as you use more. The first 500 kWh might cost $0.12/kWh, but
                anything over 1,000 kWh could cost $0.20/kWh. This penalizes high usage and incentivizes
                conservation.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Time-of-Use (TOU)</h3>
              <p className="text-gray-700">
                Different rates for different times of day. Peak hours (usually 2-8 PM weekdays) cost
                more, while off-peak (nights and weekends) costs less. Running appliances at night can
                save 20-40%. Great for EV charging and{" "}
                <Link href="/save-energy" className="text-amber-600 hover:underline">scheduling laundry off-peak</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/most-efficient-appliances" className="rounded-lg border border-gray-200 px-4 py-3 hover:border-amber-300 hover:bg-amber-50 transition">
              <p className="font-medium text-gray-900">Most Efficient Appliances</p>
              <p className="text-sm text-gray-500">Complete ranking by annual cost</p>
            </Link>
            <Link href="/save-energy" className="rounded-lg border border-gray-200 px-4 py-3 hover:border-amber-300 hover:bg-amber-50 transition">
              <p className="font-medium text-gray-900">How to Save on Energy Bills</p>
              <p className="text-sm text-gray-500">Practical tips to reduce your bill</p>
            </Link>
            <Link href="/solar-savings" className="rounded-lg border border-gray-200 px-4 py-3 hover:border-amber-300 hover:bg-amber-50 transition">
              <p className="font-medium text-gray-900">Solar Savings Calculator</p>
              <p className="text-sm text-gray-500">Estimate solar offset and payback</p>
            </Link>
            <Link href="/compare" className="rounded-lg border border-gray-200 px-4 py-3 hover:border-amber-300 hover:bg-amber-50 transition">
              <p className="font-medium text-gray-900">Compare Appliances</p>
              <p className="text-sm text-gray-500">Side-by-side cost comparison tool</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqData.map((item, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
