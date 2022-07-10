import { Title } from "../../components/Title";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {NavLink} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useResetPassword } from "../../features/resetPassword/useResetPassword";
import { useState, useRef } from "react";


export const ResetPasswordPage = () => {

    const [valueEmail, setValueEmail] = useState('');
    const [errorEmail] = useState('');

    const inputEmail = useRef<HTMLInputElement>(null);

    const changeInputEmail = (event: any): void => setValueEmail(event.target.value)

    const { resetPass } = useResetPassword();

    const navigate = useNavigate();

    const handleSubmit = () => {
        const formData = {
            email: valueEmail
        }

        resetPass(formData);
        
        navigate('/newpassword')
    }

    return (
        <>
            <Title text='Reset Password' className='title'/>
            <div className='sign__form'>
            <Input
                    title='Email'
                    className='password'
                    type='email'
                    placeholder='Enter your email'
                    onChange={changeInputEmail}
                    value={valueEmail}
                    errorMessage={errorEmail}
                    ref={inputEmail}
                />
                <Button
                    className='text'
                    type='button'
                    onClick={handleSubmit}
                    text='Reset '
                />
                <p className="sign__question">Don't have an account ? <NavLink to='/signup'>Sign Up</NavLink></p>
            </div>
        </>
    )
}