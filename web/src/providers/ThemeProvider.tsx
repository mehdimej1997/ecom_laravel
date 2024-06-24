'use client'

import '@/app/globals.css'

import { Inter as FontSans } from 'next/font/google'
import React from 'react'

import { cn } from '@/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <body
      className={cn(
        'relative min-h-screen bg-background font-sans antialiased',
        fontSans.variable
      )}
    >
      {children}
    </body>
  )
}
