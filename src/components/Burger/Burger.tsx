
import './Burger.scss'
import { User } from "../User";
import { Button } from "../Button";
import { Link } from 'react-router-dom';
import { useUserInfo } from '../../features/userInfo/useUserInfo'
import { ReactComponent as Login } from '../../assets/img/login.svg'

type BurgerProps = {
    className?: string
    text?: string | null
}

export const Burger = (props: BurgerProps) => {

    const {userInfo, addNoUserInfo} = useUserInfo()

    const logOut = () => {
        if(userInfo){
            addNoUserInfo(userInfo)
        }
    }

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
                                onClick={logOut}
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