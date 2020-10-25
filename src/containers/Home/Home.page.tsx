import React, { FC, useEffect, useRef } from 'react'
import { observer } from 'mobx-react-lite'

import { Box, Editor, Flex } from '~/components'
import { useStore } from '~/store'

export const HomePage: FC = observer(() => {
  const editorRef = useRef(null)

  const { mountPage, editorState, setEditorState } = useStore().pages.HomeStore

  useEffect(mountPage, [])

  return (
    <>
      <Flex>
        <Box width={600}>
          <Editor forwardRef={editorRef} editorState={editorState} onChange={setEditorState} />
        </Box>
      </Flex>
    </>
  )
})
