import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Reports from '../pages/Reports'
import Analytics from '../pages/Analytics'
import Stocks from '../pages/Stocks'
import Receipts from '../pages/Receipts'
import Details from '../pages/Details'

const Routes = () => {
    return (
        <div>
            <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/reports' component={Reports}/>
            <Route path='/analytics' component={Analytics}/>
            <Route path='/stocks' component={Stocks}/>
            <Route path='/receipts' component={Receipts}/>
            <Route path='/details' component={Details}/>
            
            </Switch>
        </div>
    )
}

export default Routes
