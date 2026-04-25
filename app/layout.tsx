import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/lib/theme-context'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#4DB8FF',
}

export const metadata: Metadata = {
  title: 'Bridgely Pro - Virtual Business Solutions for Growth',
  description: 'Transform your operations with Bridgely Pro\'s professional virtual solutions. Get expert support in accounting, customer service, IT solutions, and back-office operations. 100% SLA compliance with 98% client retention.',
  keywords: ['virtual assistant', 'IT solutions', 'back-office support', 'business solutions', 'outsourcing', 'professional services'],
  authors: [{ name: 'Bridgely Pro IT Solutions' }],
  openGraph: {
    title: 'Bridgely Pro - Virtual Business Solutions',
    description: 'Transform your operations with professional virtual solutions. Efficiency meets expertise.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bridgely Pro - Virtual Business Solutions',
    description: 'Transform your operations with professional virtual solutions.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
