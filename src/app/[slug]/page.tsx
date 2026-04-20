import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Calculator from "@/components/Calculator";
import {
  appliances,
  getApplianceBySlug,
  getAppliancesByCategory,
  US_AVERAGE_RATE,
} from "@/data/appliances";

export function generateStaticParams() {
  return appliances.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const appliance = getApplianceBySlug(slug);
  if (!appliance) return {};

  const yearlyCost = (
    ((appliance.watts * appliance.typicalHoursPerDay) / 1000) *
    US_AVERAGE_RATE *
    365
  ).toFixed(0);

  return {
    title: `How Much Does a ${appliance.name} Cost to Run? (~$${yearlyCost}/year)`,
    description: `A ${appliance.name} uses ${appliance.watts}W and costs approximately $${yearlyCost} per year to run. Use our free calculator to find out your exact cost based on your electricity rate.`,
  };
}

export default async function AppliancePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const appliance = getApplianceBySlug(slug);
  if (!appliance) notFound();

  const related = getAppliancesByCategory(appliance.category).filter(
    (a) => a.slug !== appliance.slug
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="text-sm text-amber-600 hover:text-amber-800 mb-6 inline-block"
      >
        &larr; All appliances
      </Link>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        How Much Does a {appliance.name} Cost to Run?
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl">
        {appliance.description}
      </p>

      <Calculator appliance={appliance} />

      {/* Tips */}
      <div className="mt-10 bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Energy-Saving Tips for Your {appliance.name}
        </h2>
        <ul className="space-y-3">
          {appliance.tips.map((tip, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-green-500 mt-0.5 shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-gray-700">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Related appliances */}
      {related.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Other {appliance.category} Appliances
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/${r.slug}`}
                className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3 hover:border-amber-300 hover:bg-amber-50 transition group"
              >
                <div>
                  <p className="font-medium text-gray-900 group-hover:text-amber-700">
                    {r.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {r.watts.toLocaleString()}W typical
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-amber-500 transition"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
