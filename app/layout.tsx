import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'CloudMyco - Financial Infrastructure for Carbon Markets',
  description: 'Turnkey Article 6 infrastructure for national carbon registries. Make compliance automatic. Make fraud expensive. Launch in 2 weeks.',
  keywords: ['carbon markets', 'Article 6', 'blockchain', 'carbon registry', 'carbon credits', 'UNFCCC', 'climate finance'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
