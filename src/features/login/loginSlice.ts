import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type loginUserPayload = {
    email: string | [string],
    password: string | [string],
    detail?: string | [string],
}

export type loginToken = {
    access: string,
    refresh: string,
}

type LoginState = {
    loginUser: loginUserPayload | null
    token: loginToken | null
    isLoading: 'idle' | 'pending',
    error: loginUserPayload | null,
}

const initialState: LoginState = {
    loginUser: null,
    token: null,
    isLoading: 'idle',
    error: null,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        signIn: (state, action: PayloadAction<loginUserPayload>) => {
            if(state.isLoading === 'idle'){
                state.isLoading = 'pending'
            }
        },
        signInSuccess: (state, action: PayloadAction<loginToken>) => {
            if(state.isLoading === 'pending'){
                state.isLoading = 'idle'
                localStorage.setItem('access', action.payload.access)
                localStorage.setItem('refresh', action.payload.refresh)
                state.error = null
            }
        },
        signInFailure: (state, action: PayloadAction<loginUserPayload>) => {
            state.isLoading = 'idle'
            state.error = action.payload
        },
    }
})

export const { signIn, signInSuccess, signInFailure} = loginSlice.actions

export default loginSlice.reducer