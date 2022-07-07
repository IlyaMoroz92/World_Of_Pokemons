
import { Navigate } from 'react-router-dom'
import { useAppSelector } from "../../redux/hooks";

interface PublicRouteProps {
  children: JSX.Element
}
export const PrivateRoute = ({ children }: PublicRouteProps): JSX.Element => {
  const user = useAppSelector(state => state.userInfo.user);
  return !user ? <Navigate to="/" /> : children
}