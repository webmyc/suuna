import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SUUNA - Learning from nature, together',
  description: 'Community platform for wisdom creators, facilitators, and intentional communities. Join SUUNA to amplify your message and grow your community.',
  keywords: ['community', 'wellness', 'facilitators', 'events', 'workshops', 'nature', 'wisdom'],
  authors: [{ name: 'SUUNA' }],
  openGraph: {
    title: 'SUUNA - Learning from nature, together',
    description: 'Community platform for wisdom creators, facilitators, and intentional communities.',
    type: 'website',
    locale: 'en_US',
    url: 'https://suuna.ro',
    siteName: 'SUUNA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SUUNA - Learning from nature, together',
    description: 'Community platform for wisdom creators, facilitators, and intentional communities.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&family=PT+Serif:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-spartan antialiased">
        {children}
      </body>
    </html>
  )
}
