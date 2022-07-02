import { Button } from '../Button'
import { ReactComponent as Dark } from '../../assets/img/Dark.svg'
import { ReactComponent as Light} from '../../assets/img/Light.svg'
import './Header.scss'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useTheme } from '../../features/theme/useTheme'

type HeaderProps = {
    className?: string
}

export const Header = (props: HeaderProps) => {

    const {theme, toggleTheme} = useTheme()
    
    return (
        <div className='header__main'>
            <div className="header__theme">
                <Button
                    icon={ theme === 'light' ? <Dark /> :  <Light /> }
                    className={'with-icon header-theme'}
                    onClick={toggleTheme}
                />
            </div>
        </div>
    )
}