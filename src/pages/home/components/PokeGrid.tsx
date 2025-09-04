import { Col, Pagination, Row } from 'antd'
import { useState } from 'react'
import { useGetAllPokemon } from '../../../api/usePokemon'
import type { PokemonTypes } from '../../../types/pokemonTypes'
import PokeCard from './PokeCard'

const PokeGrid = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const allPokemonQueries = useGetAllPokemon(currentPage)
  const pokemonList = allPokemonQueries
    .map(query => query.data)
    .filter(pokemon => pokemon !== undefined)

  const isLoading = allPokemonQueries.some(query => query.isLoading)

  return (
    <>
      <Row justify="center" gutter={[16, 16]} style={{ marginTop: 24 }}>
        {pokemonList.map(pokemon => {
          const blackWhiteVer =
            pokemon.sprites.versions['generation-v']['black-white']
          const hasAnimatedSprite =
            blackWhiteVer.animated.front_default !== null

          return (
            <Col xs={24} sm={12} md={8} lg={6} xxl={4} key={pokemon.name}>
              <PokeCard
                id={String(pokemon.id)}
                name={pokemon.name}
                animatedImg={
                  hasAnimatedSprite
                    ? blackWhiteVer.animated.front_default
                    : pokemon.sprites.front_default
                }
                img={
                  hasAnimatedSprite
                    ? blackWhiteVer.front_default
                    : pokemon.sprites.front_default
                }
                types={
                  pokemon.types.map(type => type.type.name) as PokemonTypes[]
                }
                isLoading={isLoading}
              />
            </Col>
          )
        })}
      </Row>

      <Pagination
        total={570}
        align="center"
        current={currentPage}
        showSizeChanger={false}
        style={{ marginTop: 24 }}
        onChange={page => setCurrentPage(page)}
      />
    </>
  )
}

export default PokeGrid
