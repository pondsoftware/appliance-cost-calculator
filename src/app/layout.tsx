import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Appliance Electricity Cost Calculator — How Much Does It Cost to Run?",
    template: "%s | Appliance Cost Calculator",
  },
  description:
    "Find out exactly how much it costs to run any appliance. Free electricity cost calculator with pre-loaded wattages for 30+ common appliances.",
  openGraph: {
    title: "Appliance Electricity Cost Calculator",
    description:
      "Find out exactly how much it costs to run any appliance. Free electricity cost calculator with pre-loaded wattages for 30+ common appliances.",
    type: "website",
    url: "https://appliancecostcalculator.net",
    siteName: "Appliance Cost Calculator",
  },
  twitter: {
    card: "summary",
    title: "Appliance Electricity Cost Calculator",
    description:
      "Find out exactly how much it costs to run any appliance. Free electricity cost calculator with pre-loaded wattages for 30+ common appliances.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-K7FMZ8XELQ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K7FMZ8XELQ');
        `}
      </Script>
      <body className="min-h-full flex flex-col font-sans">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 hover:text-blue-600 transition"
            >
              Appliance Cost Calculator
            </Link>
            <Link
              href="/compare"
              className="text-sm font-medium text-blue-600 hover:text-blue-800 transition"
            >
              Compare Appliances
            </Link>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-white border-t border-gray-200 mt-12">
          <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 text-center mb-2">More Free Tools</p>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
                <a href="https://sidehustletaxcalculator.net" className="text-blue-600 hover:underline">Side Hustle Tax Calculator</a>
                <a href="https://imageconverters.net" className="text-blue-600 hover:underline">Image Converter</a>
                <a href="https://photometadata.net" className="text-blue-600 hover:underline">Photo Metadata Viewer</a>
                <a href="https://freelancerates.net" className="text-blue-600 hover:underline">Freelance Rate Calculator</a>
                <a href="https://imageresizers.net" className="text-blue-600 hover:underline">Social Image Resizer</a>
                <a href="https://lendingcalculator.net" className="text-blue-600 hover:underline">Mortgage Calculator</a>
                <a href="https://compoundinterestcalc.app" className="text-blue-600 hover:underline">Compound Interest Calculator</a>
                <a href="https://salaryconverter.net" className="text-blue-600 hover:underline">Salary Converter</a>
                <a href="https://printablepolly.com" className="text-blue-600 hover:underline">Printable Polly</a>
              </div>
            </div>
            <p className="text-sm text-gray-500 text-center">
              Electricity costs are estimates based on the wattage and usage
              hours you enter. Actual costs may vary based on your utility
              provider, rate plan, and appliance efficiency. The default rate of
              $0.16/kWh reflects the 2024 US national average.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
