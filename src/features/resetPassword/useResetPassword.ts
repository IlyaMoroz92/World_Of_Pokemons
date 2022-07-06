import { useAppDispatch } from "../../redux/hooks";
import { type actionResetPassword, resetPassword } from "./resetPasswordSlice";

export const useResetPassword = () => {
    const dispatch = useAppDispatch();

    const resetPass = (email: actionResetPassword) => {
        dispatch(resetPassword(email))
    }

    return {
        resetPass,
    }
}