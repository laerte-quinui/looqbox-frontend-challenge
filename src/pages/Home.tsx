import { SearchOutlined } from '@ant-design/icons'
import { Col, Flex, Input, Row, theme } from 'antd'
import { Content } from 'antd/es/layout/layout'
import Logo from '../assets/Logo'
import PokeCard from '../components/PokeCard'

const Home = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

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

      <Row justify="center" style={{ marginTop: 24 }}>
        <Col xs={24} sm={12} md={8} lg={4}>
          <PokeCard
            id={'001'}
            name="Bulbasaur"
            animatedImg="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif"
            img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/1.png"
            types={['grass', 'poison']}
          />
        </Col>
      </Row>
    </Content>
  )
}

export default Home
