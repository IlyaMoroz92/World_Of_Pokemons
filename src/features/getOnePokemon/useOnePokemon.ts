import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchPokemon } from "./pokemonOneSlice";

export const useOnePokemon = () => {
    
    const pokemon = useAppSelector( state => state.onePokemon.pokemon)

    const dispatch = useAppDispatch()

    const getPokemon = (id: number) => {
        dispatch(fetchPokemon(id))
    }


    return {
        getPokemon,
        pokemon,
    }
}


