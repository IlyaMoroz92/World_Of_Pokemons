import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchPokemon, fetchPokemonSpecies } from "./pokemonOneSlice";

export const useOnePokemon = () => {
    
    const pokemon = useAppSelector( state => state.onePokemon.pokemon)
    const species = useAppSelector( state => state.onePokemon.species)

    const dispatch = useAppDispatch()

    const getPokemon = (id: number) => {
        dispatch(fetchPokemon(id))
    }

    const getSpecies = (url: string) => {
        dispatch(fetchPokemonSpecies(url))
    }


    return {
        getPokemon,
        pokemon,
        getSpecies,
        species,
    }
}


