import { Title } from "../../components/Title";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {NavLink} from 'react-router-dom'
import { useLogin } from "../../features/login";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import React, { useState, useRef, useEffect } from "react";


export const SignInPage = () => {

    const [valueEmail, setValueEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const inputEmail = React.useRef<HTMLInputElement>(null);
    const inputPassword = React.useRef<HTMLInputElement>(null);
    
    const changeInputEmail = (event: any): void => setValueEmail(event.target.value)
    const changeInputPassword = (event: any): void => setValuePassword(event.target.value)

    const login = useAppSelector(state => state.login);
    
    const { signInUser } = useLogin();

    const navigate = useNavigate();

    const handleSubmit = () => {
        const formData = {
            email: valueEmail,
            password: valuePassword
        }

        signInUser(formData);

        {!login.error
        &&
        navigate('/')}
    }

    useEffect(() => {   
        if(login.error){
            {login.error.email && setErrorEmail(login.error.email[0])}
            {login.error.password && setErrorPassword(login.error.password[0])}
        }
    }, [login.error])

    useEffect(() => {
        const focusEmail = () => setErrorEmail('')
        const focusPassword = () => setErrorPassword('')

        inputEmail.current?.addEventListener('focus', focusEmail);    
        inputPassword.current?.addEventListener('focus', focusPassword);
        
        return () => {
            inputEmail.current?.removeEventListener('focus', focusEmail);
            inputPassword.current?.removeEventListener('focus', focusPassword);
        }
    })  

    useEffect(() => {
        inputEmail.current?.focus() 
    }, [valueEmail])


    return (
        <>
            <Title text='Sign In' className='title'/>
            <div className='sign__form'>
                <Input
                    title='Email'
                    className='password'
                    type='email'
                    placeholder='Enter your email'
                    onChange={changeInputEmail}
                    /* value='mermermer@inbox.ru' */
                    errorMessage={errorEmail}
                    ref={inputEmail}
                />
                <Input
                    title='Password'
                    className='password'
                    type='password'
                    placeholder='Enter your password'
                    onChange={changeInputPassword}
                    /* value='16673688A' */
                    errorMessage={errorPassword}
                    ref={inputPassword}
                />
                <Button
                    className='text'
                    type='button'
                    onClick={handleSubmit}
                    text='Sign In '
                />
                <p className="sign__question">Don't have an account ? <NavLink to='/signup'>Sign Up</NavLink></p>
            </div>
        </>
    )
}