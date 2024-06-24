type KeyValue = { [x: string]: string }

export type NextPage<T = KeyValue, S = KeyValue> = {
  params: T
  searchParams: S
}
