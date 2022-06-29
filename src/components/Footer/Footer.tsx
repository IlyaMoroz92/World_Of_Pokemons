import React, { ReactElement } from "react";

import './Footer.scss'


type FooterProps = {
    className?: string
}

export const Footer = (props: FooterProps) => {

    return (
        <div className={`footer footer--${props.className} `}>
            <div className="footer__wrapper">
                <p className={`footer__year--${props.className}`}>©2022 World Of Pokemons</p>
                <p className={`footer__rights--${props.className}`}>All rights reserved</p>
            </div>
        </div>
    )
}