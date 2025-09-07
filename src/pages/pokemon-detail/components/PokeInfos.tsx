import { PlayCircleOutlined, StarOutlined } from '@ant-design/icons'
import { Button, Col, Flex, Image, Row, Typography } from 'antd'
import TypeTag from '../../../components/TypeTag'
import type { PokemonTypes } from '../../../types/pokemonTypes'

interface Props {
  data: {
    id: number
    name: string
    types: PokemonTypes[]
    cry: string
    sprite: string
    shinySprite: string
  }
}

const PokeInfos = ({ data }: Props) => {
  const { id, name, types, cry, sprite, shinySprite } = data

  return (
    <Row gutter={[24, 24]} style={{ height: '100%' }}>
      {/* Image */}
      <Col xs={24} sm={12} lg={8}>
        <Flex
          align="center"
          justify="center"
          style={{ minHeight: 260, overflow: 'hidden', borderRadius: 16 }}
        >
          <Image
            src={sprite}
            alt={`${name} image`}
            width="100%"
            fallback="https://placehold.co/260.png?text=Image+not+found"
            style={{ imageRendering: 'pixelated', maxHeight: '100%' }}
            preview={{ style: { imageRendering: 'pixelated' }, width: 600 }}
          />
        </Flex>
      </Col>

      {/* Infos */}
      <Col
        xs={24}
        sm={12}
        lg={15}
        style={{
          gap: 32,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end'
        }}
      >
        {/* Buttons */}
        <Flex align="center" gap={8}>
          <Button variant="solid" color="orange" icon={<PlayCircleOutlined />}>
            Play Cry
          </Button>
          <Button variant="outlined" color="default" icon={<StarOutlined />}>
            See Shiny
          </Button>
        </Flex>

        {/* Details */}
        <Flex vertical>
          <div>
            <Typography.Text disabled>#{id}</Typography.Text>
            <Typography.Title
              level={1}
              style={{ margin: 0, textTransform: 'capitalize' }}
            >
              {name}
            </Typography.Title>
          </div>

          <Flex style={{ marginTop: '8px' }}>
            {types.map(type => (
              <TypeTag key={type} type={type} />
            ))}
          </Flex>

          <Typography.Paragraph type="secondary" style={{ marginTop: '16px' }}>
            BULBASAUR can be seen napping in bright sunlight. There is a seed on
            its back. By soaking up the sun’s rays, the seed grows progressively
            larger.
          </Typography.Paragraph>
        </Flex>
      </Col>
    </Row>
  )
}

export default PokeInfos
