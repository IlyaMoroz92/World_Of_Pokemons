import { Title } from '../Title'
import { Picture } from '../Picture'
import { Likebar } from '../Likebar'
import './Card.scss'
import { Link } from 'react-router-dom';

type CardProps = {
    id?: number
    name?: string
    sprites?: any
}

export const Card = (props:CardProps)  => {
    
    return (
        <div className="card">
                <h2>{props.id}</h2>
            <Picture
                className='card'
                src={props.sprites}
                alt={props.name}
            />
            <Title
                text={props.name}
            />
            <Likebar pokemonId={props.id}/>
        </div>
    )
}

/* 
type CardProps = {
    className?: string
    text?: string
    pokemon?: any
}

export const Card = ({pokemon}: CardProps) => {
    return (
        <div className="card">
            <h2>{pokemon.id}</h2>
            <Link className='card__title'  to={`/pokemon/${pokemon.id}`}>
                <Picture
                    className='card'
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt={pokemon.name}
                />
            </Link>
            <Link className='card__title' to={`/pokemon/${pokemon.id}`}>
                <Title
                    text={pokemon.name}
                    className='card__title'
                />
            </Link>
            <Likebar/>
        </div>
    )
} */