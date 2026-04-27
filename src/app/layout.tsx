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
  metadataBase: new URL("https://appliancecostcalculator.net"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  title: {
    default: "Appliance Electricity Cost Calculator — How Much Does It Cost?",
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
        src="https://www.googletagmanager.com/gtag/js?id=G-VJ851V5BKX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VJ851V5BKX');
        `}
      </Script>
      <body className="min-h-full flex flex-col font-sans">
        <header className="bg-amber-500 text-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              <span className="text-xl font-bold">Appliance Cost Calculator</span>
            </a>
            <Link
              href="/compare"
              className="text-sm font-medium text-white/90 hover:text-white transition"
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
                <a href="https://sidehustletaxcalculator.net" className="text-amber-600 hover:underline">Side Hustle Tax Calculator</a>
                <a href="https://imageconverters.net" className="text-amber-600 hover:underline">Image Converter</a>
                <a href="https://photometadata.net" className="text-amber-600 hover:underline">Photo Metadata Viewer</a>
                <a href="https://freelancerates.net" className="text-amber-600 hover:underline">Freelance Rate Calculator</a>
                <a href="https://imageresizers.net" className="text-amber-600 hover:underline">Social Image Resizer</a>
                <a href="https://lendingcalculator.net" className="text-amber-600 hover:underline">Mortgage Calculator</a>
                <a href="https://compoundinterestcalc.app" className="text-amber-600 hover:underline">Compound Interest Calculator</a>
                <a href="https://salaryconverter.net" className="text-amber-600 hover:underline">Salary Converter</a>
                <a href="https://printablepolly.com" className="text-amber-600 hover:underline">Printable Polly</a>
                <a href="https://biblegarden.net" className="text-amber-600 hover:underline">Bible Garden</a>
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
