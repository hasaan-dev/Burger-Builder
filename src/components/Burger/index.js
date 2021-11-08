import React from 'react'

import BurgerIngredient from './BurgerIngredients'
import './style.css'

const Burger = props => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(item => {
            return [...Array(props.ingredients[item])].map((_, i) => {
                return <BurgerIngredient key={item + i} type={item} />
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, [])

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>{'Please add ingredients'}</p>
    }

    return (
        <div className={'Burger'}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}

export default Burger
