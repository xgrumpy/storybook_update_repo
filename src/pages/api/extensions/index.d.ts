/**
 * Extension type
 */
export type Extension = {
  description?: string,
  url?: string,
  resource?: string,
  valueType?: string,
}

/**
 * ResponseData type
 */
export type ResponseData = {
  message: string
  timestamp: number
  extensions: Extension[]
  name?: string
}
