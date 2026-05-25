import type { Metadata } from "next";
import { Noto_Sans_Devanagari, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import ScrollProgress from "@/components/ScrollProgress";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const hindiFont = Noto_Sans_Devanagari({
  variable: "--font-hindi",
  subsets: ["devanagari", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const englishFont = Plus_Jakarta_Sans({
  variable: "--font-english",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "मध्य प्रदेश युवा समाज सेना | MP Yuva Samaj Sena",
  description: "सच्ची राष्ट्र सेवा और मानवता की राह पर अग्रसर, मध्य प्रदेश के ऊर्जावान युवाओं का एक सशक्त, निस्वार्थ और संकल्पी आंदोलन।",
  keywords: ["मध्य प्रदेश युवा समाज सेना", "MP Yuva Samaj Sena", "Youth Welfare", "Blood Donation MP", "NGO Madhya Pradesh", "Social Service Bhopal"],
  authors: [{ name: "MP Yuva Samaj Sena" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "मध्य प्रदेश युवा समाज सेना | MP Yuva Samaj Sena",
    description: "सच्ची राष्ट्र सेवा और मानवता की राह पर अग्रसर, मध्य प्रदेश के ऊर्जावान युवाओं का एक सशक्त, निस्वार्थ और संकल्पी आंदोलन।",
    type: "website",
    locale: "hi_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hi"
      className={`${hindiFont.variable} ${englishFont.variable} scroll-smooth`}
    >
      <body className="bg-white text-slate-900 selection:bg-[#ff5100]/10 selection:text-[#ff7700] min-h-screen flex flex-col font-sans overflow-x-hidden antialiased">
        <LanguageProvider>
          {/* Shared visual & interactive widgets */}
          <ScrollProgress />
          <Loader />
          <WhatsAppButton />

          {/* Sticky Light Navbar */}
          <Navbar />

          {/* Route-specific content */}
          <main className="flex-1 w-full">
            {children}
          </main>

          {/* Premium Light Footer */}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
