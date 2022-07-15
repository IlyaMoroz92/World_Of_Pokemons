import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IPokemon } from "../getOnePokemon/pokemonOneSlice";
import { fetchPokemons, likePokemon, pokeballPokemon, sortIdPokemons, sortNamePokemons } from "./pokemonsSlice";

export const usePokemons = () => {
    const pokemons = useAppSelector( state => state.pokemons.content)
    
    const pokemonsInfo = useAppSelector(state => state.pokemons.pokemonsInfo)

    const dispatch = useAppDispatch()

    const fetchNextPokemons = (page: number) => {
        dispatch(fetchPokemons(page))
    }

    const getSortIdPokemons = () => {
        dispatch(sortIdPokemons())
    }

    const getSortNamePokemons = () => {
        dispatch(sortNamePokemons())
    }

    const onLikePokemon = (id: number) => {
        dispatch(likePokemon(id))
    }

    const onPokeballPokemon = (id: number) => {
        dispatch(pokeballPokemon(id))
    }

    const getInfoPokemon = (id: number) => pokemonsInfo?.find((pokemons) => pokemons.id === id)

    return {
        pokemonsInfo,
        pokemons,
        fetchPokemons,
        onLikePokemon,
        onPokeballPokemon,
        getInfoPokemon,
        fetchNextPokemons,
        getSortIdPokemons,
        getSortNamePokemons,
    }
}


