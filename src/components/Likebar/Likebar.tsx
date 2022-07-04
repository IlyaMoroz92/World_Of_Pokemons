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
    const pokemonInfo = getInfoPokemon(id)

    
    return (
        <div className= 'likebar'>
            <div className="likebar__left ">
                <Button
                    icon={ <Like/>}
                    className={pokemonInfo?.like ? 'with-icon button--active' : 'with-icon'}
                    onClick={() => onLikePokemon(id)}
                />
            </div>
            <div className="likebar__right">
                <Button
                    icon={ <Pokeball/>}
                    className={pokemonInfo?.pokeball ? 'with-icon button--active' : 'with-icon'}
                    onClick={() => onPokeballPokemon(id)}
                />
            </div>
        </div>
    )
}