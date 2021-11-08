import React from 'react'

import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button'

const OrderSummary = props => {
    const ingredientsSummary = Object.keys(props.ingredients).map(item => (
        <li key={item}>
            <span style={{ textTransform: 'capitalize' }}>{item}</span>: {props.ingredients[item]}
        </li>
    ))
    return (
        <Aux>
            <h3>{'Your Order'}</h3>
            <p>{'A delicious burger with following details: '}</p>
            <ul>{ingredientsSummary}</ul>
            <p>
                <b>
                    {'Total Price: $'} {props.price.toFixed(2)}
                </b>
            </p>
            <p>{'Continue to Checkout?'}</p>
            <Button btnType={'Danger'} clicked={props.purchaseCancelled}>
                {'CANCEL'}
            </Button>
            <Button btnType={'Success'} clicked={props.purchaseContinued}>
                {'CONTINUE'}
            </Button>
        </Aux>
    )
}

export default OrderSummary
