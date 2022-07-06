import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type actionNewPassword = {
    uid: string | [],
    token: string | [],
    new_password: string | [],
}

type NewPasswordState = {
    confirmData: actionNewPassword | null,
}

const initialState: NewPasswordState = {
    confirmData: null,

}

export const newPasswordSlice = createSlice({
    name: 'newPassword',
    initialState,
    reducers: {
        newPassword: (state, action: PayloadAction<actionNewPassword>) => {
        },
    }
})


export const { newPassword } = newPasswordSlice.actions

export default newPasswordSlice.reducer