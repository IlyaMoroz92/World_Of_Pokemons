import { useAppDispatch } from "../../redux/hooks";

import { type SignUpPayload, signUp } from "./authSlice";

export const useAuth = () => {
    
    const dispatch = useAppDispatch();

    const signUpUser = (user: SignUpPayload) => dispatch(signUp(user))

    return {
        signUpUser,
    }
}