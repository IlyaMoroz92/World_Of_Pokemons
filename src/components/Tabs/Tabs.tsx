import './Tabs.scss'
/* import { TitleNav } from "../../components/TitleNav"; */
import { NavLink, Outlet } from 'react-router-dom';


type TabsProps = {
    className?: string
    text?: string
}

export const Tabs = (props: TabsProps) => {
    return (
        <>
            <div className='tabs__main'>
                <NavLink to=''>All</NavLink>
                <NavLink to='favorites'>My favorites</NavLink>
                {/* <TitleNav  to='' text='All' className='tabs'/>
                <TitleNav  to='favorites' text='My favorites' className='tabs'/> */}
            </div>
        </>
        
    )
}