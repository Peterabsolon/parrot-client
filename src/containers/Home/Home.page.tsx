import React, { FC, useEffect, useRef } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

import { PAGE_HEADER_HEIGHT } from '~/constants'
import { Box, Editor, Flex } from '~/components'
import { useStore } from '~/store'

const Wrapper = styled(Flex)`
  height: calc(100vh - ${PAGE_HEADER_HEIGHT}px);
  overflow: auto;
` as typeof Flex

export const HomePage: FC = observer(() => {
  const editorRef = useRef(null)

  const { mountPage, editorState, setEditorState } = useStore().pages.HomeStore

  useEffect(mountPage, [])

  return (
    <Wrapper>
      <Box width={600}>Result</Box>
      <Box width={600} style={{ overflow: 'auto' }}>
        <Editor forwardRef={editorRef} editorState={editorState} onChange={setEditorState} />
      </Box>
    </Wrapper>
  )
})
