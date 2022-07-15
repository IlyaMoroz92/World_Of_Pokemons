import { Button } from '../Button'
import { User } from '../User'
import PokeballClose from './img/Pokeball.png'
import PokeballOpen from './img/PokeballOpen.png'
import { ReactComponent as Logo } from '../../assets/img/logo.svg'
import { ReactComponent as Login } from '../../assets/img/login.svg'
import { ReactComponent as Dark } from '../../assets/img/Dark.svg'
import { ReactComponent as Light} from '../../assets/img/Light.svg'
import { ReactComponent as BurgerOpen} from '../../assets/img/burgeropen.svg'
import { ReactComponent as BurgerClose} from '../../assets/img/burgerclose.svg'
import './Header.scss'
import { useTheme } from '../../features/theme/useTheme'
import { useUserInfo } from '../../features/userInfo/useUserInfo'
import {  usePokeball } from '../../features/pokeball/usePokeball'
import {  useBurger } from '../../features/burger/useBurger'
import { Link } from 'react-router-dom'


type HeaderProps = {
    className?: string
}

export const Header = (props: HeaderProps) => {

    const {userInfo} = useUserInfo()
    const {theme, toggleTheme} = useTheme()
    const {pokeball, togglePokeball} = usePokeball()
    const {burger, toggleBurger} = useBurger()

    return (
        <div className='header__main'>
            <div className="header__burger">
                <Button
                    icon={burger ==='active' ? <BurgerClose /> : <BurgerOpen/>}
                    className='burger'
                    onClick={e => {
                        e.stopPropagation();
                        toggleBurger()
                        }
                    }
                />
            </div>
            <div className="header__theme">
                <Button
                    icon={ theme === 'light' ? <Dark /> :  <Light /> }
                    className={'with-icon header-theme'}
                    onClick={toggleTheme}
                />
            </div>
            <div className='header__logo'>
                <Link to='/'>
                    <Logo />
                </Link>
            </div>
            <div className='header__user'>
                {userInfo ? <User/> :
                <Link to='/signin'><Login/></Link>}
            </div>
            <div className="header__pokeball">
                <Button
                    src={pokeball==='active' ? PokeballOpen : PokeballClose}
                    className={'pokeball'}
                    onClick={togglePokeball}
                />
            </div>
            
        </div>
    )
}