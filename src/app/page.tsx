import ApplianceList from "@/components/ApplianceList";

export default function Home() {
  return (
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
  );
}
