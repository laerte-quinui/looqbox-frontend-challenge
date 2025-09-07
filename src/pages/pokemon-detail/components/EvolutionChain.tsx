import { ExportOutlined } from '@ant-design/icons'
import { Card, Col, Image, Row } from 'antd'
import Meta from 'antd/es/card/Meta'

const EvolutionChain = () => {
  const data = [
    {
      id: 1,
      name: 'Bulbasaur',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/1.png'
    },
    {
      id: 2,
      name: 'Ivysaur',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/2.png'
    },
    {
      id: 3,
      name: 'Venusaur',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/3.png'
    }
  ]

  return (
    <Row gutter={[16, 16]}>
      {data.map(pokemon => (
        <Col span={8} key={pokemon.id}>
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
        </Col>
      ))}
    </Row>
  )
}

export default EvolutionChain
