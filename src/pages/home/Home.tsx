import { theme } from 'antd'
import { Content } from 'antd/es/layout/layout'
import HomeHeader from './components/Header'
import PokeGrid from './components/PokeGrid'

const Home = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Content style={{ backgroundColor: colorBgContainer, padding: '64px 0px' }}>
      <HomeHeader />
      <PokeGrid />
    </Content>
  )
}

export default Home
