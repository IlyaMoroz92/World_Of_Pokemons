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
    isFavoritePokemon: number[]
    isPokeballPokemon: number[]
}


const initialState: IPokemonsState = {
    content: null,
    isLoading: 'idle',
    error: null,
    pokemonsInfo: null,
    isFavoritePokemon: [],
    isPokeballPokemon: []
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
                state.pokemonsInfo = action.payload.map(pokemon => state.isFavoritePokemon.some(id =>  id === pokemon.id) ? {...pokemon, like: true} : pokemon)
                if(state.pokemonsInfo) {
                    state.pokemonsInfo = state.pokemonsInfo.map(pokemon => state.isPokeballPokemon.some(id =>  id === pokemon.id) ? {...pokemon, pokeball: true} : pokemon)
                }
            }
        },
        fetchPokemonsInfoFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = 'idle'
            state.error = action.payload
            
        },
        /* likePokemon: (state, action: PayloadAction<number>) => {
            if(state.pokemonsInfo) {
                state.pokemonsInfo = state.pokemonsInfo.map(pokemon => pokemon.id === action.payload ? {...pokemon, like: !pokemon.like ? true : undefined} : pokemon)
            }
        },
        pokeballPokemon: (state, action: PayloadAction<number>) => {
            if(state.pokemonsInfo) {
                state.pokemonsInfo = state.pokemonsInfo.map(pokemon => pokemon.id === action.payload ? {...pokemon, pokeball: !pokemon.pokeball} : pokemon)
            }
        }, */
        likePokemon: (state, action: PayloadAction<number>) => {
            if(state.pokemonsInfo) {
                if(state.isFavoritePokemon.some(id => id === action.payload)) {
                    state.isFavoritePokemon = state.isFavoritePokemon.filter(id => id !== action.payload)
                } else {
                    state.isFavoritePokemon = [action.payload, ...state.isFavoritePokemon]
                }
                if(state.pokemonsInfo) {
                    
                    state.pokemonsInfo = state.pokemonsInfo.map(pokemon => state.isFavoritePokemon.some(id => id === pokemon.id) ? {...pokemon, like: true} : {...pokemon, like: false} )
                }
                
            }
        },
        pokeballPokemon: (state, action: PayloadAction<number>) => {
                if(state.isPokeballPokemon.some(id => id === action.payload)) {
                    state.isPokeballPokemon = state.isPokeballPokemon.filter(id => id !== action.payload)
                } else {
                    state.isPokeballPokemon = [action.payload, ...state.isPokeballPokemon]
                }
                if(state.pokemonsInfo) {
                    
                    state.pokemonsInfo = state.pokemonsInfo.map(pokemon => state.isPokeballPokemon.some(id => id === pokemon.id) ? {...pokemon, pokeball: true} : {...pokemon, pokeball: false} )
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