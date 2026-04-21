import { Metadata } from "next";
import Link from "next/link";
import { appliances, categories, US_AVERAGE_RATE } from "@/data/appliances";

export const metadata: Metadata = {
  title: "Most Energy Efficient Appliances — Ranked by Annual Cost",
  description:
    "See which appliances cost the most and least to run. Complete ranking of 30+ common appliances by annual electricity cost, grouped by category with energy-saving tips.",
  alternates: {
    canonical: "https://appliancecostcalculator.net/most-efficient-appliances",
  },
};

const faqData = [
  {
    question: "Which home appliance uses the most electricity?",
    answer:
      "Electric furnaces, EV chargers, and central air conditioners are typically the most expensive appliances to operate. An electric furnace can cost over $3,500 per year, while central AC costs around $1,600 annually at average rates.",
  },
  {
    question: "What is the cheapest appliance to run?",
    answer:
      "LED light bulbs, Wi-Fi routers, and laptop computers are among the cheapest to run. An LED bulb costs about $2.63 per year, and a Wi-Fi router costs roughly $17 per year despite running 24/7.",
  },
  {
    question: "How do I calculate my appliance's annual electricity cost?",
    answer:
      "Multiply the wattage by hours used per day, divide by 1,000 to get kWh, then multiply by your electricity rate and 365 days. For example: 1,500W x 8 hrs / 1,000 x $0.16 x 365 = $700.80/year.",
  },
  {
    question: "Does turning off appliances save money?",
    answer:
      "Yes. Even reducing usage by one hour per day on a high-wattage appliance like a space heater (1,500W) saves about $88 per year. Using smart power strips to eliminate phantom loads can save $100-200 annually.",
  },
];

