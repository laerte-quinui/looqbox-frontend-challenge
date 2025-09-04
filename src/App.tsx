import { StyleProvider } from '@ant-design/cssinjs'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConfigProvider, Layout } from 'antd'
import Home from './pages/home/Home'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StyleProvider layer>
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
      </StyleProvider>
    </QueryClientProvider>
  )
}

export default App
