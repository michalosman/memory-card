import React from 'react'
import styled from 'styled-components'
import Card from './Card'

// TODO
// * implement basic grid and cards
// * Use Poke API

const CardsGrid = () => {
  const cards = []

  for (let i = 0; i < 8; i++) {
    cards.push(<Card />)
  }

  return <CardsGridWrapper>{cards}</CardsGridWrapper>
}

const CardsGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
`

export default CardsGrid
