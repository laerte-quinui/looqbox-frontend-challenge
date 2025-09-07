import { useQuery } from '@tanstack/react-query'
import { getSpecies } from './getSpecies'

export const useGetSpecies = (pokeId: number) => {
  return useQuery({
    queryKey: ['species', pokeId],
    queryFn: () => getSpecies(pokeId)
  })
}
