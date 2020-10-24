import React, { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

import { Box, Button, Flex, Heading, Text, Input } from '~/components'
import { useStore } from '~/store'

const Fact = styled.div`
  margin-top: 15px;
  width: 400px;
  padding: 4px;
  color: ${(props) => props.theme.colors.text};
`

export const HomePage: FC = observer(() => {
  const {
    city,
    facts,
    factsFetching,
    fetchFacts,
    fetchWeather,
    mountPage,
    setCity,
    weather,
  } = useStore().pages.HomeStore

  useEffect(mountPage, [])

  return (
    <>
      <Flex>
        <Box>
          <div>
            <Heading color="primary" mb={2}>
              Todo
            </Heading>
            <Text>- Mockserver</Text>
          </div>

          <Button
            type="button"
            variant="primary"
            onClick={fetchFacts}
            disabled={factsFetching}
            width={150}
            mt={3}
            mr={2}
          >
            {factsFetching ? 'Fetching' : 'Fetch request'}
          </Button>

          {facts.map((fact) => (
            <Fact key={fact._id}>{fact.text}</Fact>
          ))}
        </Box>

        <Box>
          <Heading color="primary" mb={2}>
            Weather
          </Heading>

          <div>
            City{` `}
            <Input value={city} onChange={setCity} />
            <Button onClick={fetchWeather}>Fetch weather</Button>
          </div>

          <Box mt={3}>{weather?.weather.summary.description}</Box>
        </Box>
      </Flex>
    </>
  )
})
