import axios from 'axios'

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5)
}

export const fetchPokemons = async (amount) => {
  const newPokemons = []

  for (let i = 1; i <= amount; i++) {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`
    const pokemon = await axios.get(pokemonUrl)
    const id = pokemon.data.id
    const name = capitalizeFirstLetter(pokemon.data.name)
    const image = pokemon.data.sprites.front_default
    newPokemons.push({ id, name, image })
  }

  return newPokemons
}
