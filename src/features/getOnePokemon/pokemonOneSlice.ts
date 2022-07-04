import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface IPokemon  {
    id: number,
    image: string,
    name: string,
    like?: boolean,
    pokeball?: boolean,
    sprites?: any
    weight?: number
    height?: number
    types?: any
}

interface IPokemonsState {
    pokemon: IPokemon | null,
    isLoading: 'idle' | 'pending',
    error: string | null,
}

const initialState: IPokemonsState = {
    isLoading: 'idle',
    error: null,
    pokemon: null,
}

export const pokemonOneSlice = createSlice({
    name: 'onePokemon',
    initialState,
    reducers: {
        fetchPokemon: (state, action:PayloadAction<number>) => {

            if(state.isLoading === 'idle'){
                state.isLoading = 'pending'
            }
        },
        fetchPokemonSuccess:(state, action:PayloadAction<IPokemon>) => {
            
            if(state.isLoading === 'pending'){
                state.isLoading = 'idle'
                state.pokemon = action.payload
            }
        },
        fetchPokemonFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = 'idle'
            state.error = action.payload
            
        },
    },
})

export const { 
    fetchPokemon, 
    fetchPokemonSuccess, 
    fetchPokemonFailure} = pokemonOneSlice.actions

export default pokemonOneSlice.reducer