import { Title } from '../Title'
import { Picture } from '../Picture'
import { Likebar } from '../Likebar'
import './Card.scss'


type CardProps = {
    className?: string
    text?: string
}

export const Card = (props: CardProps) => {
    return (
        <div className="card">
            <h2>ID</h2>
            <Picture
                className='card'
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'
                alt={'Picture'}
            />
            <Title
                text="Bulba"
            />
            <Likebar/>
        </div>
    )
}