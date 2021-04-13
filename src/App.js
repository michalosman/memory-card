import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { fetchPokemons, shuffleArray } from './utils'

const App = () => {
  const POKEMONS_AMOUNT = 12
  const [pokemons, setPokemons] = useState([])
  const [clickedPokemons, setClickedPokemons] = useState([])
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  useEffect(() => {
    fetchPokemons(POKEMONS_AMOUNT).then((newPokemons) =>
      setPokemons(shuffleArray(newPokemons))
    )
  }, [])

  const handleCardClick = (e) => {
    const pokemonName = e.target.parentNode.lastChild.textContent
    playRound(pokemonName)
    setPokemons(shuffleArray(pokemons))
  }

  const playRound = (pokemonName) => {
    if (clickedPokemons.includes(pokemonName)) {
      resetGame()
    } else {
      const newScore = currentScore + 1
      if (newScore > bestScore) setBestScore(newScore)
      setCurrentScore(newScore)
      setClickedPokemons((prevState) => [...prevState, pokemonName])
    }
  }

  const resetGame = () => {
    setClickedPokemons([])
    setCurrentScore(0)
  }

  return (
    <>
      <Header />
      <Main
        pokemons={pokemons}
        handleCardClick={handleCardClick}
        currentScore={currentScore}
        bestScore={bestScore}
      />
      <Footer />
    </>
  )
}

export default App