export default function MostEfficientAppliancesPage() {
  const appliancesWithCost = appliances.map((a) => {
    const dailyKwh = (a.watts * a.typicalHoursPerDay) / 1000;
    const yearlyCost = dailyKwh * US_AVERAGE_RATE * 365;
    const monthlyCost = dailyKwh * US_AVERAGE_RATE * 30;
    return { ...a, dailyKwh, yearlyCost, monthlyCost };
  });

  const sortedByYearlyCost = [...appliancesWithCost].sort(
    (a, b) => b.yearlyCost - a.yearlyCost
  );

  const top5Expensive = sortedByYearlyCost.slice(0, 5);
  const top5Cheapest = sortedByYearlyCost.slice(-5).reverse();

  const byCategory = categories.map((cat) => ({
    category: cat,
    appliances: appliancesWithCost
      .filter((a) => a.category === cat)
      .sort((a, b) => b.yearlyCost - a.yearlyCost),
  }));

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Most Energy Efficient Appliances",
    description: "See which appliances cost the most and least to run. Complete ranking of 30+ common appliances by annual electricity cost, grouped by category with energy-saving tips.",
    url: "https://appliancecostcalculator.net/most-efficient-appliances",
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
                name: "Most Energy Efficient Appliances",
                item: "https://appliancecostcalculator.net/most-efficient-appliances",
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
          Most Energy Efficient Appliances — Ranked by Annual Cost
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl">
          Which appliances cost the most to run? We ranked every appliance by
          estimated annual electricity cost using typical daily usage at the US
          average rate of ${US_AVERAGE_RATE}/kWh. Use this guide to find where
          your money goes and where you can save the most.
        </p>

        {/* Most expensive */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Top 5 Most Expensive Appliances to Run
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-red-100 text-left">
                  <th className="px-4 py-3 font-semibold text-gray-900">Appliance</th>
                  <th className="px-4 py-3 font-semibold text-gray-900 text-right">Watts</th>
                  <th className="px-4 py-3 font-semibold text-gray-900 text-right">Hrs/Day</th>
                  <th className="px-4 py-3 font-semibold text-gray-900 text-right">Annual Cost</th>
                </tr>
              </thead>
              <tbody>
                {top5Expensive.map((a, i) => (
                  <tr key={a.slug} className={i % 2 === 0 ? "bg-red-50" : "bg-white"}>
                    <td className="px-4 py-3">
                      <Link href={`/${a.slug}`} className="text-amber-600 hover:underline font-medium">
                        {a.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-right text-gray-700">{a.watts.toLocaleString()}W</td>
                    <td className="px-4 py-3 text-right text-gray-700">{a.typicalHoursPerDay}</td>
                    <td className="px-4 py-3 text-right font-semibold text-red-700">${a.yearlyCost.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Cheapest */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Top 5 Cheapest Appliances to Run
          </h2>
          <div className="bg-green-50 border border-green-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-green-100 text-left">
                  <th className="px-4 py-3 font-semibold text-gray-900">Appliance</th>
                  <th className="px-4 py-3 font-semibold text-gray-900 text-right">Watts</th>
                  <th className="px-4 py-3 font-semibold text-gray-900 text-right">Hrs/Day</th>
                  <th className="px-4 py-3 font-semibold text-gray-900 text-right">Annual Cost</th>
                </tr>
              </thead>
              <tbody>
                {top5Cheapest.map((a, i) => (
                  <tr key={a.slug} className={i % 2 === 0 ? "bg-green-50" : "bg-white"}>
                    <td className="px-4 py-3">
                      <Link href={`/${a.slug}`} className="text-amber-600 hover:underline font-medium">
                        {a.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-right text-gray-700">{a.watts.toLocaleString()}W</td>
                    <td className="px-4 py-3 text-right text-gray-700">{a.typicalHoursPerDay}</td>
                    <td className="px-4 py-3 text-right font-semibold text-green-700">${a.yearlyCost.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Full ranking table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Complete Ranking — All Appliances by Annual Cost
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-4 py-3 font-semibold text-gray-900">#</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Appliance</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Category</th>
                  <th className="px-4 py-3 font-semibold text-gray-900 text-right">Watts</th>
                  <th className="px-4 py-3 font-semibold text-gray-900 text-right">Hrs/Day</th>
                  <th className="px-4 py-3 font-semibold text-gray-900 text-right">Monthly</th>
                  <th className="px-4 py-3 font-semibold text-gray-900 text-right">Annual</th>
                </tr>
              </thead>
              <tbody>
                {sortedByYearlyCost.map((a, i) => (
                  <tr key={a.slug} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 text-gray-500">{i + 1}</td>
                    <td className="px-4 py-3">
                      <Link href={`/${a.slug}`} className="text-amber-600 hover:underline font-medium">
                        {a.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-gray-500">{a.category}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{a.watts.toLocaleString()}W</td>
                    <td className="px-4 py-3 text-right text-gray-700">{a.typicalHoursPerDay}</td>
                    <td className="px-4 py-3 text-right text-gray-700">${a.monthlyCost.toFixed(2)}</td>
                    <td className="px-4 py-3 text-right font-semibold text-gray-900">${a.yearlyCost.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* By category */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Cost Rankings by Category
          </h2>
          <div className="space-y-8">
            {byCategory.map(({ category, appliances: catAppliances }) => (
              <div key={category}>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{category}</h3>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 text-left">
                        <th className="px-4 py-2 font-semibold text-gray-900">Appliance</th>
                        <th className="px-4 py-2 font-semibold text-gray-900 text-right">Watts</th>
                        <th className="px-4 py-2 font-semibold text-gray-900 text-right">Annual Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {catAppliances.map((a, i) => (
                        <tr key={a.slug} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="px-4 py-2">
                            <Link href={`/${a.slug}`} className="text-amber-600 hover:underline">
                              {a.name}
                            </Link>
                          </td>
                          <td className="px-4 py-2 text-right text-gray-700">{a.watts.toLocaleString()}W</td>
                          <td className="px-4 py-2 text-right font-semibold text-gray-900">${a.yearlyCost.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Tips for Reducing Energy Costs
          </h2>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-green-500 mt-0.5 shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700"><strong>Target the biggest consumers first.</strong> HVAC, water heating, and clothes dryers account for 60%+ of most electricity bills. Even a 10% reduction in these areas saves more than eliminating small electronics entirely.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-500 mt-0.5 shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700"><strong>Reduce usage hours, not just wattage.</strong> A programmable thermostat, timers on pool pumps, and sleep modes on electronics all cut the hours your appliances draw power.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-500 mt-0.5 shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700"><strong>Upgrade strategically.</strong> Replacing a 15-year-old refrigerator with an <Link href="/energy-star" className="text-amber-600 hover:underline">Energy Star model</Link> saves $100+/year. Focus upgrades on appliances you use heavily.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-500 mt-0.5 shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700"><strong>Check your electricity rate.</strong> Your <Link href="/electricity-rates" className="text-amber-600 hover:underline">state electricity rate</Link> dramatically affects costs. Residents in Hawaii pay 4x more than Idaho residents for the same usage.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-500 mt-0.5 shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700"><strong>Consider solar.</strong> If your annual appliance costs exceed $2,000, <Link href="/solar-savings" className="text-amber-600 hover:underline">solar panels</Link> may pay for themselves in 5-8 years and eliminate most of your bill.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Internal links */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/save-energy" className="rounded-lg border border-gray-200 px-4 py-3 hover:border-amber-300 hover:bg-amber-50 transition">
              <p className="font-medium text-gray-900">How to Save on Energy Bills</p>
              <p className="text-sm text-gray-500">Practical tips by room and appliance type</p>
            </Link>
            <Link href="/electricity-rates" className="rounded-lg border border-gray-200 px-4 py-3 hover:border-amber-300 hover:bg-amber-50 transition">
              <p className="font-medium text-gray-900">Electricity Rates by State</p>
              <p className="text-sm text-gray-500">See how your state compares</p>
            </Link>
            <Link href="/energy-star" className="rounded-lg border border-gray-200 px-4 py-3 hover:border-amber-300 hover:bg-amber-50 transition">
              <p className="font-medium text-gray-900">Energy Star Guide</p>
              <p className="text-sm text-gray-500">Understanding efficiency ratings</p>
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
