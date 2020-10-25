import { FC, useEffect } from 'react'
import { AppProps } from 'next/app'
import { PageTransition } from 'next-page-transitions'
import styled, { createGlobalStyle } from 'styled-components'
import { Flex } from 'rebass'
import { observer } from 'mobx-react-lite'

import { APP_NAME, RouteEnum, RouteLabels } from '~/constants'
import { Button } from '~/components/ui/Button'
import { Heading } from '~/components/ui/Heading'
import { Link } from '~/components/ui/Link'
import { ParrotIcon } from '~/components/icons'
import { useStore } from '~/store'
import { keys } from '~/utils'

const PAGE_TRANSITION_DURATION = 80
const PAGE_PADDING = 16
const PAGE_MAX_WIDTH = 1366
const HEADER_HEIGHT = 80

// TODO: theme types
const GlobalStyles = createGlobalStyle<any>`
  html,
  body,
  body * {
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.body};
    line-height: ${(props) => props.theme.lineHeights.body};
    font-size: 15px;
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

const Wrapper = styled.div<{ background: string }>`
  background: ${(props) => props.background};
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  background: ${(props) => props.theme.colors?.backgroundDark};
  margin-bottom: 24px;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: ${PAGE_MAX_WIDTH}px;
  padding: 0 ${PAGE_PADDING}px;
`

const HeaderContent = styled(Content)`
  height: ${HEADER_HEIGHT}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > * {
    flex: 1 1 0;
  }
`

const PageContent = styled(Content)`
  flex: 1;
`

const Background = styled.div<{ color: string }>`
  background: ${(props) => props.color};
`

export const App: FC<AppProps> = observer(({ Component, pageProps, router }) => {
  const store = useStore()

  const { toggleTheme, theme, key: themeKey } = store.utils.theme
  const { appReady, useMockApi, toggleMockApi } = store.utils

  const windowObj = typeof window === 'undefined' ? undefined : window

  useEffect(store.utils.initApp, [windowObj])

  return (
    <Wrapper background={theme.colors?.background}>
      <GlobalStyles />

      <Header>
        <HeaderContent>
          <Flex alignItems="center">
            <ParrotIcon mr={2} size={30} primary />
            <Heading fontSize={16} color="primary">
              {APP_NAME}
            </Heading>
          </Flex>

          <Flex justifyContent="center">
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
            <Button onClick={toggleTheme} variant="outline" mr={2}>
              {themeKey === 'light' ? 'Dark' : 'Light'} mode
            </Button>

            <Button onClick={toggleMockApi} variant="outline">
              {useMockApi ? 'Disable' : 'Enable'} mocked API
            </Button>
          </Flex>
        </HeaderContent>
      </Header>

      <Background color={theme.colors?.background}>
        {appReady && (
          <PageTransition timeout={PAGE_TRANSITION_DURATION} classNames="page-transition">
            <PageContent key={router.route}>
              <Component {...pageProps} />
            </PageContent>
          </PageTransition>
        )}
      </Background>
    </Wrapper>
  )
})
