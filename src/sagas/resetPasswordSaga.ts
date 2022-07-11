import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery } from 'redux-saga/effects';
import {
    type actionResetPassword
} from '../features/resetPassword/resetPasswordSlice';

export function* resetPassword(action: PayloadAction<actionResetPassword>){
    const response: Response = yield fetch("https://studapi.teachmeskills.by/auth/users/reset_password/",{
        method: 'POST',
        body: JSON.stringify(action.payload),
        headers: {
            'accept': 'application/json',
            "Content-Type": "application/json"
        }
    })
    console.log(response);
}

export function* resetPasswordSaga() {
    yield takeEvery('resetPassword/resetPassword', resetPassword)
}