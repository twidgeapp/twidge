import "./globals.css"
import { Inter } from '@next/font/google';

const inter = Inter();

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
