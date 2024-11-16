import type { Metadata } from 'next';
import './globals.css';
import 'dotenv/config';

export const metadata: Metadata = {
  title: 'Countries Info App',
  description: 'Get information about countries',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
