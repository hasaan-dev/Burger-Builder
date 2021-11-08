import React from 'react'

import Logo from '../../Logo'
import NavigationItems from '../NavigationItems'
import './style.css'

const Toolbar = () => (
    <header className={'Toolbar'}>
        <Logo />
        <nav>
            <NavigationItems />
        </nav>
    </header>
)

export default Toolbar
