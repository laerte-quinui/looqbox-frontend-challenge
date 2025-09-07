import { Badge, Col, Flex, Row, Typography } from 'antd'
import type { PokemonTypes } from '../../../types/pokemonTypes'
import { typeColors } from '../../../utils/typeColors'

interface Props {
  data: { [key: string]: PokemonTypes[] }
}

const PokeEffectiveness = ({ data }: Props) => {
  const title = {
    double_damage_to: 'Super-effective against',
    double_damage_from: 'Super-weak against'
  }

  return (
    <Row gutter={[0, 24]} style={{ height: '100%' }}>
      {Object.entries(data).map(([key, types]) => (
        <Col xs={24} sm={12} key={key}>
          <Typography.Title level={3}>
            {title[key as keyof typeof title]}
          </Typography.Title>

          <Flex vertical gap={16}>
            {types.map(type => (
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
