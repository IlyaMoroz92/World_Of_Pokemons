import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type SignUpPayload = {
    username?: string | [string],
    email?: string | [string],
    password?: string | [string],
}

export type SignUpSuccessPayload = {
    username: string,
    email: string,
    id: number,
}

type AuthState = {
    user: SignUpSuccessPayload | null,
    isLoading: 'idle' | 'pending',
    error: SignUpPayload | null,
}

const initialState: AuthState = {
    user: null,
    isLoading: 'idle',
    error: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signUp: (state, action: PayloadAction<SignUpPayload>) => {
            if(state.isLoading === 'idle'){
                state.isLoading = 'pending'
            }
        }, 
        signUpSuccess: (state, action: PayloadAction<SignUpSuccessPayload>) => {
            if(state.isLoading === 'pending'){
                state.isLoading = 'idle'
                state.user = action.payload
                state.error = null
            }
        },
        signUpFailure: (state, action: PayloadAction<SignUpPayload>) => {
            state.isLoading = 'idle'
            state.error = action.payload
        },
    },
})

export const { signUp, signUpFailure, signUpSuccess } = authSlice.actions

export default authSlice.reducer