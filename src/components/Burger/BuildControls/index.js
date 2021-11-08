import React from 'react'

import BuildControl from './BuildControl'
import './style.css'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const BuildControls = props => (
    <div className={'BuildControls'}>
        <p>
            Price: <b>$ {props.price.toFixed(2)}</b>
        </p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button className={'OrderButton'} disabled={!props.purchaseable} onClick={props.ordered}>
            {'ORDER NOW'}
        </button>
    </div>
)

export default BuildControls
