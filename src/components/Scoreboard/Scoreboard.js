import React from 'react'
import styled from 'styled-components'

const Scoreboard = () => {
  return (
    <ScoreboardWrapper>
      <Title>Score</Title>
      <Scores>
        <CurrentScore>Current: 10</CurrentScore>
        <BestScore>Best: 20</BestScore>
      </Scores>
    </ScoreboardWrapper>
  )
}

const ScoreboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h2`
  font-size: 3rem;
  padding: 0.5rem;
`

const Scores = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
`

const CurrentScore = styled.div`
  font-size: 2rem;
  padding: 0.5rem;
`

const BestScore = styled.div`
  font-size: 2rem;
  padding: 0.5rem;
`

export default Scoreboard
