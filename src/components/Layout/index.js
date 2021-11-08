import React from 'react'

import Aux from '../../hoc/Aux'
import Toolbar from '../Navigation/Toolbar'
import './index.css'

const Layout = props => (
    <Aux>
        <Toolbar />
        <main className={'Content'}>{props.children}</main>
    </Aux>
)

export default Layout
