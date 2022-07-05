import { PayloadAction } from "@reduxjs/toolkit";
import { put, call, takeEvery} from 'redux-saga/effects';
import {
    getUserInfo,
    userInfoFailure,
    type UserInfo,
} from '../features/userInfo/userInfoSlice';
import { type loginToken } from "../features/login/loginSlice";
import { customFetch } from "../utils/customFetch";

export function* UserInformation() {
    try {
        const url = 'https://studapi.teachmeskills.by/auth/users/me/' 

        const responseUserInso = customFetch(url)

        yield responseUserInso.then(res => res?.ok ? res : Promise.reject(res))
        
        const userInfo: UserInfo = yield (responseUserInso.then(data => data?.json()) as unknown as UserInfo)
        
        yield put(getUserInfo(userInfo))

    } catch(error:any) {        
        yield put(userInfoFailure(error.statusText))
    }
}
export function* UserInfoSaga() {
    yield takeEvery('login/signInSuccess', UserInformation)
}