import { Title } from "../../components/Title";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useVerify } from "../../features/verify/useVerify"
import { useAppSelector } from "../../redux/hooks";
import React, { useState, useEffect } from "react";
import { useTheme } from '../../features/theme/useTheme'


export const VerifyPage = () => {

    const {theme} = useTheme()

    const [valueUid, setValueUid] = useState('');
    const [errorUid, setErrorUid] = useState('');
    const [valueToken, setValueToken] = useState('');
    const [errorToken, setErrorToken] = useState('');
    const auth = useAppSelector(state => state.auth);

    const inputUid = React.useRef<HTMLInputElement>(null);
    const inputToken = React.useRef<HTMLInputElement>(null);

    const changeInputUid = (event: any): void => setValueUid(event.target.value)
    const changeInputToken = (event: any): void => setValueToken(event.target.value)

    const verify = useAppSelector(state => state.verify);

    const { verifyToken } = useVerify();

    const navigate = useNavigate();

    const handleSubmit = () => {
        const formData = {
            uid: valueUid,
            token: valueToken
        }

        verifyToken(formData);

        verify.token
        &&
        navigate('/signin')
    }

    useEffect(() => {
        if(verify.error){
            verify.error.uid && setErrorUid(verify.error.uid[0])
            verify.error.token && setErrorToken(verify.error.token[0])
        }
    }, [verify.error])
    console.log(verify);

    useEffect(() => {
        if(auth.user){
            /* navigate('/signin') */
        }
    }, [auth.user])

    useEffect(() => {
        const focusUid = () => setErrorUid('')
        const focusToken = () => setErrorToken('')

        let Uid: any = inputUid.current
        Uid.addEventListener('focus', focusUid)
        let Token: any =  inputToken.current
        Token.addEventListener('focus', focusToken)

        return () => {
            Uid.removeEventListener('focus', focusUid)
            Token.removeEventListener('focus', focusToken)
        }
    })

    useEffect(() => {
        let Uid: any = inputUid.current
        Uid.focus()
    }, [valueUid])

    return (
        <>
            <Title text='Verify' className={`title title--${theme}`}/>
            <div className={`sign__form sign__form--${theme}`}>
                <Input
                    title='Uid'
                    className={theme}
                    type='text'
                    placeholder='Enter your uid'
                    onChange={changeInputUid}
                    value={valueUid}
                    errorMessage={errorUid}
                    ref={inputUid}
                />
                <Input
                    title='Token'
                    className={theme}
                    type='text'
                    placeholder='Enter your token'
                    onChange={changeInputToken}
                    value={valueToken}
                    errorMessage={errorToken}
                    ref={inputToken}
                />
                <Button
                    className={`text text--${theme}`}
                    type='button'
                    onClick={handleSubmit}
                    text='Verify '
                />
            </div>
        </>
    )
}