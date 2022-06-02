import React from 'react'
import './index.css'
import smkLogo from '../../assets/smkLogo.svg'

function Header() {
    return (
        <div className="tnc-header">
            <img className="header-logo" src={smkLogo} />
        </div>
    )
}

export default Header