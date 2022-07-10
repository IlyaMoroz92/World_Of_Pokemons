import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchPokemons, likePokemon, pokeballPokemon } from "./pokemonsSlice";

export const usePokemons = () => {
    const pokemons = useAppSelector( state => state.pokemons.content)
    
    const pokemonsInfo = useAppSelector(state => state.pokemons.pokemonsInfo)

    const dispatch = useAppDispatch()
    
    useEffect(() => {
        if(!pokemons) {
            dispatch(fetchPokemons(0))
        }
    }, [dispatch])

    const fetchNextPokemons = (page: number) => {
        dispatch(fetchPokemons(page))
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
    }
}


