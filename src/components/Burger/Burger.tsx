import React from 'react'
import './Burger.scss'
import { User } from "../User";
import { Button } from "../Button";
import { ReactComponent as Closed} from './img/Closed.svg' 
import { ReactComponent as Light} from '../../assets/img/Light.svg' 
import { ReactComponent as Dark} from '../../assets/img/Dark.svg'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useTheme } from '../../features/theme/useTheme'
import { Link } from 'react-router-dom';
import { useUserInfo } from '../../features/userInfo/useUserInfo'
import { useLogin } from '../../features/login/useLogin'
import { ReactComponent as Login } from '../../assets/img/login.svg'
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";


type BurgerProps = {
    className?: string
    text?: string | null
}

export const Burger = (props: BurgerProps) => {

    const {userInfo} = useUserInfo()
    const dispatch = useDispatch();
  /*   const login = useAppSelector(state => state.login);
    const user = useAppSelector(state => state.userInfo.user);
    
    const { signInUser } = useLogin();

    const navigate = useNavigate();

    const handleSubmit = () => {
        const formData = {
            email: '',
            password: ''
        }

        signInUser(formData);

        {!login.error
        &&
        navigate('/')}
        console.log(login)
    } */

    return (
        <div className={`burger__menu burger__menu--${props.className}`}>
                       <Link to='/'>
                        <Button
                            text='All'
                            className='text'
                        />
                    </Link>
                    <Link to='/favorites'>
                        <Button
                            text='Favorites ♥'
                            className='text'
                        />
                    </Link>
                    <Link to='/signin'>
                        <Button
                            text='Sign In'
                            className='text'
                        />
                    </Link>
                    <Link to='/signup'>
                        <Button
                            text='Sign Up'
                            className='text'
                        />
                    </Link>

                        {!userInfo ?
                            <div>
                                <Link to='/signin'><Login className='burger__login'/></Link>
                            </div>
                            :
                            <div className="user__info">
                                <User className='burger'/>
                                <Button
                                text='Log Out'
                                className='text'
                                /* onClick={handleSubmit} */
                                />
                                <Link to='/resetpassword'>
                                    <Button
                                        text='Reset password'
                                        className='text'
                                    />
                                </Link>
                            </div>
                        }
                    </div>
    )
}