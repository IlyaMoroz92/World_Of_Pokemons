import { Title } from "../../components/Title";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {NavLink} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { useAuth } from '../../features/auth/useAuth'
import React, { useState, useEffect } from "react";

export const SignUpPage = () => {

    const [valueName, setValueName] = useState('');
    const [errorName, setErrorName] = useState('');
    const [valueEmail, setValueEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [valueConfirmPassword, setValueConfirmPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

    const inputName = React.useRef<HTMLInputElement>(null);
    const inputEmail = React.useRef<HTMLInputElement>(null);
    const inputPassword = React.useRef<HTMLInputElement>(null);
    const inputConfirmPassword = React.useRef<HTMLInputElement>(null);

    const changeInputName = (event: any): void => setValueName(event.target.value)
    const changeInputEmail = (event: any): void => setValueEmail(event.target.value)
    const changeInputPassword = (event: any): void => setValuePassword(event.target.value)
    const changeInputConfirmPassword = (event: any): void => setValueConfirmPassword(event.target.value)

    const auth = useAppSelector(state => state.auth);

    const { signUpUser } = useAuth();

    const navigate = useNavigate();

    const handleSubmit = () => {
        const formData = {
            username: valueName,
            email: valueEmail,
            password: valuePassword
        }

        if (valuePassword === valueConfirmPassword) signUpUser(formData)
        if (auth.user) navigate('../verify')
    }

    useEffect(() => {
        if(auth.error){
            auth.error.username  && setErrorName(auth.error.username[0])
            auth.error.email && setErrorEmail(auth.error.email[0])
            auth.error.password && setErrorPassword(auth.error.password[0])
        }
    }, [auth.error])


    useEffect(() => {
        const focusName = () => setErrorName('')
        const focusEmail = () => setErrorEmail('')
        const focusPassword = () => setErrorPassword('')

        let Name: any = inputName.current
        Name.addEventListener('focus', focusName);
        let Email: any = inputEmail.current
        Email.addEventListener('focus', focusEmail);
        let Password: any = inputPassword.current
        Password.addEventListener('focus', focusPassword);

        valueConfirmPassword !== valuePassword
        ?
        setErrorConfirmPassword("You need to enter the same password")
        :
        setErrorConfirmPassword('')

        return () => {
            Name.removeEventListener('focus', focusName);
            Email.removeEventListener('focus', focusEmail);
            Password.removeEventListener('focus', focusPassword);
        }
    }, [valueConfirmPassword, valuePassword])

    useEffect(() => {
        let Name: any = inputName.current
        Name.focus()
        setErrorName('');
    }, [valueName])

    return (
        <>
            <Title text='Sign Up' className='title'/>
            <div className='sign__form'>
                <Input
                    title='Name'
                    className='input'
                    type='text'
                    placeholder='Введите имя'
                    onChange={changeInputName}
                    disabled={false}
                    value={valueName}
                    ref={inputName}
                    errorMessage={errorName}
                />
                <Input
                    title='Email'
                    className='password'
                    type='email'
                    placeholder='Enter your email'
                    onChange={changeInputEmail}
                    disabled={false}
                    value={valueEmail}
                    ref={inputEmail}
                    errorMessage={errorEmail}
                />
                <Input
                    title='Password'
                    className='password'
                    type='password'
                    placeholder='Enter your password'
                    onChange={changeInputPassword}
                    disabled={false}
                    value={valuePassword}
                    ref={inputPassword}
                    errorMessage={errorPassword}
                />
                <Input
                    title='Confirm password'
                    className='password'
                    type='password'
                    placeholder='Повторите пароль'
                    onChange={changeInputConfirmPassword}
                    disabled={false}
                    value={valueConfirmPassword}
                    ref={inputConfirmPassword}
                    errorMessage={errorConfirmPassword}
                />
                <Button
                    className='text'
                    type='button'
                    onClick={handleSubmit}
                    text='Sign Up '
                />
                <p className="sign__question">Already have an account ? <NavLink to='/signin'>Sign In</NavLink></p>
            </div>
        </>
    )
}