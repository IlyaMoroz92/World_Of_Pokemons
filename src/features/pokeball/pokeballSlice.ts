import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

interface pokeballState {
    value: string
}

const initialState: pokeballState = {
    value: ''
}

export const pokeballSlice = createSlice ({
    name: 'pokeball',
    initialState,
    reducers: {
        setPokeball: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    }
})

export const {setPokeball} = pokeballSlice.actions
export default pokeballSlice.reducer