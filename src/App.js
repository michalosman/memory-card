import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { capitalizeFirstLetter, shuffleArray, POKEMONS_AMOUNT } from './utils'
import axios from 'axios'

const App = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    async function fetchPokemons() {
      const newPokemons = []

      for (let i = 1; i <= POKEMONS_AMOUNT; i++) {
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`
        const pokemon = await axios.get(pokemonUrl)
        const id = pokemon.data.id
        const name = capitalizeFirstLetter(pokemon.data.name)
        const image = pokemon.data.sprites.front_default
        const clicked = false
        newPokemons.push({ id, name, image, clicked })
      }
      shuffleArray(newPokemons)
      setPokemons(newPokemons)
    }

    fetchPokemons()
  }, [])

  return (
    <>
      <Header />
      <Main pokemons={pokemons} />
      <Footer />
    </>
  )
}

export default App
