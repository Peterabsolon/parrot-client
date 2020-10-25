// generated from the GraphQL schema
export * from '../generated'

export interface ExampleThirdPartyModel {
  id: string
  text: string
}

export interface Chunk {
  speakerId: string
  from: number
  to: number
  text: string
}

export interface Speaker {
  id: string
  name: string
}
