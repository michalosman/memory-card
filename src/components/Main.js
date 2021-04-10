import React from 'react'
import styled from 'styled-components'
import ScoreTable from './ScoreTable/ScoreTable'
import CardsGrid from './CardsGrid/CardsGrid'

const Main = () => {
  return (
    <MainWrapper>
      <ScoreTable></ScoreTable>
      <CardsGrid></CardsGrid>
    </MainWrapper>
  )
}

const MainWrapper = styled.main``

export default Main
