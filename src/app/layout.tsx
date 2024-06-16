import '@/styles/globals.css';
import { Inter as FontSans } from 'next/font/google';

import Footer from '@/components/page-footer';
import Header from '@/components/page-header';
import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-zinc-100 font-sans antialiased',
          fontSans.variable
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
