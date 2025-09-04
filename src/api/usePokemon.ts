import { useQueries, useQuery } from '@tanstack/react-query'
import { getPokemon } from './getPokemon'

export const useGetPokemon = (pokeId: number) => {
  return useQuery({
    queryKey: [pokeId],
    queryFn: () => getPokemon(pokeId)
  })
}

export const useGetAllPokemon = () => {
  const limit = 18
  return useQueries({
    queries: Array.from({ length: limit }, (_, i) => ({
      queryKey: [i + 1],
      queryFn: () => getPokemon(i + 1)
    }))
  })
}
