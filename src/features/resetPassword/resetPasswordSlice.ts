import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type actionResetPassword = {
    email: string
}

type ResetPasswordState = {
    email: string | null,
}

const initialState: ResetPasswordState = {
    email: null,
}

export const resetPasswordSlice = createSlice({
    name: 'resetPassword',
    initialState,
    reducers: {
        resetPassword: (state, action: PayloadAction<actionResetPassword>) => {

        },
    }
})

export const { resetPassword} = resetPasswordSlice.actions

export default resetPasswordSlice.reducer