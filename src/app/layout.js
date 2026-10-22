import { Fraunces, Nunito, Caveat } from "next/font/google";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBottomBar from "@/components/layout/MobileBottomBar";
import "./globals.css";

const fontDisplay = Fraunces({
  subsets: ["latin"],
  weight: "900",
  variable: "--font-display",
  display: "swap",
});

const fontBody = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const fontScript = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-script",
  display: "swap",
});

export const metadata = {
  title: {
    default: "TeddyPups — Ethical Puppy Adoption in Dubai",
    template: "%s | TeddyPups",
  },
  description:
    "Ethical companion matching, transparent health records, and premium puppy adoption in Dubai.",
};

export const viewport = {
  themeColor: "#FFFDF8",
  width: "device-width",
  initialScale: 1,
};

/**
 * Root Layout Shell
 * Incorporates storybook typography, accessible navigation landmarks,
 * scalloped hide/show Header, shared dark Footer, and Mobile WhatsApp Bar.
 *
 * @param {{ children: React.ReactNode }} props
 */
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-cocoa bg-storybook-dots">
        <SmoothScroll>
          {/* Accessible Skip Link */}
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-milk focus:text-cocoa focus:border-2 focus:border-cocoa focus:shadow-hard-sm focus:rounded-full font-bold text-sm"
          >
            Skip to main content
          </a>

          {/* Fixed Scalloped Header */}
          <Header />

          {/* Main Content Landmark */}
          <main
            id="main"
            tabIndex={-1}
            className="flex-1 pt-20 md:pt-24 pb-16 md:pb-0 outline-none"
          >
            {children}
          </main>

          {/* Shared Storybook Footer */}
          <Footer />

          {/* Mobile-only Fixed Bottom Bar */}
          <MobileBottomBar />
        </SmoothScroll>
      </body>
    </html>
  );
}
