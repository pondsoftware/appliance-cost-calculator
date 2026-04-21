import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Energy Star Appliance Guide — Ratings, Savings & ROI",
  description:
    "Understand Energy Star ratings and how much you can save. Comparison table showing Energy Star vs standard efficiency for major appliance types with ROI calculations.",
  alternates: {
    canonical: "https://appliancecostcalculator.net/energy-star",
  },
};

const faqData = [
  {
    question: "What does the Energy Star label mean?",
    answer:
      "Energy Star is a certification program run by the U.S. Environmental Protection Agency (EPA). Appliances with this label meet strict energy efficiency guidelines — typically using 10-50% less energy than standard models. The label appears on everything from refrigerators to light bulbs to entire homes.",
  },
  {
    question: "Are Energy Star appliances worth the extra cost?",
    answer:
      "In most cases, yes. Energy Star appliances cost 5-15% more upfront but save 10-50% on operating costs annually. For high-use appliances like refrigerators, HVAC systems, and water heaters, the payback period is typically 1-4 years, after which you profit from lower bills for the remaining life of the appliance.",
  },
  {
    question: "Which Energy Star upgrades save the most money?",
    answer:
      "The biggest savings come from: heat pump water heaters ($200-400/year savings), Energy Star HVAC systems ($150-300/year), Energy Star refrigerators vs 15+ year old models ($100-150/year), and switching to Energy Star certified LED bulbs ($75-150/year for a whole home).",
  },
  {
    question: "How do I verify if an appliance is truly Energy Star certified?",
    answer:
      "Look for the blue Energy Star label on the product or packaging. You can also verify any product on the official Energy Star website (energystar.gov) by searching the brand and model number. Be wary of knock-off labels — the genuine Energy Star logo is a registered certification mark.",
  },
];

interface ComparisonRow {
  appliance: string;
  standardWatts: number;
  energyStarWatts: number;
  hoursPerDay: number;
  savingsPercent: number;
  annualSavings: number;
  upgradeCost: number;
  paybackYears: number;
}

const comparisonData: ComparisonRow[] = [
  {
    appliance: "Refrigerator",
    standardWatts: 200,
    energyStarWatts: 130,
    hoursPerDay: 24,
    savingsPercent: 35,
    annualSavings: 59,
    upgradeCost: 150,
    paybackYears: 2.5,
  },
  {
    appliance: "Clothes Washer",
    standardWatts: 500,
    energyStarWatts: 350,
    hoursPerDay: 1,
    savingsPercent: 30,
    annualSavings: 26,
    upgradeCost: 100,
    paybackYears: 3.8,
  },
  {
    appliance: "Dishwasher",
    standardWatts: 1800,
    energyStarWatts: 1400,
    hoursPerDay: 1,
    savingsPercent: 22,
    annualSavings: 23,
    upgradeCost: 75,
    paybackYears: 3.3,
  },
  {
    appliance: "Dehumidifier",
    standardWatts: 600,
    energyStarWatts: 500,
    hoursPerDay: 12,
    savingsPercent: 17,
    annualSavings: 70,
    upgradeCost: 80,
    paybackYears: 1.1,
  },
  {
    appliance: "Central AC (3-ton)",
    standardWatts: 3500,
    energyStarWatts: 2800,
    hoursPerDay: 8,
    savingsPercent: 20,
    annualSavings: 163,
    upgradeCost: 500,
    paybackYears: 3.1,
  },
  {
    appliance: "Electric Water Heater",
    standardWatts: 4500,
    energyStarWatts: 1800,
    hoursPerDay: 3,
    savingsPercent: 60,
    annualSavings: 284,
    upgradeCost: 800,
    paybackYears: 2.8,
  },
  {
    appliance: "Clothes Dryer",
    standardWatts: 5000,
    energyStarWatts: 4000,
    hoursPerDay: 1,
    savingsPercent: 20,
    annualSavings: 58,
    upgradeCost: 200,
    paybackYears: 3.4,
  },
  {
    appliance: "Window AC Unit",
    standardWatts: 1200,
    energyStarWatts: 950,
    hoursPerDay: 8,
    savingsPercent: 21,
    annualSavings: 117,
    upgradeCost: 80,
    paybackYears: 0.7,
  },
];

