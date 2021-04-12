import React from 'react'
import styled from 'styled-components'
import Scoreboard from './Scoreboard/Scoreboard'
import CardsGrid from './CardsGrid/CardsGrid'

const Main = ({pokemons}) => {
  return (
    <MainWrapper>
      <Scoreboard></Scoreboard>
      <CardsGrid pokemons={pokemons}></CardsGrid>
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 2rem;
  margin-bottom: 3.5rem;
`

export default Main
