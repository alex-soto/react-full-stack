import React from 'react'
import { Route } from 'react-router'
import Template from '../containers/Template'
import TicTacToe from '../containers/TicTacToe'
import Profile from '../containers/Profile'

const findRoute = (pathname) => {
    if (pathname === '/') { 
        return <TicTacToe/>
    } else if (pathname === '/profile') {
        return <Profile/>
    }
}

const createRoutes = () => {
    return (
        <div>
            <Route path="/" render={(props) => {
                return (
                    <Template>
                        { findRoute(props.location.pathname) }
                    </Template>
                )
                
                
            }} />
        </div>
    )
}

const Routes = createRoutes();

export default Routes;

// const createRoutes = () => {
//     return (
//         <div>
//             <Route path="/" component={Template} />
//             <Route path="/" exact component={Home} />
//             <Route path="/profile" exact component={Profile} />
//         </div>
//     )
// }