export default function EnergyStarPage() {
  const totalAnnualSavings = comparisonData.reduce((sum, row) => sum + row.annualSavings, 0);

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Energy Star Appliance Guide",
    description: "Understand Energy Star ratings and how much you can save. Comparison table showing Energy Star vs standard efficiency for major appliance types with ROI calculations.",
    url: "https://appliancecostcalculator.net/energy-star",
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
                name: "Energy Star Guide",
                item: "https://appliancecostcalculator.net/energy-star",
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
          Energy Star Appliance Guide — Ratings, Savings & ROI
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl">
          Energy Star certified appliances use 10-60% less energy than standard models.
          This guide explains what Energy Star means, shows exactly how much you can save
          on each appliance type, and helps you calculate the return on investment for upgrades.
        </p>

        {/* Key stats */}
        <section className="mb-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 text-center">
            <p className="text-sm text-gray-600 mb-1">Typical Energy Savings</p>
            <p className="text-2xl font-bold text-blue-700">10-50%</p>
            <p className="text-sm text-gray-500">vs. standard models</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5 text-center">
            <p className="text-sm text-gray-600 mb-1">Potential Annual Savings</p>
            <p className="text-2xl font-bold text-green-700">${totalAnnualSavings}+</p>
            <p className="text-sm text-gray-500">all appliances combined</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 text-center">
            <p className="text-sm text-gray-600 mb-1">Average Payback Period</p>
            <p className="text-2xl font-bold text-amber-700">2-4 years</p>
            <p className="text-sm text-gray-500">then pure savings</p>
          </div>
        </section>

        {/* What is Energy Star */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is Energy Star?</h2>
          <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
            <p className="text-gray-700">
              Energy Star is a voluntary certification program established in 1992 by the U.S.
              Environmental Protection Agency (EPA). Products that earn the Energy Star label
              must meet strict energy efficiency specifications set by the EPA — typically
              performing 10-50% better than minimum federal standards.
            </p>
            <p className="text-gray-700">
              The program covers over 75 product categories including:
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                Refrigerators & freezers
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                HVAC systems
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                Water heaters
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                Washers & dryers
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                Dishwashers
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                TVs & monitors
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                Light bulbs
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                Computers
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                Windows & doors
              </li>
            </ul>
          </div>
        </section>

        {/* Comparison table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Energy Star vs. Standard — Comparison Table
          </h2>
          <p className="text-gray-600 mb-4">
            Based on typical wattage at the US average rate of $0.16/kWh. Savings will be higher
            in states with{" "}
            <Link href="/electricity-rates" className="text-amber-600 hover:underline">higher electricity rates</Link>.
          </p>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-4 py-3 font-semibold text-gray-900">Appliance</th>
                  <th className="px-4 py-3 font-semibold text-gray-900 text-right">Standard</th>
                  <th className="px-4 py-3 font-semibold text-gray-900 text-right">Energy Star</th>
                  <th className="px-4 py-3 font-semibold text-gray-900 text-right">Savings %</th>
                  <th className="px-4 py-3 font-semibold text-gray-900 text-right">$/Year Saved</th>
                  <th className="px-4 py-3 font-semibold text-gray-900 text-right">Payback</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData
                  .sort((a, b) => b.annualSavings - a.annualSavings)
                  .map((row, i) => (
                    <tr key={row.appliance} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-gray-900">{row.appliance}</td>
                      <td className="px-4 py-3 text-right text-gray-700">{row.standardWatts.toLocaleString()}W</td>
                      <td className="px-4 py-3 text-right text-green-700 font-medium">{row.energyStarWatts.toLocaleString()}W</td>
                      <td className="px-4 py-3 text-right text-gray-700">{row.savingsPercent}%</td>
                      <td className="px-4 py-3 text-right font-semibold text-green-700">${row.annualSavings}</td>
                      <td className="px-4 py-3 text-right text-gray-700">{row.paybackYears} yr</td>
                    </tr>
                  ))}
              </tbody>
              <tfoot>
                <tr className="bg-green-50 border-t border-green-200">
                  <td className="px-4 py-3 font-bold text-gray-900" colSpan={4}>Total Annual Savings (all appliances)</td>
                  <td className="px-4 py-3 text-right font-bold text-green-700">${totalAnnualSavings}</td>
                  <td className="px-4 py-3"></td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            *Upgrade cost represents the typical price premium for Energy Star over standard models, not total appliance cost.
            Payback period = upgrade cost / annual savings.
          </p>
        </section>

        {/* Categories with biggest savings */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Where Energy Star Saves the Most
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                1. Water Heating (60% savings)
              </h3>
              <p className="text-gray-700">
                Energy Star heat pump water heaters are the single biggest upgrade you can make.
                They use 60% less electricity by extracting heat from the surrounding air rather
                than generating it directly. Savings: <strong>$200-400/year</strong>. The federal
                tax credit can cover a significant portion of the installation cost.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                2. HVAC / Cooling (20-40% savings)
              </h3>
              <p className="text-gray-700">
                Energy Star certified central AC and heat pump systems use 15-20% less energy than
                standard systems. For homes in hot climates where AC runs 6-10 hours/day, this
                translates to <strong>$150-300/year</strong> in savings. Variable-speed compressors
                in Energy Star models also provide better comfort.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                3. Refrigeration (35% savings)
              </h3>
              <p className="text-gray-700">
                Since refrigerators run 24/7, even small efficiency gains compound significantly.
                Replacing a 10+ year old refrigerator with an Energy Star model saves{" "}
                <strong>$50-150/year</strong> depending on the age of the old unit. A 2005-era fridge
                can use 2-3x more energy than a current Energy Star model.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                4. Lighting (75-85% savings)
              </h3>
              <p className="text-gray-700">
                Energy Star certified LED bulbs use 75-85% less energy than incandescent bulbs and
                last 15-25x longer. A home with 30 bulbs switching from incandescent to LED saves{" "}
                <strong>$75-150/year</strong>. The bulbs pay for themselves in under 6 months.
                Check our <Link href="/led-bulb" className="text-amber-600 hover:underline">LED bulb cost calculator</Link> for exact numbers.
              </p>
            </div>
          </div>
        </section>

        {/* ROI section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Calculating Your ROI on Energy Star Upgrades
          </h2>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <p className="text-gray-700 mb-4">
              To determine if an Energy Star upgrade makes financial sense, use this formula:
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-4 font-mono text-sm">
              <p>Payback Period = (Energy Star Price - Standard Price) / Annual Energy Savings</p>
              <p className="mt-2">ROI = Annual Savings / Extra Cost x 100</p>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Rule of thumb:</strong> If the payback period is less than 1/3 of the
              appliance&apos;s expected lifespan, it&apos;s a good investment. Most major appliances last
              10-20 years, so anything with a payback under 5 years is a strong buy.
            </p>
            <p className="text-gray-700">
              <strong>Don&apos;t forget tax credits.</strong> Many Energy Star products qualify for
              federal tax credits (up to $2,000 for heat pumps) and state/utility rebates that
              further reduce your effective cost and shorten the payback period.
            </p>
          </div>
        </section>

        {/* How to identify */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Identify Energy Star Appliances
          </h2>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-amber-500 mt-0.5 shrink-0 font-bold">1.</span>
                <span className="text-gray-700"><strong>Blue Energy Star label</strong> — Look for the distinctive blue and white star logo on the product, packaging, or spec sheet.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 mt-0.5 shrink-0 font-bold">2.</span>
                <span className="text-gray-700"><strong>EnergyGuide yellow label</strong> — This separate label (required by law on major appliances) shows estimated annual operating cost and compares it to similar models.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 mt-0.5 shrink-0 font-bold">3.</span>
                <span className="text-gray-700"><strong>Verify online</strong> — Search the model at energystar.gov/productfinder to confirm certification and see efficiency details.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 mt-0.5 shrink-0 font-bold">4.</span>
                <span className="text-gray-700"><strong>Most Efficient designation</strong> — Some products earn &ldquo;Energy Star Most Efficient&rdquo; — these represent the top 1-5% in efficiency within their category.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Internal links */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/most-efficient-appliances" className="rounded-lg border border-gray-200 px-4 py-3 hover:border-amber-300 hover:bg-amber-50 transition">
              <p className="font-medium text-gray-900">Most Efficient Appliances</p>
              <p className="text-sm text-gray-500">Full ranking by annual operating cost</p>
            </Link>
            <Link href="/save-energy" className="rounded-lg border border-gray-200 px-4 py-3 hover:border-amber-300 hover:bg-amber-50 transition">
              <p className="font-medium text-gray-900">How to Save on Energy Bills</p>
              <p className="text-sm text-gray-500">Tips beyond just upgrading appliances</p>
            </Link>
            <Link href="/electricity-rates" className="rounded-lg border border-gray-200 px-4 py-3 hover:border-amber-300 hover:bg-amber-50 transition">
              <p className="font-medium text-gray-900">Electricity Rates by State</p>
              <p className="text-sm text-gray-500">Higher rates = faster Energy Star payback</p>
            </Link>
            <Link href="/" className="rounded-lg border border-gray-200 px-4 py-3 hover:border-amber-300 hover:bg-amber-50 transition">
              <p className="font-medium text-gray-900">Appliance Cost Calculator</p>
              <p className="text-sm text-gray-500">Calculate your exact appliance costs</p>
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
