import { Tag } from 'antd'
import type { PokemonTypes } from '../types/pokemonTypes'

interface TypeTagProps {
  type: PokemonTypes
}

const TypeTag = ({ type }: TypeTagProps) => {
  return (
    <Tag color={typeColors[type]} style={{ textTransform: 'capitalize' }}>
      {type}
    </Tag>
  )
}

const typeColors: Record<PokemonTypes, string> = {
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
