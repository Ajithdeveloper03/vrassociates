import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
