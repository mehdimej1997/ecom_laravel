import type { Metadata } from 'next'

import { ThemeProvider } from '@/providers/ThemeProvider'
import { ReactQueryProvider } from '@/providers/ReactQueryProvider'
import { Navbar } from '@/components/shared'

import './globals.css'

export const metadata: Metadata = {
  title: 'E-com nextjs/laravel',
  description: 'Generated by create next app',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <ReactQueryProvider>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </ReactQueryProvider>
    </html>
  )
}

export default RootLayout
