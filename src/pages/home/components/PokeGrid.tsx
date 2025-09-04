import { Col, Row } from 'antd'
import { useEffect, useState } from 'react'
import { getAllPokemon } from '../../../api/getPokemon'
import type { PokemonProps, PokemonTypes } from '../../../types/pokemonTypes'
import PokeCard from './PokeCard'

const PokeGrid = () => {
  const [allPokemon, setAllPokemon] = useState<PokemonProps[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllPokemon()
      setAllPokemon(data)
    }
    fetchData()
  }, [])

  return (
    <Row justify="center" gutter={[16, 16]} style={{ marginTop: 24 }}>
      {allPokemon.map(pokemon => (
        <Col xs={24} sm={12} md={8} lg={4} key={pokemon.name}>
          <PokeCard
            id={String(pokemon.id)}
            name={pokemon.name}
            animatedImg={
              pokemon.sprites.versions['generation-v']['black-white'].animated
                .front_default
            }
            img={
              pokemon.sprites.versions['generation-v']['black-white']
                .front_default
            }
            types={pokemon.types.map(type => type.type.name) as PokemonTypes[]}
          />
        </Col>
      ))}
    </Row>
  )
}

export default PokeGrid
