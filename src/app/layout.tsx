import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { StoreProvider } from "../redux/StoreProvider";
import Script from 'next/script';
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="fr">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WZP4H2GF');`,
            }}
          />
        </Head>
        <body className={inter.className}>
          {/* End Google Tag Manager (noscript) */}
          {children}
           <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WZP4H2GF" height="0" width="0" style="display: none; visibility: hidden;" />`,
            }}
          />
        </body>
      </html>
    </StoreProvider>
  );
}
