'use client'

import React from 'react'
import { MagnifyingGlassIcon, UploadIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import {
  Button,
  Input,
  Text,
  ToggleGroup,
  ToggleGroupItem,
} from '@/components/ui'
import { TYPES } from '@/lib/home'

export const SearchInput = () => {
  const { type } = useParams()

  return (
    <div className="flex flex-col gap-2">
      <div className="w-fit overflow-hidden rounded-3xl bg-white">
        <ToggleGroup
          type="single"
          size={'xl'}
          value={type?.[0].toLowerCase() || TYPES.SELL}
        >
          <Link href={'/sell'}>
            <ToggleGroupItem value={TYPES.SELL}>Sell</ToggleGroupItem>
          </Link>
          <Link href={'/buy'}>
            <ToggleGroupItem value={TYPES.BUY}>Buy</ToggleGroupItem>
          </Link>
          <Link href={'/rent'}>
            <ToggleGroupItem value={TYPES.RENT}>Rent</ToggleGroupItem>
          </Link>
        </ToggleGroup>
      </div>

      <div className="z-20 flex w-full max-w-3xl flex-nowrap overflow-hidden rounded-3xl bg-white">
        <Input
          className="rounded-none border-none shadow-none focus-visible:ring-0"
          placeholder="Enter Isbn"
        />
        <Button
          className="flex flex-nowrap items-center gap-2 rounded-none"
          variant={'secondary'}
          size={'lg'}
        >
          <UploadIcon style={{ scale: 1.5 }} />
          <Text variant={'muted'}>Upload CSV</Text>
        </Button>
        <Button className="rounded-none" size={'lg'}>
          <MagnifyingGlassIcon style={{ scale: 1.5 }} />
        </Button>
      </div>
    </div>
  )
}
