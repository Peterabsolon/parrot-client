import { makeAutoObservable } from 'mobx'
import { ContentState, EditorState } from 'draft-js'

import { UtilsStore } from '~/store/utils'

import { INITIAL_TEXT } from './constants'

export class HomeStore {
  editorState = EditorState.createWithContent(ContentState.createFromText(INITIAL_TEXT))

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
