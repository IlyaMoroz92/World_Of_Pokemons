import { Title } from '../Title'
import { Picture } from '../Picture'
import { Likebar } from '../Likebar'
import './Card.scss'
import { Link } from 'react-router-dom';
import { useTheme } from '../../features/theme/useTheme'

type CardProps = {
    id?: number
    name?: string
    sprites?: any
    className?: string
    likebar?: boolean
    titleId?: boolean
    nameId?: boolean
}

export const Card = (props:CardProps)  => {

    const {theme} = useTheme()
    
    return (
        <div className={`card card--${props.className} card--${theme}`}>
            {props.titleId && <h2 >{props.id}</h2>}
            <Link className='card__title'  to={`/pokemon/${props.id}`}>
                <Picture
                    className={`card card--${props.className}`}
                    src={props.sprites}
                    alt={props.name}
                />
            </Link>
            {props.nameId &&<Link className='card__title'  to={`/pokemon/${props.id}`}>
                <Title
                    text={props.name}
                    className="card__title"
                />
            </Link>}
            {props.likebar===true && <Likebar
                className={`card card--${props.className}`}
                pokemonId={props.id}/>}
        </div>
    )
}