/* eslint-disable jsx-a11y/click-events-have-key-events */

import { FC, useEffect } from 'react'
import { AppProps } from 'next/app'
import { PageTransition } from 'next-page-transitions'
import styled, { createGlobalStyle } from 'styled-components'
import { Flex } from 'rebass'
import { observer } from 'mobx-react-lite'

import {
  APP_NAME,
  RouteEnum,
  RouteLabels,
  PAGE_PADDING,
  PAGE_MAX_WIDTH,
  PAGE_HEADER_HEIGHT,
} from '~/constants'
import { Heading } from '~/components/ui/Heading'
import { Link } from '~/components/ui/Link'
import { ParrotIcon } from '~/components/icons'
import { useStore } from '~/store'
import { keys } from '~/utils'

const PAGE_TRANSITION_DURATION = 80

// TODO: theme types
const GlobalStyles = createGlobalStyle<any>`
  html,
  body,
  body * {
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.body};
    line-height: 1.7;
    font-size: 18px;
  }

  body {
    background: ${(props) => props.theme.colors.background};
  }

  .page-transition-enter {
    opacity: 0;
  }
  
  .page-transition-enter-active {
    opacity: 1;
    transition: ${PAGE_TRANSITION_DURATION}ms ease-in;
  }
  
  .page-transition-exit {
    opacity: 1;
  }
  
  .page-transition-exit-active {
    opacity: 0;
    transition: ${PAGE_TRANSITION_DURATION}ms ease-out;
  }
`

const Header = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors?.border};
`

const Content = styled.div`
  flex: 1;
  margin: 0 auto;
  max-width: ${PAGE_MAX_WIDTH}px;
  padding: 0 ${PAGE_PADDING}px;
`

const HeaderContent = styled(Content)`
  height: ${PAGE_HEADER_HEIGHT - 1}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > * {
    flex: 1 1 0;
  }
`

const PageContent = styled(Content)`
  min-height: calc(100vh - ${PAGE_HEADER_HEIGHT}px);
`

export const App: FC<AppProps> = observer(({ Component, pageProps, router }) => {
  const store = useStore()

  const { toggleTheme, key: themeKey } = store.utils.theme
  const { appReady } = store.utils

  const windowObj = typeof window === 'undefined' ? undefined : window

  useEffect(store.utils.initApp, [windowObj])

  return (
    <>
      <GlobalStyles />

      <Header>
        <HeaderContent>
          <Flex alignItems="center">
            <ParrotIcon mr={2} size={30} primary />
            <Heading fontSize={20} color="primary">
              {APP_NAME}
            </Heading>
          </Flex>

          <Flex justifyContent="center" style={{ visibility: 'hidden' }}>
            {keys(RouteEnum).map((key) => {
              const href = RouteEnum[key]

              return (
                <Heading key={href} fontSize={14} color="primary" mr={2}>
                  <Link href={href}>{RouteLabels[href]}</Link>
                </Heading>
              )
            })}
          </Flex>

          <Flex justifyContent="flex-end">
            <span role="button" onClick={toggleTheme} tabIndex={-1}>
              {themeKey === 'light' ? 'Dark' : 'Light'}
            </span>
            {/* <span onClick={toggleMockApi} role="button" tabIndex={-1}>
              {useMockApi ? 'API' : 'Mocks'}
            </span> */}
          </Flex>
        </HeaderContent>
      </Header>

      {appReady && (
        <PageTransition timeout={PAGE_TRANSITION_DURATION} classNames="page-transition">
          <PageContent key={router.route}>
            <Component {...pageProps} />
          </PageContent>
        </PageTransition>
      )}
    </>
  )
})
