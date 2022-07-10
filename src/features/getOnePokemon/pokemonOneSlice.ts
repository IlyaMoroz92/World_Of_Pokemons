import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface IPokemon  {
    id: number | undefined
    image: string,
    name: string | undefined,
    like?: boolean,
    pokeball?: boolean,
    sprites?: any
    weight?: number
    height?: number
    types?: any
    species?: any
    stats?: any
    base_experience?: number
}

interface IPokemonsState {
    pokemon: IPokemon | null,
    isLoading: 'idle' | 'pending',
    error: string | null,
    species: {} | null
}

const initialState: IPokemonsState = {
    isLoading: 'idle',
    error: null,
    pokemon: null,
    species: null
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
        fetchPokemonSpecies: (state, action: PayloadAction<string>) => {
            
        },
        fetchPokemonSpeciesSuccess:(state, action:PayloadAction<object>) => {
            state.species = action.payload
            console.log(action.payload);
            
        },

    },
})

export const { 
    fetchPokemon, 
    fetchPokemonSuccess, 
    fetchPokemonFailure,
    fetchPokemonSpecies,
    fetchPokemonSpeciesSuccess} = pokemonOneSlice.actions

export default pokemonOneSlice.reducer