import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'VizoThink | AI-Powered Thought Partner',
  description:
    'Your AI-powered thought partner. Capture ideas, explore connections, and let the machine help you think through the chaos. 100% Private, No Login, Runs Locally.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-full antialiased`}>
        {children}
      </body>
    </html>
  )
}
