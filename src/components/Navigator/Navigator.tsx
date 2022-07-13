import './Navigator.scss'
import {NavLink} from 'react-router-dom'
import { ReactComponent as Left} from '../../assets/img/left.svg'
import { ReactComponent as Right} from '../../assets/img/right.svg'


type NavigatorProps = {
    id?: number 
    className?: string
}


export const Navigator =  (props: NavigatorProps) => {

    return (
        <div className={`navigator navigator--${props.className}`}>
            {props?.id  && <NavLink  to={`/pokemon/${props.id - 1}`}><Left/>PREVIOUS</NavLink>}
            {props?.id  && <NavLink  to={`/pokemon/${props.id + 1}`}>NEXT<Right/></NavLink>}
        </div>
    )
}