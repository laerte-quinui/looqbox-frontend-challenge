import { ConfigProvider } from 'antd'

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
      <h1>Hello world</h1>
    </ConfigProvider>
  )
}

export default App
