import { FC } from 'react'
import styled, { css } from 'styled-components'

export interface ScrollProps {
  className?: string
  autohide?: boolean
}

const Wrapper = styled.div<Pick<ScrollProps, 'autohide'>>`
  overflow: auto;

  // for Firefox
  scrollbar-color: ${(props) => props.theme.colors.scrollbar} transparent;

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;

    &-thumb {
      background: ${(props) => props.theme.colors.scrollbar};
      /* border-radius: 10px; */
      background-clip: content-box;

      &:hover {
        background: ${(props) => props.theme.colors.scrollbarHover};
      }
    }

    &-track,
    &-corner {
      background: transparent;
    }
  }

  ${(props) =>
    props.autohide &&
    css`
      scrollbar-color: transparent transparent;

      ::-webkit-scrollbar-thumb {
        background: transparent;
      }

      &:hover {
        scrollbar-color: ${props.theme.colors.scrollbar};

        ::-webkit-scrollbar-thumb {
          background: ${props.theme.colors.scrollbar};
        }
      }
    `}
`

export const Scroll: FC<ScrollProps> = ({ autohide = true, children, className }) => {
  return (
    <Wrapper className={className} autohide={autohide}>
      {children}
    </Wrapper>
  )
}
