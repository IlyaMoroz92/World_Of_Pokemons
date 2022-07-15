import './Burger.scss'
import { User } from "../User";
import { Button } from "../Button";
import { Link } from 'react-router-dom';
import { useUserInfo } from '../../features/userInfo/useUserInfo'
import { ReactComponent as Login } from '../../assets/img/login.svg'
import {  useBurger } from '../../features/burger/useBurger'

type BurgerProps = {
    className?: string
    text?: string | null
}

export const Burger = (props: BurgerProps) => {

    const {burger, closeBurger} = useBurger()
    const {userInfo, addNoUserInfo} = useUserInfo()

    const logOut = () => {
        if(userInfo){
            addNoUserInfo(userInfo)
        }
    }

    return (
        <div onClick={e => e.stopPropagation()} className={`burger__menu burger__menu--${props.className}`}>
            {!userInfo ?
                <div onClick={closeBurger}>
                    <Link to='/signin'><Login className='burger__login'/></Link>
                </div>
                :
                <div className="user__info">
                    <User className='burger'/>
                    <Link to='/signin'>
                        <Button
                            text='Log Out'
                            className='text'
                            onClick={() => {
                                logOut();
                                closeBurger()
                            }}
                        />
                    </Link>
                    <Link to='/resetpassword'>
                        <Button
                            onClick={closeBurger}
                            text='Reset password'
                            className='text'
                        />
                    </Link>
                </div>
            }
                    <Link to='/'>
                        <Button
                            onClick={closeBurger}
                            text='All'
                            className='text'
                        />
                    </Link>
                    <Link to='/favorites'>
                        <Button
                            onClick={closeBurger}
                            text='Favorites ♥'
                            className='text'
                        />
                    </Link>
                    <Link to='/signin'>
                        <Button
                            onClick={closeBurger}
                            text='Sign In'
                            className='text'
                        />
                    </Link>
                    <Link to='/signup'>
                        <Button
                            onClick={closeBurger}
                            text='Sign Up'
                            className='text'
                        />
                    </Link>
                    </div>
    )
}