'use client'

import { useMotionValueEvent, useScroll } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

import BookhunterLogo from '@/assets/images/bookhunter.png'
import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'

export const Navbar = () => {
  const { scrollY } = useScroll()
  const [isOutBound, setIsOutBound] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 150) setIsOutBound(true)
    if (latest < 150) setIsOutBound(false)
  })

  return (
    <nav
      className={cn(
        'sticky -top-24 z-50 bg-background text-center transition-all duration-500 ease-in-out',
        isOutBound &&
          'top-0 bg-secondary/60 shadow-md shadow-black/5 backdrop-blur-md backdrop-filter'
      )}
    >
      <ul className="container grid h-20 grid-cols-3 items-center justify-between">
        <ul className="flex flex-grow flex-nowrap justify-center">
          <li>
            <Button variant={'link'} className="text-tertiary">
              Affiliates
            </Button>
          </li>
          <li>
            <Button variant={'link'} className="text-tertiary">
              Tutorials
            </Button>
          </li>
          <li>
            <Button variant={'link'} className="text-tertiary">
              Hunt
            </Button>
          </li>
          <li>
            <Button variant={'link'} className="text-tertiary">
              Bulk Hunt
            </Button>
          </li>
          <li>
            <Button variant={'link'} className="text-tertiary">
              Bulk Offer
            </Button>
          </li>
        </ul>
        <div className="flex justify-center">
          <Image
            src={BookhunterLogo}
            alt="bookhunter"
            width={150}
            height={80}
          />
        </div>
        <ul className="flex flex-grow flex-nowrap justify-center gap-3">
          <li>
            <Button>Book Flipper Tools</Button>
          </li>
          <li>
            <Button variant={'secondary'}>Sign In</Button>
          </li>
        </ul>
      </ul>
    </nav>
  )
}
