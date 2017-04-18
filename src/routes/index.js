import React from 'react'
import { Route } from 'react-router'
import Template from '../containers/Template'
import Home from '../containers/Home'
import Profile from '../containers/Profile'

const createRoutes = () => {
    return (
        <div>
            <Route path="/" component={Template} />
            <Route path="/" component={Home} />
            <Route path="/profile" component={Profile} />
        </div>
    )
}

const Routes = createRoutes();

export default Routes;