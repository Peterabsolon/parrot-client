import React, { FC, Ref, useEffect, useRef } from 'react'
import { values } from 'mobx'
import { observer } from 'mobx-react-lite'
import styled, { css } from 'styled-components'

import { PAGE_HEADER_HEIGHT } from '~/constants'
import { Flex, Scroll, Heading, Button } from '~/components'
import { useStore } from '~/store'

import { INITIAL_TEXT, MOCK_CHUNKS } from './constants'
import { Chunk, ChunkModel, Speaker } from './components'

const SUBHEADER_HEIGHT = 65

const CHUNKS: ChunkModel[] = MOCK_CHUNKS.map((item) => new ChunkModel(item))

const SubHeader = styled.div`
  height: ${SUBHEADER_HEIGHT}px;
  border-bottom: 1px solid ${(props) => props.theme.colors?.border};
  padding: 0 24px;
  display: flex;
  align-items: center;
`

const Wrapper = styled(Flex)`
  && {
    height: calc(100vh - ${PAGE_HEADER_HEIGHT}px - ${SUBHEADER_HEIGHT + 1}px);
  }
` as typeof Flex

const Section = styled(Scroll)<{ withBorder?: boolean }>`
  flex: 1 1 0;
  padding: 24px;

  ${(props) =>
    props.withBorder &&
    css`
      border-right: 1px solid ${props.theme.colors.border};
    `}
`

export const HomePage: FC = observer(() => {
  const editorRef = useRef(null)

  const { mountPage, selectTextRange, speakers } = useStore().pages.HomeStore

  useEffect(mountPage, [])

  return (
    <>
      <SubHeader>
        <Heading>The state vs OJ Simpson</Heading>
      </SubHeader>

      <Wrapper>
        <Section withBorder>
          <GeneratedText text={INITIAL_TEXT} forwardedRef={editorRef} />
        </Section>

        <Section withBorder>
          <button onClick={() => selectTextRange(editorRef, 10, 30)} type="button">
            select
          </button>

          {CHUNKS.map((chunk) => (
            <Chunk chunk={chunk} speaker={speakers.get(chunk.speakerId)} />
          ))}
        </Section>

        <Section>
          {values(speakers).map((speaker, index) => (
            <Speaker index={index} speaker={speaker} />
          ))}

          <Button type="button" variant="outline" mx="auto" display="block" width={200} mt={4}>
            Add new speaker
          </Button>
        </Section>
      </Wrapper>
    </>
  )
})

interface GeneratedTextProps {
  text?: string
  forwardedRef: Ref<HTMLDivElement>
}

const GeneratedText: FC<GeneratedTextProps> = ({ text, forwardedRef }) => {
  return <div ref={forwardedRef}>{text}</div>
}
