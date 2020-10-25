import { makeAutoObservable, set } from 'mobx'

import { Speaker } from '~/api/models'

export class SpeakerModel implements Speaker {
  id: string
  name: string

  constructor(data: Speaker) {
    makeAutoObservable(this)
    set(this, data)
  }
}
