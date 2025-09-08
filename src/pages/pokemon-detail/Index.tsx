import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button, Col, Flex, Row, theme } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { Link, useNavigate, useParams } from 'react-router'
import { useGetEvolutionChain } from '../../api/useEvolutionChain'
import { useGetPokemon } from '../../api/usePokemon'
import { useGetSpecies } from '../../api/useSpecies'
import { useGetTypes } from '../../api/useTypes'
import Logo from '../../assets/Logo'
import EvolutionChain from './components/EvolutionChain'
import PokeEffectiveness from './components/PokeEffectiveness'
import PokeInfos from './components/PokeInfos'
import PokeStats from './components/PokeStats'
import StateHandlers from './components/StateHandlers'
import { extractSpecies } from './data/evolutionChain'
import { formatTypeEffectiveness } from './data/pokeEffectiveness'
import { formatPokeInfo } from './data/pokeInfo'
import { formatPokeStats } from './data/pokeStats'

const PokemonDetail = () => {
  const params = useParams()
  const navigate = useNavigate()
  const {
    token: { colorBgContainer, colorSplit }
  } = theme.useToken()

  const {
    data: pokeData,
    isFetching: pokeLoading,
    error: pokeError
  } = useGetPokemon(Number(params.id))
  const {
    data: speciesData,
    isFetching: speciesLoading,
    error: speciesError
  } = useGetSpecies(Number(params.id))
  const {
    data: typesData,
    isFetching: typesLoading,
    error: typesError
  } = useGetTypes(pokeData?.types[0].type.name || '')
  const {
    data: evolutionChainData,
    isFetching: evolutionChainLoading,
    error: evolutionChainError
  } = useGetEvolutionChain(speciesData?.evolution_chain.url || '')

  const isLoading =
    pokeLoading || speciesLoading || typesLoading || evolutionChainLoading
  const isError = pokeError || speciesError || typesError || evolutionChainError

  if (isError?.message.includes('404')) navigate('/not-found')

  if (!pokeData || !speciesData || !typesData || !evolutionChainData)
    return StateHandlers({ isError: !!isError, isLoading })

  const pokeInfos = formatPokeInfo(pokeData, speciesData)
  const pokeStats = formatPokeStats(pokeData)
  const pokeEffectiveness = formatTypeEffectiveness(typesData)
  const evolutionChain = extractSpecies(evolutionChainData.chain)

  return (
    <Content style={{ backgroundColor: colorBgContainer, padding: '64px 0px' }}>
      <Flex align="center" justify="center">
        <Link to="/">
          <Logo width={124} height={32} />
        </Link>
      </Flex>

      <Link to="/">
        <Button
          size="small"
          color="default"
          variant="outlined"
          style={{ marginBottom: 40, marginTop: 24 }}
          icon={<ArrowLeftOutlined />}
        >
          Go Back
        </Button>
      </Link>

      <Row gutter={[0, 40]}>
        <Col xs={24} lg={12} style={{ borderRight: `1px solid ${colorSplit}` }}>
          <PokeInfos
            data={pokeInfos}
            isLoading={pokeLoading || speciesLoading}
          />
        </Col>
        <Col xs={24} lg={12}>
          <PokeStats data={pokeStats} isLoading={pokeLoading} />
        </Col>
      </Row>

      <Row gutter={[0, 40]} style={{ marginTop: 80 }}>
        <Col xs={24} xl={12}>
          <PokeEffectiveness
            data={pokeEffectiveness}
            isLoading={typesLoading}
          />
        </Col>
        <Col xs={24} xl={12}>
          <EvolutionChain
            data={evolutionChain}
            isLoading={evolutionChainLoading}
          />
        </Col>
      </Row>
    </Content>
  )
}

export default PokemonDetail
