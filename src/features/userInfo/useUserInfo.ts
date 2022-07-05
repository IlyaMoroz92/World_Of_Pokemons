import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getUserInfo } from "./userInfoSlice";

export const useUserInfo = () => {

    const userInfo = useAppSelector(state => state.userInfo.user)
    const dispatch = useAppDispatch();
    
    return {
        userInfo
    }
}