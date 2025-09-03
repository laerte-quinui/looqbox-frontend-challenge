import { Tag } from 'antd'

interface TypeTagProps {
  type: PokemonType
}

const TypeTag = ({ type }: TypeTagProps) => {
  return (
    <Tag color={typeColors[type]} style={{ textTransform: 'capitalize' }}>
      {type}
    </Tag>
  )
}

export type PokemonType =
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

const typeColors: Record<PokemonType, string> = {
  fire: 'red',
  water: 'blue',
  ice: 'cyan',
  grass: 'green',
  bug: 'green',
  rock: 'orange',
  ground: 'volcano',
  steel: 'cyan',
  electric: 'orange',
  ghost: 'purple',
  dark: 'purple',
  poison: 'purple',
  psychic: 'magenta',
  fairy: 'magenta',
  dragon: 'geekblue',
  flying: 'geekblue',
  fighting: 'volcano',
  normal: 'default'
}

export default TypeTag
