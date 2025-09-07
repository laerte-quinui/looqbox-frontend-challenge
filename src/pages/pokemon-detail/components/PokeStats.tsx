import { Col, Flex, Row, Statistic } from 'antd'
import DonutChart from '../../../components/DonutChart'

const PokeStats = () => {
  const measurements = [
    { title: 'Weight', value: 27.8, suffix: 'kg' },
    { title: 'Height', value: 153.3, suffix: 'cm' }
  ]
  const stats = [
    { name: 'Base Health', value: 45 },
    { name: 'Base Attack', value: 49 },
    { name: 'Base Defense', value: 49 },
    { name: 'Base Speed', value: 69 },
    { name: 'Special Attack', value: 65 },
    { name: 'Special Defense', value: 65 }
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
