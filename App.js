import React, { useEffect, useState } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import dataList from './fakeData.json'
import Feed from './component/Feed'
import AddPost from './component/AddPost'
import UserName from './component/UserName'

function App() {
    const [post, setPost] = useState([])
    // console.log(post);

    useEffect(() => {
        setPost()
    })
    return (
        <div className='app'>
            <h1>OnjaBook</h1>
            <header>
                <nav className='menu-bar'>
                    <ul className='menu-list'>
                        <Link to="/"><li className="menu">Feed</li></Link>
                        <Link to="/post"><li className="menu">Add a post</li></Link>
                        <Link to='/username'><li className="menu">UserName</li></Link>
                    </ul>
                </nav>

            </header>

            <Switch>
                <Route exact path="/">
                    <Feed post={dataList} />
                </Route>
                <Route exact path="/post">
                    <AddPost />
                </Route>
                <Route path="/username">
                    <UserName />
                </Route>
            </Switch>
        </div>
    )
}
export default App