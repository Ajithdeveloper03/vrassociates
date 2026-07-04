import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' });
const outfitSerif = Outfit({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Viswanathan R Associates - Corporate Finance Advisory',
  description: 'Strategic Financial Advisory for Businesses, Investors, Banks, and Corporate Leaders.',
  keywords: 'Business Valuation, Financial Advisory, Corporate Finance, Insolvency',
  openGraph: {
    title: 'Viswanathan R Associates',
    description: 'Strategic Financial Advisory for Businesses, Investors, Banks, and Corporate Leaders.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${outfitSerif.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
