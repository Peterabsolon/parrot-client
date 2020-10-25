import { makeAutoObservable } from 'mobx'

import { themes } from '~/constants'

export class ThemeStore {
  key: ThemeKey = 'dark'

  constructor() {
    makeAutoObservable(this)
  }

  get theme(): Theme {
    return themes[this.key]
  }

  toggleTheme = (): void => {
    this.key = this.key === 'light' ? 'dark' : 'light'
  }
}
