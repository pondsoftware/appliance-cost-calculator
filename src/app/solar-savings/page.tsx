import { Metadata } from "next";
import Link from "next/link";
import SolarCalculator from "@/components/SolarCalculator";

export const metadata: Metadata = {
  title: "Solar Savings Calculator — Estimate Solar Panel Payback & Savings",
  description:
    "Calculate how much solar panels can reduce your electricity bill. Estimate solar production, monthly savings, system payback period, and 25-year net savings.",
  alternates: {
    canonical: "https://appliancecostcalculator.net/solar-savings",
  },
};

const faqData = [
  {
    question: "How much can solar panels save on my electricity bill?",
    answer:
      "A typical 6 kW solar system in a sunny area can offset 70-100% of an average household electricity bill, saving $1,000-2,000 per year. Actual savings depend on your location (sun hours), electricity rate, system size, and roof orientation.",
  },
  {
    question: "What is the payback period for solar panels?",
    answer:
      "The average solar panel payback period in the US is 6-10 years after the 30% federal tax credit. In high-rate states like California or Connecticut, payback can be as fast as 4-5 years. After payback, you get free electricity for the remaining 15-20 years of the system's life.",
  },
  {
    question: "How many solar panels do I need for my home?",
    answer:
      "The average US home uses about 900 kWh/month and needs a 6-8 kW system (16-22 panels). To calculate your needs: divide your monthly kWh by (30 days x peak sun hours x 0.80 efficiency) to get the kW system size needed for 100% offset.",
  },
  {
    question: "Do solar panels work on cloudy days?",
    answer:
      "Yes, but at reduced capacity. Solar panels produce 10-25% of their rated output on overcast days. This is already factored into the 'peak sun hours' metric — a city with 4 peak sun hours still has more than 4 hours of daylight, but the diffused light counts for less.",
  },
];

