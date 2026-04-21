import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Save on Energy Bills — Practical Tips by Room",
  description:
    "Reduce your electricity bill with these proven energy-saving tips organized by room and appliance type. Estimated annual savings included for each tip.",
  alternates: {
    canonical: "https://appliancecostcalculator.net/save-energy",
  },
};

const faqData = [
  {
    question: "What is the easiest way to lower my electricity bill?",
    answer:
      "The easiest wins are: adjusting your thermostat by 2-3 degrees ($100-200/year savings), switching to LED bulbs ($75+/year for a typical home), and using a smart power strip to eliminate phantom loads ($50-100/year). These require minimal effort and no upfront investment beyond the bulbs.",
  },
  {
    question: "How much can I save by running appliances at off-peak hours?",
    answer:
      "If your utility offers time-of-use rates, running high-draw appliances (dishwasher, laundry, EV charger) during off-peak hours can save 20-40% on those appliances. For an average household, this translates to $200-400 per year in savings.",
  },
  {
    question: "Is it worth upgrading to energy-efficient appliances?",
    answer:
      "For appliances you use daily (refrigerator, HVAC, water heater), upgrading to Energy Star models typically pays back in 2-5 years through energy savings. For rarely-used appliances like a toaster, the savings are too small to justify the cost.",
  },
  {
    question: "Do phantom loads really matter?",
    answer:
      "Yes. The average US home spends $100-200 per year powering devices that are plugged in but not actively in use. Common culprits include game consoles in standby, cable boxes, phone chargers, and older TVs. A smart power strip can eliminate most of this waste.",
  },
];

interface Tip {
  tip: string;
  savings: string;
  detail: string;
}

interface RoomSection {
  room: string;
  icon: string;
  tips: Tip[];
}

