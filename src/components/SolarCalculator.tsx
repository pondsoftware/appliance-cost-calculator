"use client";

import { useState } from "react";

export default function SolarCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(150);
  const [sunHours, setSunHours] = useState(5);
  const [systemSize, setSystemSize] = useState(6);
  const [electricityRate, setElectricityRate] = useState(0.16);

  // Calculations
  const monthlyKwh = monthlyBill / electricityRate;
  const annualKwh = monthlyKwh * 12;
  const annualBill = monthlyBill * 12;

  // Solar production: system size (kW) * sun hours * 365 * 0.80 (efficiency factor)
  const annualSolarProduction = systemSize * sunHours * 365 * 0.80;
  const offsetPercent = Math.min((annualSolarProduction / annualKwh) * 100, 100);
  const annualSavings = Math.min(annualSolarProduction * electricityRate, annualBill);
  const monthlySavings = annualSavings / 12;

  // System cost estimate: $2.75/watt average installed cost (2024)
  const systemCost = systemSize * 1000 * 2.75;
  const afterTaxCredit = systemCost * 0.70; // 30% federal tax credit
  const paybackYears = afterTaxCredit / annualSavings;

  // 25-year lifetime savings
  const lifetimeSavings = annualSavings * 25 - afterTaxCredit;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Solar Savings Calculator
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Monthly Electricity Bill
            </label>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">$</span>
              <input
                type="number"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Math.max(0, Number(e.target.value)))}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                min={0}
                step={10}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">US average: $150/month</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Electricity Rate ($/kWh)
            </label>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">$</span>
              <input
                type="number"
                value={electricityRate}
                onChange={(e) => setElectricityRate(Math.max(0.01, Number(e.target.value)))}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                min={0.01}
                step={0.01}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">US average: $0.16/kWh</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Average Peak Sun Hours/Day
            </label>
            <input
              type="range"
              value={sunHours}
              onChange={(e) => setSunHours(Number(e.target.value))}
              className="w-full accent-amber-500"
              min={3}
              max={7}
              step={0.5}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>3 hrs (Seattle/NW)</span>
              <span className="font-medium text-gray-900">{sunHours} hours</span>
              <span>7 hrs (Arizona/SW)</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Solar System Size (kW)
            </label>
            <input
              type="range"
              value={systemSize}
              onChange={(e) => setSystemSize(Number(e.target.value))}
              className="w-full accent-amber-500"
              min={3}
              max={15}
              step={0.5}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>3 kW (small)</span>
              <span className="font-medium text-gray-900">{systemSize} kW</span>
              <span>15 kW (large)</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Average US home: 6-8 kW system</p>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Your Results</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Current annual bill</span>
                <span className="font-semibold text-gray-900">${annualBill.toFixed(0)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Annual solar production</span>
                <span className="font-semibold text-gray-900">{annualSolarProduction.toFixed(0)} kWh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Bill offset</span>
                <span className="font-semibold text-green-700">{offsetPercent.toFixed(0)}%</span>
              </div>
              <div className="border-t border-amber-200 pt-3 flex justify-between">
                <span className="text-gray-600 font-medium">Monthly savings</span>
                <span className="font-bold text-green-700 text-lg">${monthlySavings.toFixed(0)}/mo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 font-medium">Annual savings</span>
                <span className="font-bold text-green-700 text-lg">${annualSavings.toFixed(0)}/yr</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Investment & Payback</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">System cost (est.)</span>
                <span className="font-semibold text-gray-900">${systemCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">After 30% tax credit</span>
                <span className="font-semibold text-gray-900">${afterTaxCredit.toLocaleString()}</span>
              </div>
              <div className="border-t border-blue-200 pt-3 flex justify-between">
                <span className="text-gray-600 font-medium">Payback period</span>
                <span className="font-bold text-blue-700 text-lg">{paybackYears.toFixed(1)} years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 font-medium">25-year net savings</span>
                <span className="font-bold text-green-700 text-lg">${lifetimeSavings.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
              </div>
            </div>
          </div>

          {offsetPercent >= 100 && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm text-green-800">
              This system would produce more than you use! Excess energy may be sold back
              to your utility via net metering, or you could reduce system size to save on
              upfront costs.
            </div>
          )}

          {paybackYears > 12 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm text-yellow-800">
              A payback period over 12 years suggests this system size may not be optimal for
              your usage. Consider a smaller system or check if your area qualifies for
              additional state/utility incentives.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
