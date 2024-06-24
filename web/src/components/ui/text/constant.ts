export const TextComponentKeys = {
  HEADING1: 'heading1',
  HEADING2: 'heading2',
  HEADING3: 'heading3',
  HEADING4: 'heading4',
  PARAGRAPH: 'paragraph',
  BLOCKQUOTE: 'blockquote',
  CODE: 'code',
  LEAD: 'lead',
  LARGE: 'large',
  SMALL: 'small',
  MUTED: 'muted',
} as const

export const TEXT_COMPONENT = {
  [TextComponentKeys.HEADING1]: 'h1',
  [TextComponentKeys.HEADING2]: 'h2',
  [TextComponentKeys.HEADING3]: 'h3',
  [TextComponentKeys.HEADING4]: 'h4',
  [TextComponentKeys.PARAGRAPH]: 'p',
  [TextComponentKeys.BLOCKQUOTE]: 'blockquote',
  [TextComponentKeys.CODE]: 'code',
  [TextComponentKeys.LEAD]: 'p',
  [TextComponentKeys.LARGE]: 'p',
  [TextComponentKeys.SMALL]: 'small',
  [TextComponentKeys.MUTED]: 'p',
} as const
