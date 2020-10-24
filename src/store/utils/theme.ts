import { action, makeAutoObservable } from 'mobx'

import { ThemeKey, themes } from '~/constants'

export class ThemeStore {
  key: ThemeKey = 'dark'
  authToken?: string = undefined

  constructor() {
    makeAutoObservable(this)
  }

  get theme(): Theme {
    return themes[this.key]
  }

  @action toggleTheme = (): void => {
    this.key = this.key === 'light' ? 'dark' : 'light'
  }
}
