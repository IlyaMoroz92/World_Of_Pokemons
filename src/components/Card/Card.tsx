import { Title } from '../Title'
import { Picture } from '../Picture'
import { Likebar } from '../Likebar'
import './Card.scss'


type CardProps = {
    className?: string
    text?: string
    pokemon?: any
}

export const Card = ({pokemon}: CardProps) => {
    return (
        <div className="card">
                <h2>{pokemon.id}</h2>
            <Picture
                className='card'
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
            />
            <Title
                text={pokemon.name}
            />
            <Likebar/>
        </div>
    )
}