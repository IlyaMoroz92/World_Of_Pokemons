import React, { ReactElement } from "react";
import './Button.scss'

type ButtonProps = {
    text?: string
    disabled?: boolean
    className?: string
    src?: any
    icon?: ReactElement
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    type?: string
}

export const Button =  (props: ButtonProps) => {
    return (
        <button
        type='button'
        className={`button button--${props.className}`}
        disabled={props.disabled}
        onClick={props.onClick}
        >
        {props.src && <img className={props.className} src={props.src} alt="icon" />}
        {props.icon}
        {props.text && <span className="button__text">{props.text}</span>}
        </button>
    )
}