import React from 'react'
import './style.css'

import Burger from '../../Burger'
import Button from '../../UI/Button'

const CheckoutSummary = props => {
    return (
        <div className={'CheckoutSummary'}>
            <h1>{'We hope it tastes good'}</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType='Danger' clicked={props.checkoutCancelled}>
                {'Cancel'}
            </Button>

            <Button btnType='Success' clicked={props.checkoutContinued}>
                {'Continue'}
            </Button>
        </div>
    )
}

export default CheckoutSummary
