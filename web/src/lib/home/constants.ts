export const TYPES = {
  SELL: 'sell',
  RENT: 'rent',
  BUY: 'buy',
} as const

export type Types = (typeof TYPES)[keyof typeof TYPES]
