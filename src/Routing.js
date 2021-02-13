import React from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import App from './App'
import AuthRouting from './Component/Chat/Authentication/AuthRouting'
import Chat from "./Component/Chat/Index"
const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" >
                    <App />
                </Route>
                <Route path="/chat" >
                    <Chat />
                </Route>
                <Route path="/auth">
                    <AuthRouting />
                </Route>
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>
            </Switch>

        </Router>
    )
}

export default Routing
