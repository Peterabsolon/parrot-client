import { FC } from 'react'
import styled, { css } from 'styled-components'

import { SpeakerModel } from './Speaker.model'

interface SpeakerProps {
  index: number
  speaker: SpeakerModel
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 4px;
  margin-bottom: 12px;
  border: 1px solid transparent;
  transition: 0.1s ease;

  :hover {
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: inset 0 0 0 1px ${(props) => props.theme.colors.primary};
  }

  ${(props) => css`
    ${props.theme.key === 'light'
      ? css`
          border-color: ${props.theme.colors.border};
        `
      : css`
          background: ${props.theme.colors.backgroundLight};
        `}
  `}
`

const SpeakerKey = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border};
  width: 24px;
  height: 24px;
  border-radius: 4px;
  text-align: center;
  margin-right: 12px;
`

const SpeakerName = styled.div``

export const Speaker: FC<SpeakerProps> = ({ speaker, index }) => {
  return (
    <Wrapper>
      <SpeakerKey>{index + 1}</SpeakerKey>
      <SpeakerName>{speaker.name}</SpeakerName>
    </Wrapper>
  )
}
