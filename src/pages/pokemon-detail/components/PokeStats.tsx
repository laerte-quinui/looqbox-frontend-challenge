import { Col, Flex, Row, Statistic } from 'antd'
import DonutChart from '../../../components/DonutChart'

interface Props {
  data: {
    height: number
    weight: number
    stats: {
      hp: number
      attack: number
      defense: number
      specialAttack: number
      specialDefense: number
      speed: number
    }
  }
}

const PokeStats = ({ data }: Props) => {
  const measurements = [
    { title: 'Weight', value: data.weight, suffix: 'kg' },
    { title: 'Height', value: data.height, suffix: 'm' }
  ]
  const stats = [
    { name: 'Base Health', value: data.stats.hp },
    { name: 'Base Attack', value: data.stats.attack },
    { name: 'Base Defense', value: data.stats.defense },
    { name: 'Base Speed', value: data.stats.speed },
    { name: 'Special Attack', value: data.stats.specialAttack },
    { name: 'Special Defense', value: data.stats.specialDefense }
  ]

  return (
    <Row gutter={[24, 24]} style={{ height: '100%' }}>
      {/* Measurements */}
      <Col xs={24} md={12}>
        <Flex vertical justify="center" gap={80} style={{ height: '100%' }}>
          {measurements.map(measurement => (
            <Statistic {...measurement} style={{ textAlign: 'center' }} />
          ))}
        </Flex>
      </Col>

      {/* Stats */}
      <Col xs={24} md={12}>
        <Row style={{ height: '100%' }}>
          {stats.map(stat => (
            <Col xs={12} sm={8} lg={12} xl={8} key={stat.name}>
              <DonutChart data={stat} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

export default PokeStats
