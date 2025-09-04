import { SearchOutlined } from '@ant-design/icons'
import { Col, Flex, Input, Row } from 'antd'
import Logo from '../../../assets/Logo'

const HomeHeader = () => {
  return (
    <Row justify="center">
      <Col xs={24} sm={16} md={6}>
        <Flex vertical justify="center" align="center" gap={40}>
          <Logo />
          <Input
            placeholder="Search for a Pokémon"
            prefix={<SearchOutlined />}
          />
        </Flex>
      </Col>
    </Row>
  )
}

export default HomeHeader
