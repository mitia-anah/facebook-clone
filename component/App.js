import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Feed from './Feed'
import AddPost from './AddPost'
import ProfileOption from './ProfileOption'
import Menu from './Menu'

function App() {
    return (
        <div>
            <h1>Onja Book 2</h1>
            <Menu />
            <Switch>
                <Route exact path="/">
                    <Feed />
                </Route>
                <Route exact path="/add">
                    <AddPost />
                </Route>
                <Route path="/options">
                    <ProfileOption />
                </Route>
            </Switch>
        </div>
    )
}

export default App
