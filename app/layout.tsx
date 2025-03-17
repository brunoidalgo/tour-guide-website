import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] })

export const metadata: Metadata = {
  title: "Marcondes Turismo",
}

import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pr-br">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-Y12538YWKB"></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Y12538YWKB');`}
        </Script>
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}