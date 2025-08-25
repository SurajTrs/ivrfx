import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css';
import '../style.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import FooterDisclaimer from 'components/FooterDisclaimer';
import BootstrapClient from 'components/BootstrapClient';

export const metadata: Metadata = {
  title: 'IVRFX',
  description: 'IVRFX trading platform',
  icons: {
    icon: [
      { url: '/images/logo.jpg', type: 'image/jpeg' },
    ],
    shortcut: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <BootstrapClient />
        <Navbar />
        {children}
        <Footer />
        <FooterDisclaimer />
      </body>
    </html>
  );
}
