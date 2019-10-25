import React from 'react'
import "./styles.scss";
import Logo from '../../assets/graphics/logo.png';

export default function Header() {
    return (
        <header>
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
            </div>
        </header>
    )
}
