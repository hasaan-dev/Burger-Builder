import React from 'react'

import NavigationItem from './NavigationItem'
import './style.css'

const NavigationItems = () => (
    <ul className={'NavigationItems'}>
        <NavigationItem link='/'>{'Burger Builder'}</NavigationItem>
        <NavigationItem link='/orders'>{'Orders'}</NavigationItem>
    </ul>
)

export default NavigationItems