const sections: RoomSection[] = [
  {
    room: "Heating & Cooling",
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707",
    tips: [
      {
        tip: "Adjust your thermostat by 2-3°F",
        savings: "$100-200/year",
        detail: "Each degree of adjustment saves roughly 3% on heating/cooling costs. Set to 78°F in summer and 68°F in winter. Use a programmable or smart thermostat to automatically adjust when you're asleep or away.",
      },
      {
        tip: "Use ceiling fans instead of lowering AC",
        savings: "$50-100/year",
        detail: "A ceiling fan costs about $5/year to run and creates a wind-chill effect that lets you raise the thermostat by 4°F with no comfort loss. Remember: fans cool people, not rooms — turn them off when you leave.",
      },
      {
        tip: "Seal air leaks around windows and doors",
        savings: "$100-250/year",
        detail: "Air leaks account for 25-30% of heating and cooling costs in most homes. Weatherstripping and caulking cost under $50 in materials and can save hundreds. Check for drafts around windows, doors, electrical outlets, and attic hatches.",
      },
      {
        tip: "Replace HVAC filters monthly",
        savings: "$50-100/year",
        detail: "A dirty filter restricts airflow, forcing your system to work harder and use more energy. A $5 filter replacement can improve efficiency by 5-15%. Set a monthly reminder.",
      },
      {
        tip: "Use a heat pump instead of electric furnace",
        savings: "$500-1,500/year",
        detail: "Heat pumps are 2-3x more efficient than electric resistance heating in mild climates (above 30°F). Modern cold-climate heat pumps work effectively down to -15°F.",
      },
    ],
  },
  {
    room: "Kitchen",
    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
    tips: [
      {
        tip: "Use an air fryer or toaster oven for small meals",
        savings: "$50-80/year",
        detail: "A full-size electric oven uses 2,500W while an air fryer uses 1,500W for shorter cook times. For meals serving 1-4 people, smaller appliances use 50-75% less energy than heating a full oven.",
      },
      {
        tip: "Run the dishwasher only when full",
        savings: "$40-60/year",
        detail: "A dishwasher uses the same energy whether it's half-full or completely full. Running fewer, full loads saves both water and electricity. Skip the heated dry cycle — open the door and air dry for an extra $20-30 savings.",
      },
      {
        tip: "Keep your refrigerator coils clean",
        savings: "$30-50/year",
        detail: "Dusty condenser coils make your refrigerator work up to 25% harder. Vacuum or brush the coils (usually on the back or bottom) every 6 months. Also set the fridge to 37°F and freezer to 0°F — colder than necessary wastes energy.",
      },
      {
        tip: "Use lids on pots and match burner size",
        savings: "$20-40/year",
        detail: "Cooking with a lid traps heat and reduces cooking time by 25-30%. Using a small pot on a large burner wastes energy heating the air around the pot. Pressure cookers use up to 70% less energy than open simmering.",
      },
    ],
  },
  {
    room: "Laundry",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    tips: [
      {
        tip: "Wash clothes in cold water",
        savings: "$60-100/year",
        detail: "About 90% of a washing machine's energy use goes to heating water. Modern detergents work just as well in cold water for most loads. Reserve hot water for heavily soiled items only.",
      },
      {
        tip: "Clean the dryer lint filter every load",
        savings: "$25-40/year",
        detail: "A clogged lint filter restricts airflow and increases drying time by 10-20%. Also check the exhaust vent annually — a blocked vent wastes energy and is a fire hazard.",
      },
      {
        tip: "Use dryer balls or air-dry when possible",
        savings: "$50-150/year",
        detail: "Wool dryer balls reduce drying time by 10-15% by separating clothes and improving airflow. Air-drying on a rack or clothesline eliminates the $0.50-0.75 cost per dryer load entirely.",
      },
      {
        tip: "Run laundry during off-peak hours",
        savings: "$30-60/year",
        detail: "If your utility offers time-of-use rates, running the washer and dryer in the evening or on weekends (off-peak) can cut the per-load cost by 20-40%.",
      },
    ],
  },
  {
    room: "Lighting",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    tips: [
      {
        tip: "Switch all bulbs to LED",
        savings: "$75-150/year",
        detail: "A 9W LED produces the same light as a 60W incandescent — that's an 85% reduction in energy. With 30+ bulbs in a typical home, switching all to LED saves $75-150/year. LEDs also last 25,000+ hours vs 1,000 for incandescent.",
      },
      {
        tip: "Install motion sensors and timers",
        savings: "$25-50/year",
        detail: "Motion sensors in hallways, bathrooms, and garages ensure lights aren't left on unnecessarily. Outdoor lights on timers or dusk-to-dawn sensors prevent accidental all-night operation.",
      },
      {
        tip: "Use task lighting instead of overhead lights",
        savings: "$20-30/year",
        detail: "A desk lamp with a 7W LED provides focused light exactly where you need it, using far less energy than lighting an entire room with multiple ceiling fixtures.",
      },
    ],
  },
  {
    room: "Electronics & Home Office",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    tips: [
      {
        tip: "Use smart power strips to eliminate phantom loads",
        savings: "$50-100/year",
        detail: "Many devices draw power even when \"off\" — TVs, game consoles, cable boxes, and chargers. A smart power strip cuts power completely to peripherals when the main device is off. The average home has 20-40 phantom loads.",
      },
      {
        tip: "Enable sleep mode on computers and monitors",
        savings: "$30-60/year",
        detail: "A desktop computer uses 200W active vs 3-5W in sleep. Set your monitor to sleep after 5 minutes and computer after 15 minutes of inactivity. Even better, use a laptop (50W) instead of a desktop for everyday tasks.",
      },
      {
        tip: "Unplug chargers when not in use",
        savings: "$10-20/year",
        detail: "Phone chargers, laptop chargers, and power adapters draw 0.5-2W even when nothing is connected. While small individually, a household with 10+ chargers wastes $10-20/year on phantom charging.",
      },
    ],
  },
  {
    room: "Water Heating",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    tips: [
      {
        tip: "Lower water heater temperature to 120°F",
        savings: "$50-100/year",
        detail: "Most water heaters ship set to 140°F, but 120°F is sufficient for most households and reduces standby heat loss. Each 10°F reduction saves 3-5% on water heating costs.",
      },
      {
        tip: "Insulate your water heater tank and pipes",
        savings: "$30-50/year",
        detail: "A water heater blanket ($20-30) reduces standby heat loss by 25-40%. Insulating the first 6 feet of hot water pipes prevents heat loss as water travels to your faucets.",
      },
      {
        tip: "Take shorter showers",
        savings: "$50-80/year",
        detail: "A 10-minute shower uses about 20 gallons of hot water. Cutting to 5 minutes halves your water heating cost for showers. A low-flow showerhead (1.5 GPM vs 2.5 GPM) achieves similar savings without changing habits.",
      },
      {
        tip: "Consider a heat pump water heater",
        savings: "$200-400/year",
        detail: "Heat pump water heaters use 60-70% less electricity than standard electric models. They cost $1,200-2,000 to install but pay back in 3-5 years and qualify for federal tax credits.",
      },
    ],
  },
];

