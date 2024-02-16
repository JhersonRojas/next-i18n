import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next.js with i18n",
  description: "It's a simple example of i18n in Next.js",
}

type LayoutRootProps = Readonly<{
  children: React.ReactNode
}>

export default function RootLayout({ children }: LayoutRootProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
