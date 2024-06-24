import { isEmpty } from '../array'
import { TYPES, Types } from './constants'

export const isValidType = (type?: Types) => {
  const lowerCaseType = type?.toLocaleLowerCase()
  return (
    Object.values(TYPES).includes(lowerCaseType as Types) ||
    isEmpty(type) ||
    !type
  )
}
