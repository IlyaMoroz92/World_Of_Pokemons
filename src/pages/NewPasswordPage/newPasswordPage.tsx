import { Title } from "../../components/Title";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {NavLink} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useNewPassword } from "../../features/newPassword/useNewPassword";
import  { useState, useRef, useEffect } from "react";


export const NewPasswordPage = () => {

    const [valueUid, setValueUid] = useState('');
    const [errorUid, setErrorUid] = useState('');
    const [valueToken, setValueToken] = useState('');
    const [errorToken, setErrorToken] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const inputUid = useRef<HTMLInputElement>(null);
    const inputToken = useRef<HTMLInputElement>(null);
    const inputPassword = useRef<HTMLInputElement>(null);

    
    const changeInputUid = (event: any): void => setValueUid(event.target.value)
    const changeInputToken = (event: any): void => setValueToken(event.target.value)
    const changeInputPassword = (event: any): void => setValuePassword(event.target.value)


    const { setNewPassword } = useNewPassword();
    const navigate = useNavigate();


    const handleSubmit = () => {
        const formData = {
            uid: valueUid,
            token: valueToken,
            new_password: valuePassword,
        }
        
        setNewPassword(formData)

        navigate('/')
    }

    useEffect(() => {
        const focusUid = () => setErrorUid('')
        const focusToken = () => setErrorToken('')
        const focusPassword = () => setErrorPassword('')
        
        let Uid: any = inputUid.current
        Uid.addEventListener('focus', focusUid)
        let Token: any =  inputToken.current
        Token.addEventListener('focus', focusToken)
        let Password: any = inputPassword.current
        Password.addEventListener('focus', focusPassword);

        return () => {
            Uid.removeEventListener('focus', focusUid)
            Token.removeEventListener('focus', focusToken)
            Password.removeEventListener('focus', focusPassword);
        }
    })

    useEffect(() => {
        let Password: any = inputPassword.current
        Password.focus()
        setErrorPassword('');
    }, [valuePassword])


    return (
        <>
            <Title text='New Password' className='title'/>
            <div className='sign__form'>
                <Input
                    title='Uid'
                    className='input'
                    type='text'
                    placeholder='Enter your uid'
                    onChange={changeInputUid}
                    value={valueUid}
                    errorMessage={errorUid}
                    ref={inputUid}
                />
                <Input
                    title='Token'
                    className='input'
                    type='text'
                    placeholder='Enter your token'
                    onChange={changeInputToken}
                    value={valueToken}
                    errorMessage={errorToken}
                    ref={inputToken}
                />
                <Input
                    title='New Password'
                    className='password'
                    type='password'
                    placeholder='Enter your new password'
                    onChange={changeInputPassword}
                    disabled={false}
                    value={valuePassword}
                    ref={inputPassword}
                    errorMessage={errorPassword}
                />
                <Button
                    className='text'
                    type='button'
                    onClick={handleSubmit}
                    text='Set password'
                />
                <p className="sign__question">Don't have an account ? <NavLink to='/signup'>Sign Up</NavLink></p>
            </div>
        </>
    )
}