import { Title } from "../../components/Title";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useVerify } from "../../features/verify/useVerify"
import { useAppSelector } from "../../redux/hooks";
import React, { useState, useEffect } from "react";


export const VerifyPage = () => {

    const [valueUid, setValueUid] = useState('');
    const [errorUid, setErrorUid] = useState('');
    const [valueToken, setValueToken] = useState('');
    const [errorToken, setErrorToken] = useState('');

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
            <Title text='Verify' className='title'/>
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
                <Button
                    className='text'
                    type='button'
                    onClick={handleSubmit}
                    text='Verify '
                />
            </div>
        </>
    )
}