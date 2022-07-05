import { createSlice, type PayloadAction} from '@reduxjs/toolkit';

export type TokenPayload = {
    uid: string | [string],
    token: string | [string],
}

type VerifyState = {
    token: TokenPayload | null,
    isLoading: 'idle' | 'pending',
    error: TokenPayload | null,
}

const initialState: VerifyState = {
    token: null,
    isLoading: 'idle',
    error: null,
}

export const verifySlice = createSlice({
    name: 'verify',
    initialState,
    reducers: {
        verifyUser: ( state, action: PayloadAction<TokenPayload>) => {
            if(state.isLoading === 'idle'){
                state.isLoading = 'pending'
            }
        },
        verifyUserSuccess: (state, action: PayloadAction<TokenPayload>) => {  
            if(state.isLoading === 'pending'){
                state.isLoading = 'idle'
                state.token = action.payload
                state.error = null
            }
        },
        verifyUserFailure: (state, action: PayloadAction<TokenPayload>) => {
            state.isLoading = 'idle'
            state.error = action.payload
        },
    }
})

export const {verifyUser, verifyUserSuccess, verifyUserFailure} = verifySlice.actions

export default verifySlice.reducer