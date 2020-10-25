import React, { FC, useEffect, useRef } from 'react'
import { observer } from 'mobx-react-lite'

import { Heading, Editor } from '~/components'
import { useStore } from '~/store'

export const HomePage: FC = observer(() => {
  const editorRef = useRef(null)

  const { mountPage, editorState, setEditorState } = useStore().pages.HomeStore

  useEffect(mountPage, [])

  return (
    <>
      <>
        <Heading color="primary" mb={2}>
          Transcribe demo
        </Heading>

        <Editor
          forwardRef={editorRef}
          editorState={editorState}
          onChange={setEditorState}
          placeholder="Search"
        />
      </>
    </>
  )
})
