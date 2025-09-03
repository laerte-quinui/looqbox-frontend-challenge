import { ConfigProvider, Layout } from 'antd'
import Home from './pages/Home'

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
      <Layout>
        <Home />
      </Layout>
    </ConfigProvider>
  )
}

export default App
