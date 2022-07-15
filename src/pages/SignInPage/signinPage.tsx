import { Title } from "../../components/Title";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {NavLink} from 'react-router-dom'
import { useLogin } from "../../features/login";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { useState, useRef, useEffect } from "react";
import { useTheme } from '../../features/theme/useTheme'
import {useUserInfo } from '../../features/userInfo/useUserInfo'


export const SignInPage = () => {

    const {theme} = useTheme()

    const [valueEmail, setValueEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const inputEmail = useRef<HTMLInputElement>(null);
    const inputPassword = useRef<HTMLInputElement>(null);
    
    const changeInputEmail = (event: any): void => setValueEmail(event.target.value)
    const changeInputPassword = (event: any): void => setValuePassword(event.target.value)

    const login = useAppSelector(state => state.login);

    
    const { signInUser } = useLogin();
    const { userInfo } = useUserInfo();

    useEffect(() => {
        if(userInfo?.email){
            navigate('/')
        }
    }, [userInfo])

    const navigate = useNavigate();

    const handleSubmit = () => {
        const formData = {
            email: valueEmail,
            password: valuePassword
        }
        signInUser(formData);
    }

    useEffect(() => {
        if(login.error){
            navigate('/signin')
            login.error && setErrorEmail('check your email or password')
            login.error && setErrorPassword('check your email or password')
        }
    }, [login.error])

    useEffect(() => {
        const focusEmail = () => setErrorEmail('')
        const focusPassword = () => setErrorPassword('')

        let Email: any = inputEmail.current
        Email.addEventListener('focus', focusEmail);
        let Password: any = inputPassword.current
        Password.addEventListener('focus', focusPassword);
        
        return () => {
            Email.removeEventListener('focus', focusEmail);
            Password.removeEventListener('focus', focusPassword);
        }
    })

    useEffect(() => {
        let Input: any = inputEmail.current
        Input.focus() 
    }, [valueEmail])
    
    return (
        <>
            <Title text='Sign In' className={`title title--${theme}`}/>
            <div className={`sign__form sign__form--${theme}`}>
                <Input
                    title='Email'
                    className={theme}
                    type='email'
                    placeholder='Enter your email'
                    onChange={changeInputEmail}
                    ref={inputEmail}
                />
                <Input
                    title='Password'
                    className={theme}
                    type='password'
                    placeholder='Enter your password'
                    onChange={changeInputPassword}
                    errorMessage={errorPassword}
                    ref={inputPassword}
                />
                <Button
                    className={`text text--${theme}`}
                    type='button'
                    onClick={handleSubmit}
                    text='Sign In'
                />
                <p className="sign__question">Don't have an account ? <NavLink to='/signup'>Sign Up</NavLink></p>
            </div>
        </>
    )
}