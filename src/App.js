import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from './components/Layout'
import BurgerBuilder from './containers/BurgerBuilder'

const Checkout = React.lazy(() => {
    return import('./containers/Checkout')
})
const Orders = React.lazy(() => {
    return import('./containers/Orders')
})

const App = () => {
    return (
        <div>
            <Layout>
                <Suspense fallback={<p>Loading...</p>}>
                    <Switch>
                        <Route path='/' exact component={BurgerBuilder} />
                        <Route path='/orders' component={Orders} />
                        <Route path='/checkout' component={Checkout} />
                    </Switch>
                </Suspense>
            </Layout>
        </div>
    )
}

export default App