export default function SaveEnergyPage() {
  const totalMinSavings = sections.reduce((total, section) => {
    return total + section.tips.reduce((sectionTotal, tip) => {
      const match = tip.savings.match(/\$(\d+)/);
      return sectionTotal + (match ? parseInt(match[1]) : 0);
    }, 0);
  }, 0);

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Energy Savings Guide",
    description: "Reduce your electricity bill with these proven energy-saving tips organized by room and appliance type. Estimated annual savings included for each tip.",
    url: "https://appliancecostcalculator.net/save-energy",
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
                name: "How to Save on Energy Bills",
                item: "https://appliancecostcalculator.net/save-energy",
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
          How to Save on Energy Bills — Practical Tips by Room
        </h1>
        <p className="text-lg text-gray-600 mb-4 max-w-3xl">
          The average US household spends $1,600+ per year on electricity. With the right
          strategies, you can cut that by 20-40% — saving ${totalMinSavings}+ annually. These tips are
          organized by room with estimated savings for each.
        </p>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Not sure where your money goes? Check our{" "}
          <Link href="/most-efficient-appliances" className="text-amber-600 hover:underline">
            appliance cost rankings
          </Link>{" "}
          to identify your biggest energy consumers, then come back here for targeted savings.
        </p>

        {/* Quick wins summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Wins (Under 10 Minutes)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-semibold text-gray-900">Adjust thermostat 2°F</p>
              <p className="text-sm text-gray-600 mt-1">Takes 30 seconds</p>
              <p className="text-green-700 font-bold mt-2">Save $100-200/yr</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-semibold text-gray-900">Lower water heater to 120°F</p>
              <p className="text-sm text-gray-600 mt-1">Takes 2 minutes</p>
              <p className="text-green-700 font-bold mt-2">Save $50-100/yr</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-semibold text-gray-900">Enable PC sleep mode</p>
              <p className="text-sm text-gray-600 mt-1">Takes 1 minute</p>
              <p className="text-green-700 font-bold mt-2">Save $30-60/yr</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-semibold text-gray-900">Switch to cold water wash</p>
              <p className="text-sm text-gray-600 mt-1">No time cost at all</p>
              <p className="text-green-700 font-bold mt-2">Save $60-100/yr</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-semibold text-gray-900">Turn off heated dry on dishwasher</p>
              <p className="text-sm text-gray-600 mt-1">Takes 10 seconds</p>
              <p className="text-green-700 font-bold mt-2">Save $20-30/yr</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-semibold text-gray-900">Reduce TV brightness</p>
              <p className="text-sm text-gray-600 mt-1">Takes 1 minute</p>
              <p className="text-green-700 font-bold mt-2">Save $10-20/yr</p>
            </div>
          </div>
        </section>

        {/* Detailed sections by room */}
        {sections.map((section) => (
          <section key={section.room} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={section.icon} />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{section.room}</h2>
            </div>
            <div className="space-y-4">
              {section.tips.map((tip, i) => (
                <div key={i} className="bg-white rounded-lg border border-gray-200 p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{tip.tip}</h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800 whitespace-nowrap">
                      {tip.savings}
                    </span>
                  </div>
                  <p className="text-gray-600">{tip.detail}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Internal links */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/most-efficient-appliances" className="rounded-lg border border-gray-200 px-4 py-3 hover:border-amber-300 hover:bg-amber-50 transition">
              <p className="font-medium text-gray-900">Most Efficient Appliances</p>
              <p className="text-sm text-gray-500">See which appliances cost the most to run</p>
            </Link>
            <Link href="/energy-star" className="rounded-lg border border-gray-200 px-4 py-3 hover:border-amber-300 hover:bg-amber-50 transition">
              <p className="font-medium text-gray-900">Energy Star Guide</p>
              <p className="text-sm text-gray-500">Is upgrading worth the cost?</p>
            </Link>
            <Link href="/electricity-rates" className="rounded-lg border border-gray-200 px-4 py-3 hover:border-amber-300 hover:bg-amber-50 transition">
              <p className="font-medium text-gray-900">Electricity Rates by State</p>
              <p className="text-sm text-gray-500">Find your state&apos;s average rate</p>
            </Link>
            <Link href="/solar-savings" className="rounded-lg border border-gray-200 px-4 py-3 hover:border-amber-300 hover:bg-amber-50 transition">
              <p className="font-medium text-gray-900">Solar Savings Calculator</p>
              <p className="text-sm text-gray-500">Could solar eliminate your bill?</p>
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
