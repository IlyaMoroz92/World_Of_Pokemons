import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeEvery} from 'redux-saga/effects';
import {
    signInSuccess, 
    signInFailure,
    type loginUserPayload,
    type loginToken
} from '../features/login/loginSlice';

export function* signIn(action: PayloadAction<loginUserPayload>) {
    try {
        const response: Response = yield fetch('https://studapi.teachmeskills.by/auth/jwt/create/', {
            method: 'POST',
            body: JSON.stringify(action.payload),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
        .then(res => res.ok ? res : Promise.reject(res))

        const data: loginToken = yield response.json()

        yield put(signInSuccess(data))

    } catch(error: any) {

        const dataError: loginUserPayload = yield error.json()
        
        yield put(signInFailure(dataError))
    }
}

export function* signInSaga() {
    yield takeEvery('login/signIn', signIn)
}