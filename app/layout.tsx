import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/app/providers';
import { Be_Vietnam_Pro } from 'next/font/google';

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['vietnamese'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-beVietnam',
});

export const metadata: Metadata = {
  title: 'Code Base FE',
  description:
    'A Next.js application with authentication and user profile features',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${beVietnamPro.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
