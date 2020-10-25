import { makeAutoObservable } from 'mobx'
import { EditorState } from 'draft-js'

import { UtilsStore } from '~/store/utils'

export class HomeStore {
  editorState = makeAutoObservable(EditorState.createEmpty())

  constructor(private readonly utils: UtilsStore) {
    makeAutoObservable(this)
    console.log(this.utils)
  }

  setEditorState = (state: EditorState): void => {
    this.editorState = state
  }

  mountPage = (): void => {
    console.log('mount...')
  }
}
