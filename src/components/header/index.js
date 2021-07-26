import React from 'react'
import './header.css'
// import Mobile from './mobile'
import Web from './web'

function Header() {
    return (
        <div className='header'>
            <div className='logo'> Kristal Kung </div>
            <div className='menu'></div>
            <div className='web-menu'> <Web /> </div>
            <div className='mobile-menu'> <img src='/public/menu.png' alt='' /></div>
        </div>
    )
}

export default Header
