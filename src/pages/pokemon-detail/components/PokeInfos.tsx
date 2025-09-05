import { PlayCircleOutlined, StarOutlined } from '@ant-design/icons'
import { Button, Col, Flex, Image, Row, Typography } from 'antd'
import TypeTag from '../../../components/TypeTag'

const PokeInfos = () => {
  return (
    <Row gutter={24}>
      {/* Image */}
      <Col span={8}>
        <Flex align="center" justify="center" style={{ height: 260 }}>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif"
            alt="bulbasaur image"
            width="100%"
            fallback="https://placehold.co/260.png?text=Image+not+found"
            style={{ imageRendering: 'pixelated', maxHeight: '100%' }}
          />
        </Flex>
      </Col>

      {/* Infos */}
      <Col
        span={15}
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
            <Typography.Text disabled>#1</Typography.Text>
            <Typography.Title style={{ margin: 0 }} level={1}>
              Bulbasaur
            </Typography.Title>
          </div>

          <Flex style={{ marginTop: '8px' }}>
            <TypeTag type="grass" />
            <TypeTag type="poison" />
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
