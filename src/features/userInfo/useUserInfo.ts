import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { type UserInfo, setNoUserInfo } from "./userInfoSlice";

export const useUserInfo = () => {

    const userInfo = useAppSelector(state => state.userInfo.user)
    const dispatch = useAppDispatch();
    
    const addNoUserInfo = (user: UserInfo) => {
        dispatch(setNoUserInfo(user))
    }

    return {
        userInfo,
        addNoUserInfo
    }
}