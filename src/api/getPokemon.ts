import axios from 'axios'

const limit = 18

export const getAllPokemon = async () => {
  const data = []

  for (let i = 1; i <= limit; i++)
    try {
      const res = await getPokemon(800)
      data.push(res)
    } catch (error) {
      console.log(error)
    }

  return data
}

export const getPokemon = async (pokeId: number) => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
