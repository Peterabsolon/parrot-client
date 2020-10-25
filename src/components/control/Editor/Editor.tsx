import React, { FC, RefObject } from 'react'
import { observer } from 'mobx-react-lite'
import { Editor as DraftEditor, EditorProps as DraftEditorProps } from 'draft-js'
import { Box } from 'rebass'
import styled from 'styled-components'
import 'draft-js/dist/Draft.css'

interface EditorProps extends DraftEditorProps {
  forwardRef?: string | ((instance: DraftEditor | null) => void) | RefObject<DraftEditor>
}

const Wrapper = styled(Box)`
  padding: 20px 32px;
  * {
    font-family: ${(props) => props.theme.fonts.heading};
  }
`

export const Editor: FC<EditorProps> = observer(({ forwardRef, ...props }) => {
  return (
    <Wrapper>
      <DraftEditor ref={forwardRef} {...props} />
    </Wrapper>
  )
})
