import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserInfo = {
    email: string,
    id: number,
    username: string,
}

type UserInfoPayload = {
    user: UserInfo | null,
    errorUser: string | null,
}

const initialState: UserInfoPayload = {
    user: null,
    errorUser: null,
}

export const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        getUserInfo: (state, action: PayloadAction<UserInfo>) => {
            state.errorUser = null
            state.user = action.payload
        },
        userInfoFailure: (state, action: PayloadAction<any>) => {
            state.user = null
            state.errorUser = action.payload
        },
    }
})

export const { getUserInfo,  userInfoFailure } = userInfoSlice.actions

export default userInfoSlice.reducer