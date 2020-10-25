import { makeAutoObservable, set } from 'mobx'

import { Chunk } from '~/api/models'

export class ChunkModel implements Chunk {
  speakerId: string

  text: string
  textDefault: string

  // cursors
  from: number
  to: number

  constructor(data: Chunk) {
    makeAutoObservable(this)
    set(this, data)
    this.textDefault = data.text
  }

  setText = (text: string): void => {
    this.text = text
  }

  restore = (): void => {
    this.text = this.textDefault
  }
}
