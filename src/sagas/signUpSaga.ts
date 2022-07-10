import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeEvery } from 'redux-saga/effects';

import {
    signUpFailure,
    signUpSuccess,
    type SignUpPayload,
    type SignUpSuccessPayload
} from '../features/auth/authSlice';

export function* signUp(action: PayloadAction<SignUpPayload>) {
    try {
        const response: Response =  yield fetch('https://studapi.teachmeskills.by/auth/users/',{
            method: 'POST',
            body: JSON.stringify(action.payload),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
        .then(res => res.ok ? res : Promise.reject(res))

        const data: SignUpSuccessPayload = yield response.json()
        
        yield put(signUpSuccess(data))

    } catch(error: any) {
        
        const dataError: SignUpPayload = yield error.json()
        
        yield put(signUpFailure(dataError))
    }
}

export function* singUpSaga(){
    yield takeEvery('auth/signUp', signUp)
}