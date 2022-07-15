import './Pokeball.scss'
import { Card } from "../Card";
import { usePokemons } from '../../features/getPokemons'
import {  IPokemon } from '../../features/getOnePokemon/pokemonOneSlice'

type PokeballProps = {
    className?: string
}

export const Pokeball = (props: PokeballProps) => {

    const { pokemonsInfo } = usePokemons()

    return (
        <div  onClick={e => e.stopPropagation()} className={`pokeball__menu pokeball__menu--${props.className}`}>
            {pokemonsInfo?.map((el: IPokemon) => {
            return (
            el.pokeball
                &&
                <Card
                    id={el.id}
                    className='pokeball'
                    sprites={el.sprites.other.dream_world.front_default}
                    key={el.id}
                    name={el.name}
                />
            )
        })}
        </div>
    )
}