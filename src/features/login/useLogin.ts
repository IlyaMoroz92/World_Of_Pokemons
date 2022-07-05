import { useAppDispatch } from "../../redux/hooks";
import { type loginUserPayload, signIn} from './loginSlice';

export const useLogin = () => {

    const dispatch = useAppDispatch();
    
    const signInUser = (loginUser: loginUserPayload) => {
        dispatch(signIn(loginUser))
    }

    return {
        signInUser,
    }
}