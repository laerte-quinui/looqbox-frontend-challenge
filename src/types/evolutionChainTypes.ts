type EvolutionChain = {
  species: {
    name: string
  }
  evolves_to: EvolutionChain[]
}

export type EvolutionChainProps = {
  chain: EvolutionChain
}
