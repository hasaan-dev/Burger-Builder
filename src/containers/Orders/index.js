import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Order from '../../components/Order'
import * as actions from '../../store/actions/index'
import Spinner from '../../components/UI/Spinner'

const Orders = props => {
    const { onFetchOrders } = props

    useEffect(() => {
        onFetchOrders()
    }, [onFetchOrders])

    let orders = <Spinner />

    if (!props.loading) {
        orders = props.orders.map(order => (
            <Order key={order.id} ingredients={order.ingredients} price={order.price} />
        ))
    }

    return <div>{orders}</div>
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actions.fetchOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
