import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery } from "redux-saga/effects";
import { type actionNewPassword } from "../features/newPassword/newPasswordSlice";

export function* newPassword(action: PayloadAction<actionNewPassword>) {
    const response: Response = yield fetch("https://studapi.teachmeskills.by/auth/users/reset_password_confirm/", {
            method: 'POST',
            body: JSON.stringify(action.payload),
            headers: {
                'accept': 'application/json',
                "Content-Type": "application/json"
            }
            
        })
        console.log(response);
}

export function* newPasswordSaga() {
    yield(takeEvery('newPassword/newPassword', newPassword))
}