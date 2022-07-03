import { Button } from '../Button'
import './Likebar.scss'
import { ReactComponent as Pokeball } from '../../assets/img/pokeball.svg'
import { ReactComponent as Like} from '../../assets/img/Like.svg'
import { ReactComponent as Like2} from '../../assets/img/Up1.svg'
import { usePokemons } from '../../features/getPokemons';

type LikebarProps = {
    pokemonId?: number | undefined
}

export const Likebar = ({pokemonId}: LikebarProps) => {
    
    
    const {onLikePokemon, onPokeballPokemon, getInfoPokemon} = usePokemons()

    const id = Number(pokemonId);
    console.log(id);
    const pokemonInfo = getInfoPokemon(id)

    
    return (
        <div className= 'likebar'>
            <div className="likebar__left ">
                <Button
                    icon={pokemonInfo?.like ? <Like className='button__active' /> : <Like/>}
                    className={'with-icon'}
                    onClick={() => onLikePokemon(id)}
                />
            </div>
            <div className="likebar__right">
                <Button
                    icon={pokemonInfo?.pokeball ? <Pokeball className='button__active' /> : <Pokeball/>}
                    className={'with-icon'}
                    onClick={() => onPokeballPokemon(id)}
                />
            </div>
        </div>
    )
}