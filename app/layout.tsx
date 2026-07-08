import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-sans' });

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
    <html lang="en" className={`${plusJakartaSans.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-slate-50">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
