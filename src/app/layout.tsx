import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";
import FloatingButtons from "@/components/layout/FloatingButtons";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Best Dentist In Egypt | Dr. Eman Tantawy Dental Clinic",
    template: "%s | Dr. Eman Tantawy Dental Clinic"
  },
  description: "Top dental clinic in Egypt having the best dentist in Egypt providing top dental services as dental implants, veneers, and aligners. Over 35 years of experience in Cairo's best dental clinic.",
  keywords: [
    "best dentist in Egypt",
    "dental clinic Cairo",
    "dental implants Egypt",
    "veneers Egypt",
    "cosmetic dentistry",
    "smile makeover",
    "orthodontics Egypt",
    "root canal treatment",
    "teeth whitening",
    "Mohandeseen dentist",
    "Sheikh Zayed dentist",
    "Dr. Eman Tantawy"
  ],
  authors: [{ name: "Dr. Eman Tantawy" }],
  creator: "Dr. Eman Tantawy Dental Clinic",
  publisher: "Dr. Eman Tantawy Dental Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dentistemantantawy.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dentistemantantawy.com',
    title: 'Best Dentist In Egypt | Dr. Eman Tantawy Dental Clinic',
    description: 'Top dental clinic in Egypt having the best dentist in Egypt providing top dental services as dental implants, veneers, and aligners.',
    siteName: 'Dr. Eman Tantawy Dental Clinic',
    images: [
      {
        url: 'https://c6871b64.delivery.rocketcdn.me/wp-content/uploads/2021/09/DSC00429-1024x683.jpg',
        width: 1024,
        height: 683,
        alt: 'Dr. Eman Tantawy Dental Clinic'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Dentist In Egypt | Dr. Eman Tantawy Dental Clinic',
    description: 'Top dental clinic in Egypt having the best dentist in Egypt providing top dental services as dental implants, veneers, and aligners.',
    images: ['https://c6871b64.delivery.rocketcdn.me/wp-content/uploads/2021/09/DSC00429-1024x683.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <LoadingScreen>
            {children}
          </LoadingScreen>
          <FloatingButtons />
        </LanguageProvider>
      </body>
    </html>
  );
}
