import Link from "next/link";
import { appliances, categories } from "@/data/appliances";

export default function ApplianceList() {
  return (
    <div className="space-y-8">
      {categories.map((category) => {
        const items = appliances.filter((a) => a.category === category);
        if (items.length === 0) return null;
        return (
          <div key={category}>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {items.map((appliance) => (
                <Link
                  key={appliance.slug}
                  href={`/${appliance.slug}`}
                  className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3 hover:border-blue-300 hover:bg-blue-50 transition group"
                >
                  <div>
                    <p className="font-medium text-gray-900 group-hover:text-blue-700">
                      {appliance.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {appliance.watts.toLocaleString()}W typical
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition"
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
        );
      })}
    </div>
  );
}
