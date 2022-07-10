import './Tabs.scss'
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../features/theme/useTheme'

type TabsProps = {
    className?: string
    text?: string
}

export const Tabs = (props: TabsProps) => {
    const {theme} = useTheme()
    return (
        <>
            <div className='tabs__main'>
                <NavLink className={`tabs__link tabs__link--${theme}`} to=''>All</NavLink>
                <NavLink className={`tabs__link tabs__link--${theme}`} to='favorites'>My favorites ♥</NavLink>
            </div>
        </>
    )
}