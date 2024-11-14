import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/globals.scss';

const inter = localFont({
  src: [
    {
      path: './fonts/Inter-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Inter-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Inter-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
  weight: '400 700 800',
});

export const metadata: Metadata = {
  title: 'My App',
  description: 'The Bright Future of Web 3.0?',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>{children}</body>
    </html>
  );
}
