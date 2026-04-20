import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  appliances,
  categories,
  getAppliancesByCategory,
  US_AVERAGE_RATE,
} from "@/data/appliances";

function categoryToSlug(category: string): string {
  return category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-");
}

function slugToCategory(slug: string): string | undefined {
  return categories.find((c) => categoryToSlug(c) === slug);
}

export function generateStaticParams() {
  return categories.map((category) => ({
    category: categoryToSlug(category),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = slugToCategory(slug);
  if (!category) return {};

  return {
    title: `${category} Appliance Electricity Costs — How Much Do They Cost to Run?`,
    description: `Calculate the electricity cost of ${category.toLowerCase()} appliances. See wattages, typical usage, and estimated annual costs for all ${category.toLowerCase()} appliances.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = slugToCategory(slug);
  if (!category) notFound();

  const categoryAppliances = getAppliancesByCategory(category);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="text-sm text-amber-600 hover:text-amber-800 mb-6 inline-block"
      >
        &larr; All appliances
      </Link>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        {category} Appliance Electricity Costs
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl">
        How much does it cost to run your {category.toLowerCase()} appliances?
        Below are estimated annual electricity costs based on typical usage at
        the US average rate of ${US_AVERAGE_RATE}/kWh.
      </p>

      <div className="space-y-4">
        {categoryAppliances.map((appliance) => {
          const dailyKwh =
            (appliance.watts * appliance.typicalHoursPerDay) / 1000;
          const yearlyCost = dailyKwh * US_AVERAGE_RATE * 365;
          const monthlyCost = dailyKwh * US_AVERAGE_RATE * 30;

          return (
            <Link
              key={appliance.slug}
              href={`/${appliance.slug}`}
              className="block rounded-lg border border-gray-200 p-6 hover:border-amber-300 hover:bg-amber-50 transition group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 group-hover:text-amber-700">
                    {appliance.name}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {appliance.watts.toLocaleString()}W &middot;{" "}
                    {appliance.typicalHoursPerDay} hrs/day typical
                  </p>
                </div>
                <div className="flex gap-6 text-sm">
                  <div className="text-center">
                    <p className="text-gray-500">Monthly</p>
                    <p className="font-semibold text-green-700">
                      ${monthlyCost.toFixed(2)}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-500">Yearly</p>
                    <p className="font-semibold text-purple-700">
                      ${yearlyCost.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Link to other categories */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Other Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {categories
            .filter((c) => c !== category)
            .map((c) => (
              <Link
                key={c}
                href={`/category/${categoryToSlug(c)}`}
                className="rounded-lg border border-gray-200 px-4 py-3 text-center hover:border-amber-300 hover:bg-amber-50 transition text-sm font-medium text-gray-700 hover:text-amber-700"
              >
                {c}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
