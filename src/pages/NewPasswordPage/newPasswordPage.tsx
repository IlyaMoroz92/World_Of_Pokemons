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
        
        inputUid.current?.addEventListener('focus', focusUid)
        inputToken.current?.addEventListener('focus', focusToken)
        inputPassword.current?.addEventListener('focus', focusPassword);

        return () => {
            inputUid.current?.removeEventListener('focus', focusUid)
            inputToken.current?.removeEventListener('focus', focusToken)
            inputPassword.current?.removeEventListener('focus', focusPassword);
        }
    })

    useEffect(() => {
        inputPassword.current?.focus()
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