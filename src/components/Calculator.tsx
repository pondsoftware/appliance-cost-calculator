"use client";

import { useState } from "react";
import { Appliance, US_AVERAGE_RATE } from "@/data/appliances";

interface CalculatorProps {
  appliance: Appliance;
}

export default function Calculator({ appliance }: CalculatorProps) {
  const [watts, setWatts] = useState(appliance.watts);
  const [hoursPerDay, setHoursPerDay] = useState(appliance.typicalHoursPerDay);
  const [rate, setRate] = useState(US_AVERAGE_RATE);

  const dailyKwh = (watts * hoursPerDay) / 1000;
  const dailyCost = dailyKwh * rate;
  const monthlyCost = dailyCost * 30;
  const yearlyCost = dailyCost * 365;
  const monthlyKwh = dailyKwh * 30;
  const yearlyKwh = dailyKwh * 365;

  return (
    <div className="space-y-8">
      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label
            htmlFor="watts"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Wattage
          </label>
          <div className="relative">
            <input
              id="watts"
              type="number"
              value={watts}
              onChange={(e) => setWatts(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              min={0}
              step={10}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              watts
            </span>
          </div>
        </div>
        <div>
          <label
            htmlFor="hours"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Hours per day
          </label>
          <div className="relative">
            <input
              id="hours"
              type="number"
              value={hoursPerDay}
              onChange={(e) => setHoursPerDay(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              min={0}
              max={24}
              step={0.5}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              hrs/day
            </span>
          </div>
        </div>
        <div>
          <label
            htmlFor="rate"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Electricity rate
          </label>
          <div className="relative">
            <input
              id="rate"
              type="number"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              min={0}
              step={0.01}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              $/kWh
            </span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ResultCard
          period="Daily"
          cost={dailyCost}
          kwh={dailyKwh}
          color="blue"
        />
        <ResultCard
          period="Monthly"
          cost={monthlyCost}
          kwh={monthlyKwh}
          color="green"
        />
        <ResultCard
          period="Yearly"
          cost={yearlyCost}
          kwh={yearlyKwh}
          color="purple"
        />
      </div>

      {/* Comparison */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h3 className="font-semibold text-amber-900 mb-2">
          For perspective...
        </h3>
        <p className="text-amber-800">{getComparison(yearlyCost)}</p>
      </div>
    </div>
  );
}

function ResultCard({
  period,
  cost,
  kwh,
  color,
}: {
  period: string;
  cost: number;
  kwh: number;
  color: "blue" | "green" | "purple";
}) {
  const colors = {
    blue: "bg-blue-50 border-blue-200",
    green: "bg-green-50 border-green-200",
    purple: "bg-purple-50 border-purple-200",
  };
  const textColors = {
    blue: "text-blue-900",
    green: "text-green-900",
    purple: "text-purple-900",
  };
  const subColors = {
    blue: "text-blue-600",
    green: "text-green-600",
    purple: "text-purple-600",
  };

  return (
    <div className={`rounded-lg border p-6 text-center ${colors[color]}`}>
      <p className={`text-sm font-medium ${subColors[color]} mb-1`}>
        {period} Cost
      </p>
      <p className={`text-3xl font-bold ${textColors[color]}`}>
        ${cost.toFixed(2)}
      </p>
      <p className={`text-sm ${subColors[color]} mt-1`}>
        {kwh.toFixed(1)} kWh
      </p>
    </div>
  );
}

function getComparison(yearlyCost: number): string {
  if (yearlyCost < 5)
    return `At $${yearlyCost.toFixed(2)}/year, this appliance costs less than a single cup of coffee per month. Not worth worrying about.`;
  if (yearlyCost < 25)
    return `At $${yearlyCost.toFixed(2)}/year, this costs about the same as ${Math.round(yearlyCost / 6)} streaming service months. A minor line item.`;
  if (yearlyCost < 100)
    return `At $${yearlyCost.toFixed(2)}/year, that's about $${(yearlyCost / 12).toFixed(0)} per month — roughly ${Math.round(yearlyCost / 5)} gallons of gas per year.`;
  if (yearlyCost < 300)
    return `At $${yearlyCost.toFixed(2)}/year, this appliance costs as much as ${Math.round(yearlyCost / 15)} months of Netflix. Worth looking into energy-saving alternatives.`;
  if (yearlyCost < 600)
    return `At $${yearlyCost.toFixed(2)}/year, this is a significant energy cost — equivalent to about ${Math.round(yearlyCost / 50)} monthly grocery trips. Consider efficiency upgrades.`;
  return `At $${yearlyCost.toFixed(2)}/year, this is a major energy expense — equivalent to a car payment. Strongly consider more efficient alternatives.`;
}
