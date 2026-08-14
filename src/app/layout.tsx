import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter, Cinzel, Cormorant_Garamond } from 'next/font/google';
import '@/index.css';
import '@/App.css';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import GrainEffect from '@/components/GrainEffect';
import ScrollToTop from '@/components/ScrollToTop';

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cinzel',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-cormorant',
});

export const viewport: Viewport = {
  themeColor: '#06080d',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fifteenmiles.tech'),
  title: {
    default: 'Fifteen Miles | Built for Decades',
    template: '%s | Fifteen Miles',
  },
  description: 'We build enterprise operating platforms for organizations that think in terms of decades, not quarters.',
  applicationName: 'Fifteen Miles',
  authors: [{ name: 'Fifteen Miles', url: 'https://www.fifteenmiles.tech' }],
  generator: 'Next.js',
  keywords: ['Enterprise', 'Platforms', 'Software', 'Architecture', 'Fifteen Miles', 'B2B', 'Operating Systems'],
  referrer: 'origin-when-cross-origin',
  creator: 'Fifteen Miles',
  publisher: 'Fifteen Miles',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Fifteen Miles',
    url: 'https://www.fifteenmiles.tech',
    title: 'Fifteen Miles | Built for Decades',
    description: 'We build enterprise operating platforms for organizations that think in terms of decades, not quarters.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Fifteen Miles | Built for Decades',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fifteenmiles',
    creator: '@fifteenmiles',
    title: 'Fifteen Miles | Built for Decades',
    description: 'We build enterprise operating platforms for organizations that think in terms of decades, not quarters.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.fifteenmiles.tech/#organization',
        name: 'Fifteen Miles',
        url: 'https://www.fifteenmiles.tech/',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.fifteenmiles.tech/favicon.svg',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.fifteenmiles.tech/#website',
        name: 'Fifteen Miles',
        url: 'https://www.fifteenmiles.tech/',
        publisher: {
          '@id': 'https://www.fifteenmiles.tech/#organization'
        }
      }
    ]
  };

  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable} ${cinzel.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FAF8F5] text-[#0F0E0C] font-[Inter] antialiased selection:bg-[#8C7355] selection:text-[#FAF8F5]">
        <GrainEffect />
        <Navbar />
        <ScrollToTop />
        <main className="app-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}