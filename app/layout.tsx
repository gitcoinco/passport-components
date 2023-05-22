import './globals.css'
import { Inter } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'

const libreFranklin = Libre_Franklin({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={libreFranklin.className}>{children}</body>
    </html>
  )
}