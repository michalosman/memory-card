export const POKEMONS_AMOUNT = 12

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5)
}
