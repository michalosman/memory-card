import React from 'react'
import styled from 'styled-components'
import Scoreboard from './Scoreboard/Scoreboard'
import CardsGrid from './CardsGrid/CardsGrid'

const Main = () => {
  return (
    <MainWrapper>
      <Scoreboard></Scoreboard>
      <CardsGrid></CardsGrid>
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
`

export default Main
