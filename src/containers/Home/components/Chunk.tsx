import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

import { Flex, Textarea } from '~/components'

import { ChunkModel } from './Chunk.model'
import { SpeakerModel } from './Speaker.model'

interface ChunkProps {
  chunk: ChunkModel
  speaker?: SpeakerModel
}

const Wrapper = styled(Flex)`
  && {
    margin-bottom: 12px;
  }
`

const Speaker = styled.div`
  width: 160px;
  flex-shrink: 0;
  margin-right: 12px;
  padding-top: 6px;
`

export const Chunk: FC<ChunkProps> = observer(({ chunk, speaker }) => {
  return (
    <Wrapper>
      <Speaker>{speaker?.name}</Speaker>
      <Textarea value={chunk.text} onChange={chunk.update} onBlur={chunk.format} />
    </Wrapper>
  )
})
