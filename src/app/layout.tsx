import "@/styles/globals.css";

import { cn } from "@/lib/utils";
import { Libre_Caslon_Text } from 'next/font/google';

import { Metadata } from "next";
import localFont from 'next/font/local';

const bearskin = localFont({
  src: './Bearskin Regular.woff',
  display: 'swap',
})

const livre_caslon = Libre_Caslon_Text({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre-caslon-text',
  weight: "400",
})

export const metadata: Metadata = {
  title: 'Solenne Dauriac',
  description: 'Freelance Graphiste et Communicante',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`scroll-smooth ${bearskin.className} ${livre_caslon.variable}`} suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 max-w-screen-wide mx-auto",
        )}
      >
        {children}
      </body>
    </html>
  )
}
