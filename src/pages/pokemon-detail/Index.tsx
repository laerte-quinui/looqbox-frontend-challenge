import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button, Col, Flex, Row, theme } from 'antd'
import { Content } from 'antd/es/layout/layout'
import Logo from '../../assets/Logo'
import EvolutionChain from './components/EvolutionChain'
import PokeEffectiveness from './components/PokeEffectiveness'
import PokeInfos from './components/PokeInfos'
import PokeStats from './components/PokeStats'

const PokemonDetail = () => {
  const {
    token: { colorBgContainer, colorSplit }
  } = theme.useToken()

  return (
    <Content style={{ backgroundColor: colorBgContainer, padding: '64px 0px' }}>
      <Flex align="center" justify="center">
        <Logo width={124} height={32} />
      </Flex>

      <Button
        size="small"
        color="default"
        variant="outlined"
        icon={<ArrowLeftOutlined />}
        style={{ marginBottom: 40, marginTop: 24 }}
      >
        Go Back
      </Button>

      <Row gutter={[0, 40]}>
        <Col xs={24} lg={12} style={{ borderRight: `1px solid ${colorSplit}` }}>
          <PokeInfos />
        </Col>
        <Col xs={24} lg={12}>
          <PokeStats />
        </Col>
      </Row>

      <Row gutter={[0, 40]} style={{ marginTop: 80 }}>
        <Col xs={24} xl={12}>
          <PokeEffectiveness />
        </Col>
        <Col xs={24} xl={12}>
          <EvolutionChain />
        </Col>
      </Row>
    </Content>
  )
}

export default PokemonDetail
