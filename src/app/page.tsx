import ApplianceList from "@/components/ApplianceList";

const faqData = [
  {
    question: "How much does it cost to run an appliance?",
    answer: "The cost depends on wattage, hours used, and your electricity rate. Use our calculator above — select any appliance and adjust your local rate to see daily, monthly, and yearly costs."
  },
  {
    question: "What is the average electricity rate in the US?",
    answer: "The national average is about $0.16 per kWh, but rates vary widely by state — from $0.10 in states like Idaho to over $0.30 in Hawaii and Connecticut."
  },
  {
    question: "Which appliances use the most electricity?",
    answer: "Central air conditioners, electric water heaters, and clothes dryers are typically the biggest energy consumers. Space heaters and pool pumps also draw significant power."
  },
  {
    question: "How can I reduce my electricity bill?",
    answer: "Use LED bulbs, unplug devices when not in use, run dishwashers and laundry during off-peak hours, and consider upgrading to Energy Star rated appliances."
  },
  {
    question: "How do I find my appliance's wattage?",
    answer: "Check the label on the back or bottom of the appliance, look in the owner's manual, or search the model number online. You can also use a kill-a-watt meter for exact readings."
  }
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />
      <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How Much Does It Cost to Run Your Appliances?
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Select an appliance below to calculate exactly how much it costs to
            run per day, month, and year based on your electricity rate. All
            wattages are pre-loaded with typical values — just adjust to match your
            setup.
          </p>
        </div>
        <ApplianceList />
      </div>

      <section className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
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
    </>
  );
}
