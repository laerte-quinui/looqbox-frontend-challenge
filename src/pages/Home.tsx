import { SearchOutlined } from '@ant-design/icons'
import { Col, Flex, Input, Row, theme } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { useEffect, useState } from 'react'
import { getAllPokemon } from '../api/getPokemon'
import Logo from '../assets/Logo'
import PokeCard from '../components/PokeCard'
import type { PokemonProps, PokemonTypes } from '../types/pokemonTypes'

const Home = () => {
  const [allPokemon, setAllPokemon] = useState<PokemonProps[]>([])

  const {
    token: { colorBgContainer }
  } = theme.useToken()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllPokemon()
      setAllPokemon(data)
    }

    fetchData()
  }, [])

  return (
    <Content
      style={{ backgroundColor: colorBgContainer, padding: '64px 24px' }}
    >
      <Row justify="center">
        <Col xs={24} sm={16} md={6}>
          <Flex vertical justify="center" align="center" gap={40}>
            <Logo />
            <Input
              placeholder="Search for a Pokémon"
              prefix={<SearchOutlined />}
            />
          </Flex>
        </Col>
      </Row>

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
              types={
                pokemon.types.map(type => type.type.name) as PokemonTypes[]
              }
            />
          </Col>
        ))}
      </Row>
    </Content>
  )
}

export default Home
