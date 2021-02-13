import React from 'react'
import {Route, Switch} from "react-router-dom";
import Login from './Login';
const AuthRouting = () => {
    const parent = "/auth";
    return (
        <Switch>
            <Route exact path={`${parent}/login`}>
                <Login />
            </Route>
        </Switch>
    )
}

export default AuthRouting
