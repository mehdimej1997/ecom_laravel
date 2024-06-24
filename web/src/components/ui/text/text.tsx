import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

import { TEXT_COMPONENT, TextComponentKeys } from './constant'

const textVariants = cva('', {
  variants: {
    variant: {
      [TextComponentKeys.HEADING1]:
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      [TextComponentKeys.HEADING2]:
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
      [TextComponentKeys.HEADING3]:
        'scroll-m-20 text-2xl font-semibold tracking-tight',
      [TextComponentKeys.HEADING4]:
        'scroll-m-20 text-xl font-semibold tracking-tight',
      [TextComponentKeys.PARAGRAPH]: 'leading-7 [&:not(:first-child)]:mt-6',
      [TextComponentKeys.BLOCKQUOTE]: 'mt-6 border-l-2 pl-6 italic',
      [TextComponentKeys.CODE]:
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
      [TextComponentKeys.LEAD]: 'text-xl text-muted-foreground',
      [TextComponentKeys.LARGE]: 'text-lg font-semibold',
      [TextComponentKeys.SMALL]: 'text-sm font-medium leading-none',
      [TextComponentKeys.MUTED]: 'text-sm text-muted-foreground',
    },
  },
  defaultVariants: {
    variant: TextComponentKeys.PARAGRAPH,
  },
})

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, variant, ...props }, ref) => {
    const Comp = TEXT_COMPONENT[variant || TextComponentKeys.PARAGRAPH]
    return (
      <Comp
        className={cn(textVariants({ variant, className }), className)}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        ref={ref}
        {...props}
      />
    )
  }
)
Text.displayName = 'Text'

export { Text, textVariants }
