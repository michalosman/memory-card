import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import axios from 'axios'

const App = () => {
  const [pokemons, setPokemons] = useState([])
  const POKEMONS_AMOUNT = 12

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
        const newPokemon = { id, name, image, clicked }
        newPokemons.push(newPokemon)
      }
      setPokemons(newPokemons)
    }

    fetchPokemons()
    console.log(pokemons)
  }, [])

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  // load pokemons from api
  // load best score from localStorage
  // handle game

  return (
    <>
      <Header />
      <Main pokemons={pokemons} />
      <Footer />
    </>
  )
}

export default App
