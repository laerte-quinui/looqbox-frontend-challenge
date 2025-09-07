import { Badge, Col, Flex, Row, Typography } from 'antd'
import type { PokemonTypes } from '../../../types/pokemonTypes'
import { typeColors } from '../../../utils/typeColors'

const PokeEffectiveness = () => {
  const data: { [key: string]: PokemonTypes[] }[] = [
    { effective: ['water', 'ground', 'rock'] },
    { weak: ['fire', 'ice', 'poison', 'bug', 'flying'] }
  ]

  return (
    <Row gutter={[0, 24]} style={{ height: '100%' }}>
      {data.map(d => (
        <Col xs={24} sm={12}>
          <Typography.Title level={3}>
            {d.effective ? 'Super-effective against' : 'Super-weak against'}
          </Typography.Title>

          <Flex vertical gap={16}>
            {(d.effective ?? d.weak).map(type => (
              <Badge
                key={type}
                color={typeColors[type]}
                text={
                  <Typography.Text
                    style={{ fontSize: 20, textTransform: 'capitalize' }}
                  >
                    {type}
                  </Typography.Text>
                }
              />
            ))}
          </Flex>
        </Col>
      ))}
    </Row>
  )
}

export default PokeEffectiveness
