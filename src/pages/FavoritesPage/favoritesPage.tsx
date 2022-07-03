import { Card } from "../../components/Card";
import { usePokemons } from '../../features/getPokemons'
import {  IPokemon } from '../../features/getOnePokemon/pokemonOneSlice'

export const FavoritesPage = () => {

    const { pokemons } = usePokemons()
    console.log(pokemons);
    
    return (
        <div>
            FavoritesPokemons page
        </div>
    );
}