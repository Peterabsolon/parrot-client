import React, { FC, RefObject } from 'react'
import { observer } from 'mobx-react-lite'
import { Editor as DraftEditor, EditorProps as DraftEditorProps } from 'draft-js'
import 'draft-js/dist/Draft.css'

interface EditorProps extends DraftEditorProps {
  forwardRef?: string | ((instance: DraftEditor | null) => void) | RefObject<DraftEditor>
}

export const Editor: FC<EditorProps> = observer(({ forwardRef, ...props }) => {
  return <DraftEditor ref={forwardRef} {...props} />
})
