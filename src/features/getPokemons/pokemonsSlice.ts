import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {IPokemon} from '../getOnePokemon/pokemonOneSlice'

export type Pokemons = {
    name: string
    url: string
}[]

interface IPokemonsState {
    content: Pokemons | null,
    pokemonsInfo: IPokemon[] | null,
    isLoading: 'idle' | 'pending',
    error: string | null,
}

const initialState: IPokemonsState = {
    content: null,
    isLoading: 'idle',
    error: null,
    pokemonsInfo: null,
}

export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        fetchPokemons: (state, action:PayloadAction<number>) => {
            if(state.isLoading === 'idle'){
                state.isLoading = 'pending'
            }
        },
        fetchPokemonsSuccess:(state, action:PayloadAction<Pokemons>) => {
            if(state.isLoading === 'pending'){
                state.content = action.payload
            }
        },
        fetchPokemonsFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = 'idle'
            state.error = action.payload
        },
        fetchPokemonsInfoSuccess:(state, action:PayloadAction<Array<IPokemon>>) => {
            if(state.isLoading === 'pending'){
                state.isLoading = 'idle'
                state.pokemonsInfo = action.payload
            }
        },
        fetchPokemonsInfoFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = 'idle'
            state.error = action.payload
            
        },
        likePokemon: (state, action: PayloadAction<number>) => {
            if(state.pokemonsInfo) {
                state.pokemonsInfo = state.pokemonsInfo.map(pokemon => pokemon.id === action.payload ? {...pokemon, like: !pokemon.like ? true : undefined} : pokemon)
            }
        },
        pokeballPokemon: (state, action: PayloadAction<number>) => {
            if(state.pokemonsInfo) {
                state.pokemonsInfo = state.pokemonsInfo.map(pokemon => pokemon.id === action.payload ? {...pokemon, pokeball: !pokemon.pokeball} : pokemon)
            }
        },
    },
})

export const { 
    fetchPokemons, 
    fetchPokemonsSuccess, 
    fetchPokemonsFailure,
    fetchPokemonsInfoSuccess, 
    fetchPokemonsInfoFailure,
    likePokemon,
    pokeballPokemon} = pokemonsSlice.actions

export default pokemonsSlice.reducer