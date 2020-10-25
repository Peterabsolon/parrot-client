import { makeAutoObservable, set } from 'mobx'

import { Chunk } from '~/api/models'

export class ChunkModel implements Chunk {
  speakerId: string

  text: string
  textDefault: string

  from: number
  to: number

  constructor(data: Chunk) {
    makeAutoObservable(this)
    set(this, data)
    this.textDefault = data.text
  }

  get pristine(): boolean {
    return this.text === this.textDefault
  }

  update = (text: string): void => {
    this.text = text
  }

  restore = (): void => {
    this.text = this.textDefault
  }

  format = (): void => {
    this.text = this.text.replace(/[\n\r]/g, ' ')
  }
}
