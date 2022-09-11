export type Header = {
  title: string,
  baseUrl?: string,
  version: string,
  description?: string,
  servers: Server[]
}

export type Server = {
  id: number,
  url: string
}