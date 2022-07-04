import { Card } from "../../components/Card";
import { usePokemons } from '../../features/getPokemons'
import {  IPokemon } from '../../features/getOnePokemon/pokemonOneSlice'
import '../FavoritesPage/favorites.scss'

export const FavoritesPage = () => {

    const { pokemonsInfo } = usePokemons()
    console.log(pokemonsInfo);
    
    return (
        <div className='favorites'>
            {pokemonsInfo?.map((el: IPokemon, ind: number) => {
            return (
            el.like
                &&
                <Card
                    id={el.id}
                    name={el.name}
                    sprites={el.sprites.other.dream_world.front_default}
                    key={el.id}
                />
            )
        })}
        </div>
    );
}