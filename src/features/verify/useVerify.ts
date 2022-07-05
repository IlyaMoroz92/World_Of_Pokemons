import { useAppDispatch } from "../../redux/hooks";
import { verifyUser, type TokenPayload } from "./verifySlice";

export const useVerify = () => {

    const dispatch = useAppDispatch();

    const verifyToken = (token: TokenPayload) => {
        dispatch(verifyUser(token))
    }
    
    return {
        verifyToken,
    }
}