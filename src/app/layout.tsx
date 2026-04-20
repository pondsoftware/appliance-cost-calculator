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
          <div className="max-w-5xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 hover:text-blue-600 transition"
            >
              Appliance Cost Calculator
            </Link>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-white border-t border-gray-200 mt-12">
          <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
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
