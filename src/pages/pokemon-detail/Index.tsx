import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button, Col, Flex, Row, theme } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { useGetPokemon } from '../../api/usePokemon'
import { useGetSpecies } from '../../api/useSpecies'
import { useGetTypes } from '../../api/useTypes'
import Logo from '../../assets/Logo'
import EvolutionChain from './components/EvolutionChain'
import PokeEffectiveness from './components/PokeEffectiveness'
import PokeInfos from './components/PokeInfos'
import PokeStats from './components/PokeStats'
import { formatTypeEffectiveness } from './data/pokeEffectiveness'
import { formatPokeInfo } from './data/pokeInfo'
import { formatPokeStats } from './data/pokeStats'

const PokemonDetail = () => {
  const { data: pokeData, isLoading } = useGetPokemon(1)
  const { data: speciesData } = useGetSpecies(1)
  const { data: typesData } = useGetTypes(pokeData?.types[0].type.name || '')

  const {
    token: { colorBgContainer, colorSplit }
  } = theme.useToken()

  if (isLoading || !pokeData || !speciesData || !typesData) {
    return <div>Loading...</div>
  }

  const pokeInfos = formatPokeInfo(pokeData, speciesData)
  const pokeStats = formatPokeStats(pokeData)
  const pokeEffectiveness = formatTypeEffectiveness(typesData)

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
          <PokeInfos data={pokeInfos} />
        </Col>
        <Col xs={24} lg={12}>
          <PokeStats data={pokeStats} />
        </Col>
      </Row>

      <Row gutter={[0, 40]} style={{ marginTop: 80 }}>
        <Col xs={24} xl={12}>
          <PokeEffectiveness data={pokeEffectiveness} />
        </Col>
        <Col xs={24} xl={12}>
          <EvolutionChain />
        </Col>
      </Row>
    </Content>
  )
}

export default PokemonDetail
