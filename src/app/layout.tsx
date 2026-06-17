import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Magnet — Your profile, your world',
  description: 'The rich, beautiful, AI-powered link page. No website needed.',
  metadataBase: new URL('https://magnet.wtf'),
  openGraph: {
    title: 'Magnet',
    description: 'Your profile, your world.',
    siteName: 'Magnet',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
