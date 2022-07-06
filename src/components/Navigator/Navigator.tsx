import React, { ReactElement } from "react";
import './Navigator.scss'
import {NavLink} from 'react-router-dom'
import { ReactComponent as Left} from '../../assets/img/left.svg'
import { ReactComponent as Right} from '../../assets/img/right.svg'


type ButtonProps = {
    id?: number 
}


export const Navigator =  (props: ButtonProps) => {

    return (
        <div className="navigator">
            {props?.id  && <NavLink  to={`/pokemon/${props.id - 1}`}><Left/>PREVIOUS</NavLink>}
            {props?.id  && <NavLink  to={`/pokemon/${props.id + 1}`}>NEXT<Right/></NavLink>}
        </div>
    )
}