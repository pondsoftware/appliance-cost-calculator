"use client";

import { useState } from "react";
import { appliances, US_AVERAGE_RATE } from "@/data/appliances";
import { STATE_RATES } from "@/data/electricity-rates";

export default function CompareCalculator() {
  const [selections, setSelections] = useState<(string | "")[]>(["", "", ""]);
  const [rate, setRate] = useState(US_AVERAGE_RATE);
  const [selectedState, setSelectedState] = useState("US");

  const handleStateChange = (value: string) => {
    setSelectedState(value);
    if (value === "US") {
      setRate(US_AVERAGE_RATE);
    } else {
      const stateData = STATE_RATES.find((s) => s.abbr === value);
      if (stateData) {
        setRate(stateData.rate);
      }
    }
  };

  const handleSelection = (index: number, slug: string) => {
    const newSelections = [...selections];
    newSelections[index] = slug;
    setSelections(newSelections);
  };

  const selectedAppliances = selections
    .map((slug) => appliances.find((a) => a.slug === slug))
    .filter(Boolean);

  return (
    <div className="space-y-8">
      {/* Rate selector */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="compare-state"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            State
          </label>
          <select
            id="compare-state"
            value={selectedState}
            onChange={(e) => handleStateChange(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white"
          >
            <option value="US">US Average ($0.16/kWh)</option>
            {STATE_RATES.map((s) => (
              <option key={s.abbr} value={s.abbr}>
                {s.state} (${s.rate.toFixed(4)}/kWh)
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="compare-rate"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Electricity rate
          </label>
          <div className="relative">
            <input
              id="compare-rate"
              type="number"
              value={rate}
              onChange={(e) => {
                setRate(Number(e.target.value));
                setSelectedState("US");
              }}
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

      {/* Appliance selectors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[0, 1, 2].map((index) => (
          <div key={index}>
            <label
              htmlFor={`appliance-${index}`}
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Appliance {index + 1}
              {index === 2 && (
                <span className="text-gray-400 ml-1">(optional)</span>
              )}
            </label>
            <select
              id={`appliance-${index}`}
              value={selections[index]}
              onChange={(e) => handleSelection(index, e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white"
            >
              <option value="">Select an appliance...</option>
              {appliances.map((a) => (
                <option key={a.slug} value={a.slug}>
                  {a.name} ({a.watts}W)
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Comparison results */}
      {selectedAppliances.length >= 2 && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Cost Comparison
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {selectedAppliances.map((appliance) => {
              if (!appliance) return null;
              const dailyKwh =
                (appliance.watts * appliance.typicalHoursPerDay) / 1000;
              const dailyCost = dailyKwh * rate;
              const monthlyCost = dailyCost * 30;
              const yearlyCost = dailyCost * 365;

              return (
                <div
                  key={appliance.slug}
                  className="rounded-lg border border-gray-200 p-6 bg-white"
                >
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">
                    {appliance.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {appliance.watts}W &middot; {appliance.typicalHoursPerDay}{" "}
                    hrs/day
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Daily</span>
                      <span className="font-semibold text-blue-700">
                        ${dailyCost.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Monthly</span>
                      <span className="font-semibold text-green-700">
                        ${monthlyCost.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Yearly</span>
                      <span className="font-semibold text-purple-700">
                        ${yearlyCost.toFixed(2)}
                      </span>
                    </div>
                    <div className="pt-3 border-t border-gray-100">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">
                          Daily kWh
                        </span>
                        <span className="text-sm text-gray-700">
                          {dailyKwh.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Yearly comparison bar */}
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Annual Cost Comparison
            </h3>
            {selectedAppliances.map((appliance) => {
              if (!appliance) return null;
              const yearlyCost =
                ((appliance.watts * appliance.typicalHoursPerDay) / 1000) *
                rate *
                365;
              const maxCost = Math.max(
                ...selectedAppliances
                  .filter(Boolean)
                  .map(
                    (a) =>
                      ((a!.watts * a!.typicalHoursPerDay) / 1000) * rate * 365
                  )
              );
              const percentage =
                maxCost > 0 ? (yearlyCost / maxCost) * 100 : 0;

              return (
                <div key={appliance.slug} className="mb-3 last:mb-0">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      {appliance.name}
                    </span>
                    <span className="text-sm font-semibold text-gray-900">
                      ${yearlyCost.toFixed(2)}/yr
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-blue-500 h-4 rounded-full transition-all duration-300"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {selectedAppliances.length < 2 && (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg">
            Select at least 2 appliances above to see a cost comparison.
          </p>
        </div>
      )}
    </div>
  );
}
