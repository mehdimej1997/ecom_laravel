import Image from 'next/image'
import React from 'react'

import { cn } from '@/lib/utils'

export const BookContainer = ({
  alt,
  imgUrl,
  className,
}: {
  imgUrl: string
  alt: string
  className?: string
}) => {
  return (
    <div
      className={cn('relative h-full overflow-hidden rounded-md', className)}
    >
      <Image fill alt={alt} src={imgUrl} />
    </div>
  )
}
