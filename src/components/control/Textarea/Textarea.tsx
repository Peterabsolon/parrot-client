import { ChangeEvent, FC } from 'react'
import RCTextareaAutosize from 'react-textarea-autosize'
import { observer } from 'mobx-react-lite'
import type { TextareaAutosizeProps as RCTextareaAutosizeProps } from 'react-textarea-autosize'

interface TextareaAutosizeProps extends Omit<RCTextareaAutosizeProps, 'onChange'> {
  value?: string
  onChange: (value: string, event: ChangeEvent<HTMLTextAreaElement>) => void
}

export const Textarea: FC<TextareaAutosizeProps> = observer(({ onChange, ...rest }) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    console.log('Textarea onChange')
    onChange(event.target.value, event)
  }

  return <RCTextareaAutosize {...rest} onChange={handleChange} />
})
