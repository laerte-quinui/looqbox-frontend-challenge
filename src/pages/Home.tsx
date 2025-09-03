import { SearchOutlined } from '@ant-design/icons'
import { Col, Flex, Input, Row, theme } from 'antd'
import { Content } from 'antd/es/layout/layout'
import Logo from '../assets/Logo'

const Home = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Content style={{ backgroundColor: colorBgContainer, padding: '64px 0px' }}>
      <Row justify="center">
        <Col span={6}>
          <Flex vertical justify="center" align="center" gap={40}>
            <Logo />
            <Input
              placeholder="Search for a Pokémon"
              prefix={<SearchOutlined />}
            />
          </Flex>
        </Col>
      </Row>
    </Content>
  )
}

export default Home
