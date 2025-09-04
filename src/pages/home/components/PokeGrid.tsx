import { Col, Empty, Flex, Pagination, Row, Typography } from 'antd'
import type { PokemonProps, PokemonTypes } from '../../../types/pokemonTypes'
import PokeCard from './PokeCard'

interface Props {
  pokemonCount: number
  pokemonList: PokemonProps[]
  isSearching: boolean
  isLoading: boolean
  isError: boolean
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const PokeGrid = ({
  pokemonCount,
  pokemonList,
  isSearching,
  isLoading,
  isError,
  currentPage,
  setCurrentPage
}: Props) => {
  if (isError) {
    return (
      <Flex
        vertical
        align="center"
        justify="center"
        style={{ marginTop: 80, height: '100%', minHeight: '60vh' }}
      >
        <Empty
          description={
            <Typography.Text disabled>
              Woops! Something went wrong while loading Pokémon data
            </Typography.Text>
          }
        />
      </Flex>
    )
  }

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

      {!isSearching && (
        <Pagination
          align="center"
          total={pokemonCount}
          defaultPageSize={18}
          current={currentPage}
          showSizeChanger={false}
          style={{ marginTop: 24 }}
          onChange={page => setCurrentPage(page)}
        />
      )}
    </>
  )
}

export default PokeGrid
