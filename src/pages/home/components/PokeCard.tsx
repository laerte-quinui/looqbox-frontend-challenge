import { Card, Flex, Typography } from 'antd'
import Meta from 'antd/es/card/Meta'
import { useState } from 'react'
import TypeTag from '../../../components/TypeTag'
import '../../../styles/pokecard.css'
import type { PokemonTypes } from '../../../types/pokemonTypes'

interface Props {
  id: string
  name: string
  img: string
  animatedImg: string
  types: PokemonTypes[]
}

const PokeCard = ({ id, name, img, animatedImg, types }: Props) => {
  const [isHovering, setHovering] = useState(false)

  return (
    <Card
      hoverable
      className="pokecard"
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
      cover={
        <PokeImage img={img} animatedImg={animatedImg} animate={isHovering} />
      }
    >
      <Meta
        title={<Typography.Title level={3}>{name}</Typography.Title>}
        description={
          <Flex>
            {types.map(type => (
              <TypeTag key={type} type={type} />
            ))}

            <Typography.Text disabled style={{ marginLeft: 'auto' }}>
              #{id}
            </Typography.Text>
          </Flex>
        }
      />
    </Card>
  )
}

interface PokeImageProps {
  animate: boolean
  img: Props['img']
  animatedImg: Props['animatedImg']
}

const PokeImage = ({ animate, img, animatedImg }: PokeImageProps) => {
  return (
    <div className="pokecard__image--container">
      {!animate && (
        <img
          src={img}
          alt="pokemon image"
          className="pokecard__image--static"
        />
      )}

      {animate && (
        <img
          src={animatedImg}
          alt="pokemon image"
          className="pokecard__image--animated"
        />
      )}
    </div>
  )
}

export default PokeCard
