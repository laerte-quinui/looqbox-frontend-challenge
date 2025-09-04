export type PokemonProps = {
  id: number
  name: string
  sprites: {
    versions: {
      'generation-v': {
        'black-white': {
          front_default: string
          animated: {
            front_default: string
          }
        }
      }
    }
  }
  types: { type: { name: string } }[]
}

export type PokemonTypes =
  | 'fire'
  | 'water'
  | 'ice'
  | 'grass'
  | 'bug'
  | 'rock'
  | 'ground'
  | 'steel'
  | 'electric'
  | 'ghost'
  | 'dark'
  | 'poison'
  | 'psychic'
  | 'fairy'
  | 'dragon'
  | 'flying'
  | 'fighting'
  | 'normal'
