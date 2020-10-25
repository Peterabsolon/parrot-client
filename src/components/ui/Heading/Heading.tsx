import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { Heading as RebassHeading, HeadingProps as RebassHeadingProps } from 'rebass'
import styled from 'styled-components'

export interface HeadingProps extends RebassHeadingProps {
  foo?: string
}

const StyledRebassHeading = styled(RebassHeading)`
  && {
    font-weight: 400;
  }
` as typeof RebassHeading

export const Heading: FC<HeadingProps> = observer((props) => <StyledRebassHeading {...props} />)
