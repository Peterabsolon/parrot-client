import { ChangeEvent, FC } from 'react'
import RCTextareaAutosize from 'react-textarea-autosize'
import { observer } from 'mobx-react-lite'
import type { TextareaAutosizeProps as RCTextareaAutosizeProps } from 'react-textarea-autosize'
import styled from 'styled-components'

interface TextareaAutosizeProps extends Omit<RCTextareaAutosizeProps, 'onChange'> {
  value?: string
  onChange: (value: string, event: ChangeEvent<HTMLTextAreaElement>) => void
}

const StyledTextarea = styled(RCTextareaAutosize)`
  background: transparent;
  border-radius: ${(props) => props.theme.radii.default}px;
  border: none;
  width: 100%;
  padding: 6px 12px;
  appearance: none;
  resize: none;
  transition: 0.1s ease;

  :focus {
    outline: none;
    background: ${(props) => props.theme.colors.backgroundLight};
  }

  :hover,
  :focus {
    box-shadow: inset 0 0 0 1px ${(props) => props.theme.colors.primary};
    border-color: ${(props) => props.theme.colors.primary};
  }
` as typeof RCTextareaAutosize

export const Textarea: FC<TextareaAutosizeProps> = observer(({ onChange, onBlur, ...rest }) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value || '', event)
  }

  return <StyledTextarea {...rest} onChange={handleChange} onBlur={onBlur} />
})
