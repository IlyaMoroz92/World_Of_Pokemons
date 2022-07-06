import { useAppDispatch } from "../../redux/hooks";
import { type actionNewPassword, newPassword } from "./newPasswordSlice";

export const useNewPassword = () => {
    const dispatch = useAppDispatch();

    const setNewPassword = (confirmData: actionNewPassword) => {
        
        dispatch(newPassword(confirmData))
    }

    return {
        setNewPassword
    }
}