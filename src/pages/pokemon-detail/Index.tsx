import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button, Col, Divider, Flex, Row, theme } from 'antd'
import { Content } from 'antd/es/layout/layout'
import Logo from '../../assets/Logo'
import PokeInfos from './components/PokeInfos'

const PokemonDetail = () => {
  const {
    token: { colorBgContainer }
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
        style={{ marginBottom: 40 }}
      >
        Go Back
      </Button>

      <Row>
        <Col xs={12}>
          <PokeInfos />
        </Col>
        <Divider type="vertical" style={{ minHeight: 260 }} />
        <Col xs={12}>{/* Content for the right column */}</Col>
      </Row>
    </Content>
  )
}

export default PokemonDetail
