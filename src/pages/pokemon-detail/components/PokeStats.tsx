import { Col, Flex, Row, Statistic } from 'antd'

const PokeStats = () => {
  const measurements = [
    { title: 'Weight', value: 27.8, suffix: 'kg' },
    { title: 'Height', value: 153.3, suffix: 'cm' }
  ]
  return (
    <Row gutter={24} style={{ height: '100%' }}>
      {/* Measurements */}
      <Col span={12}>
        <Flex vertical justify="center" gap={80} style={{ height: '100%' }}>
          {measurements.map(measurement => (
            <Statistic {...measurement} style={{ textAlign: 'center' }} />
          ))}
        </Flex>
      </Col>
      <Col span={12}></Col>
    </Row>
  )
}

export default PokeStats
