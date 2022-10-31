import "./globals.css";
import { Inter } from "@next/font/google";
import { ClientProvider } from "../components/trpc";
import { rsc } from "../server";

const inter = Inter();

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const user = rsc.whoami.use();
  return (
    <ClientProvider>
      <html lang="en" className={inter.className}>
        <head>
          <title>Twidge</title>
        </head>
        <body>{children}</body>
      </html>
    </ClientProvider>
  );
};

export default RootLayout;
