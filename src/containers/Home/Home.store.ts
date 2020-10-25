import { RefObject } from 'react'
import { makeAutoObservable, ObservableMap } from 'mobx'
// import { ContentState, EditorState } from 'draft-js'

import { UtilsStore } from '~/store/utils'

import { SpeakerModel } from './components'
import { selectTextRange } from './utils'

export class HomeStore {
  speakers: ObservableMap<string, SpeakerModel> = new ObservableMap([
    ['1', { id: '1', name: 'The Court' }],
    ['2', { id: '2', name: 'Mr. Yochelson' }],
  ])

  constructor(private readonly utils: UtilsStore) {
    makeAutoObservable(this)
    console.log(this.utils)
  }

  selectTextRange = (editorRef: RefObject<HTMLElement>, start: number, stop: number): void => {
    if (editorRef.current) {
      selectTextRange(editorRef.current, start, stop)
    }
  }

  mountPage = (): void => {
    console.log('mount...')
  }
}
