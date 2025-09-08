import { ExportOutlined } from '@ant-design/icons'
import { Card, Col, Image, Row, Typography } from 'antd'
import Meta from 'antd/es/card/Meta'
import { Link } from 'react-router'

interface Props {
  data: {
    id: string
    name: string
  }[]
}

const EvolutionChain = ({ data }: Props) => {
  const evolutionData = data.map(pokemon => ({
    id: pokemon.id,
    name: pokemon.name
      .split('-')
      .join(' ')
      .replace(/\b\w/g, char => char.toUpperCase()),
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
  }))

  return (
    <>
      <Typography.Title level={3}>Evolution Chain</Typography.Title>

      <Row gutter={[16, 16]}>
        {evolutionData.map(pokemon => (
          <Col xs={24} sm={12} md={8} key={pokemon.id}>
            <Link
              to={`/pokemon/${pokemon.id}`}
              target="_blank"
              rel="noreferrer"
            >
              <Card
                hoverable
                cover={
                  <Image
                    src={pokemon.img}
                    alt={pokemon.name}
                    preview={false}
                    style={{ imageRendering: 'pixelated' }}
                  />
                }
                extra={
                  <a
                    href={`/pokemon/${pokemon.id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExportOutlined />
                  </a>
                }
                styles={{ header: { border: 0, minHeight: 40 } }}
              >
                <Meta title={pokemon.name} style={{ textAlign: 'center' }} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default EvolutionChain
