import { ConfigProvider, Layout } from 'antd'
import Home from './pages/home/Home'

function App() {
  return (
    <ConfigProvider
      theme={{
        cssVar: true,
        token: {
          colorPrimary: '#00D084',
          colorSuccess: '#FF6900',
          colorText: '#172121',
          colorBgContainer: '#FFFFFF'
        }
      }}
    >
      <Layout className="container">
        <Home />
      </Layout>
    </ConfigProvider>
  )
}

export default App
