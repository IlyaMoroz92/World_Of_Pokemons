import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

interface burgerState {
    value: string
}

const initialState: burgerState = {
    value: ''
}

export const burgerSlice = createSlice ({
    name: 'burger',
    initialState,
    reducers: {
        setBurger: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    }
})

export const {setBurger} = burgerSlice.actions
export default burgerSlice.reducer