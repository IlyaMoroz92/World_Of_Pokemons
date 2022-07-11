import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery, put } from "redux-saga/effects";
import {
    verifyUserSuccess,
    verifyUserFailure,
    type TokenPayload
} from '../features/verify/verifySlice';

export function* verifyUser(action: PayloadAction<TokenPayload>) {
    try {
        const response: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/activation/',{
            method: 'POST',
            body: JSON.stringify(action.payload),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
        .then(res => res.ok ? res : Promise.reject(res))

        const data: TokenPayload = yield response.json()

        yield put(verifyUserSuccess(data))

    } catch(error: any) {
        console.log(error);
        
        const dataError: TokenPayload = yield error.json()
        
        yield put(verifyUserFailure(dataError))
    }
}

export function* verifySaga(){
    yield takeEvery('verify/verifyUser', verifyUser)
}