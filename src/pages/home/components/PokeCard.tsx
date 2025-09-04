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
        <PokeImage
          img={img}
          name={name}
          animatedImg={animatedImg}
          isHovering={isHovering}
        />
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
  isHovering: boolean
  name: Props['name']
  img: Props['img']
  animatedImg: Props['animatedImg']
}

const PokeImage = ({ name, img, animatedImg, isHovering }: PokeImageProps) => {
  return (
    <div className="pokecard__image--container">
      {!isHovering && (
        <img
          src={img}
          alt={`${name} image`}
          className="pokecard__image--static"
        />
      )}

      {isHovering && (
        <img
          src={animatedImg}
          alt={`${name} image`}
          className="pokecard__image--animated"
        />
      )}
    </div>
  )
}

export default PokeCard