export default function SolarSavingsPage() {
  return (
    <>
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
                name: "Solar Savings Calculator",
                item: "https://appliancecostcalculator.net/solar-savings",
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
          Solar Savings Calculator — How Much Can Solar Panels Save You?
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl">
          Estimate how much solar panels could reduce your electricity bill. Enter your
          monthly bill, local sun hours, and desired system size to see your estimated
          savings, payback period, and 25-year return on investment.
        </p>

        {/* Calculator */}
        <section className="mb-12">
          <SolarCalculator />
        </section>

        {/* How solar affects appliance costs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How Solar Reduces Your Appliance Operating Costs
          </h2>
          <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
            <p className="text-gray-700">
              Solar panels don&apos;t reduce how much energy your appliances use — they reduce how
              much you <em>pay</em> for that energy. When your panels produce electricity during
              the day, your appliances draw from solar instead of the grid, effectively making that
              energy free.
            </p>
            <p className="text-gray-700">
              For example, your{" "}
              <Link href="/central-air-conditioner" className="text-amber-600 hover:underline">
                central air conditioner
              </Link>{" "}
              costs about $1,635/year at $0.16/kWh. With a solar system that covers 80% of your
              usage, that effective cost drops to about $327/year.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm mt-4">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left font-semibold">Appliance</th>
                    <th className="px-4 py-2 text-right font-semibold">Without Solar</th>
                    <th className="px-4 py-2 text-right font-semibold">With 80% Solar</th>
                    <th className="px-4 py-2 text-right font-semibold">Savings</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Central AC", cost: 1635, slug: "central-air-conditioner" },
                    { name: "Electric Water Heater", cost: 788, slug: "electric-water-heater" },
                    { name: "Clothes Dryer", cost: 292, slug: "clothes-dryer" },
                    { name: "Refrigerator", cost: 210, slug: "refrigerator" },
                    { name: "EV Charger", cost: 1681, slug: "ev-charger" },
                  ].map((item, i) => (
                    <tr key={item.slug} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-2">
                        <Link href={`/${item.slug}`} className="text-amber-600 hover:underline">
                          {item.name}
                        </Link>
                      </td>
                      <td className="px-4 py-2 text-right text-gray-700">${item.cost}/yr</td>
                      <td className="px-4 py-2 text-right text-green-700">${Math.round(item.cost * 0.2)}/yr</td>
                      <td className="px-4 py-2 text-right font-semibold text-green-700">${Math.round(item.cost * 0.8)}/yr</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Peak sun hours guide */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Peak Sun Hours by Region
          </h2>
          <p className="text-gray-600 mb-4">
            &ldquo;Peak sun hours&rdquo; measures the equivalent hours of full-strength sunlight per day,
            accounting for morning/evening and cloudy periods. This varies significantly by location.
          </p>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold">Region</th>
                  <th className="px-4 py-3 text-left font-semibold">Peak Sun Hours</th>
                  <th className="px-4 py-3 text-left font-semibold">Example Cities</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-4 py-2 font-medium">Southwest</td>
                  <td className="px-4 py-2 text-gray-700">6-7 hours</td>
                  <td className="px-4 py-2 text-gray-600">Phoenix, Las Vegas, Albuquerque</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-medium">South/Southeast</td>
                  <td className="px-4 py-2 text-gray-700">5-6 hours</td>
                  <td className="px-4 py-2 text-gray-600">Dallas, Atlanta, Miami, Houston</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2 font-medium">Midwest/Mid-Atlantic</td>
                  <td className="px-4 py-2 text-gray-700">4-5 hours</td>
                  <td className="px-4 py-2 text-gray-600">Chicago, Denver, Philadelphia, DC</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-medium">Northeast</td>
                  <td className="px-4 py-2 text-gray-700">3.5-4.5 hours</td>
                  <td className="px-4 py-2 text-gray-600">New York, Boston, Pittsburgh</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2 font-medium">Pacific Northwest</td>
                  <td className="px-4 py-2 text-gray-700">3-4 hours</td>
                  <td className="px-4 py-2 text-gray-600">Seattle, Portland, Anchorage</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Note: Even areas with lower sun hours can benefit from solar, especially if electricity
            rates are high. The Pacific Northwest has low sun hours but high rates — payback is often
            still under 10 years.
          </p>
        </section>

        {/* Key considerations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Key Considerations Before Going Solar
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Federal Tax Credit (30%)</h3>
              <p className="text-gray-700">
                The Inflation Reduction Act provides a 30% federal tax credit on solar installations
                through 2032. This applies to equipment, installation, and battery storage. A $16,500
                system costs effectively $11,550 after the credit.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Net Metering</h3>
              <p className="text-gray-700">
                Most states offer net metering — your utility credits you for excess solar energy
                sent to the grid. This effectively lets you &ldquo;bank&rdquo; daytime production for nighttime
                use. Policies vary by state and utility, so check your local rules.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Roof Condition & Orientation</h3>
              <p className="text-gray-700">
                South-facing roofs produce the most energy. East/west-facing roofs produce about
                80% of a south-facing system. Your roof should be in good condition — replacing a
                roof after solar installation adds significant cost. Shade from trees or buildings
                reduces production.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Battery Storage (Optional)</h3>
              <p className="text-gray-700">
                Adding a battery ($8,000-15,000) lets you store solar energy for nighttime use and
                provides backup during outages. Without a battery, you rely on net metering to credit
                excess production. Batteries make the most sense in areas without net metering or with
                time-of-use rates.
              </p>
            </div>
          </div>
        </section>

        {/* When solar makes sense */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Does Solar Make Sense for You?
          </h2>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <p className="text-gray-700 mb-4">Solar is typically a good investment when:</p>
            <ul className="space-y-2 mb-4">
              <li className="flex gap-2 text-gray-700">
                <span className="text-green-500 shrink-0">&#10003;</span>
                Your electricity bill exceeds $100/month
              </li>
              <li className="flex gap-2 text-gray-700">
                <span className="text-green-500 shrink-0">&#10003;</span>
                Your{" "}
                <Link href="/electricity-rates" className="text-amber-600 hover:underline">
                  electricity rate
                </Link>{" "}
                is above $0.12/kWh
              </li>
              <li className="flex gap-2 text-gray-700">
                <span className="text-green-500 shrink-0">&#10003;</span>
                You have a south-facing roof with minimal shading
              </li>
              <li className="flex gap-2 text-gray-700">
                <span className="text-green-500 shrink-0">&#10003;</span>
                You plan to stay in your home for 7+ years
              </li>
              <li className="flex gap-2 text-gray-700">
                <span className="text-green-500 shrink-0">&#10003;</span>
                Your state offers net metering
              </li>
            </ul>
            <p className="text-gray-700">
              Even if your payback period is 8-10 years, remember that solar panels last 25-30 years.
              After payback, you get 15-20 years of essentially free electricity. Use our{" "}
              <Link href="/most-efficient-appliances" className="text-amber-600 hover:underline">
                appliance cost rankings
              </Link>{" "}
              to see just how much you spend annually on electricity.
            </p>
          </div>
        </section>

        {/* Internal links */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/most-efficient-appliances" className="rounded-lg border border-gray-200 px-4 py-3 hover:border-amber-300 hover:bg-amber-50 transition">
              <p className="font-medium text-gray-900">Most Efficient Appliances</p>
              <p className="text-sm text-gray-500">Which appliances cost the most to run</p>
            </Link>
            <Link href="/electricity-rates" className="rounded-lg border border-gray-200 px-4 py-3 hover:border-amber-300 hover:bg-amber-50 transition">
              <p className="font-medium text-gray-900">Electricity Rates by State</p>
              <p className="text-sm text-gray-500">Higher rates = more solar savings</p>
            </Link>
            <Link href="/save-energy" className="rounded-lg border border-gray-200 px-4 py-3 hover:border-amber-300 hover:bg-amber-50 transition">
              <p className="font-medium text-gray-900">How to Save on Energy Bills</p>
              <p className="text-sm text-gray-500">Reduce usage before going solar</p>
            </Link>
            <Link href="/energy-star" className="rounded-lg border border-gray-200 px-4 py-3 hover:border-amber-300 hover:bg-amber-50 transition">
              <p className="font-medium text-gray-900">Energy Star Guide</p>
              <p className="text-sm text-gray-500">Efficient appliances + solar = maximum savings</p>
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
