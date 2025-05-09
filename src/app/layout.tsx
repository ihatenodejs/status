import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "LibreCloud Status",
  description: "Live data provided by Cloudflare",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
