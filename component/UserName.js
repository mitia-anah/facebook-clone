import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../FacebookContext'

function UserName() {
    const { state, dispacth } = useContext(Context)
    const { users, currentUser } = state
    const [userName, setUserName] = useState('')
    const [userPicture, setUserPicture] = useState('')

    const userOBject = users.find(user => user.userId === currentUser) || {
        userName: '',
        userPicture: '',
    }

    useEffect(() => {
        setUserName(userOBject.userName)
        setUserPicture(userOBject.userPicture)
    }, [users])

    function NewUserName(e) {
        e.preventDefault()
        dispatch({ type: 'USERNAME', userName, userPicture })
    }
    return (
        <form>
            <h2>Options:</h2>
            <fieldset>
                <label>Username:</label>
                <input
                    placeholder="Type your username here"
                    type='text'
                    onChange={e => setUserPicture(e.target.value)}
                />
            </fieldset>
            <fieldset>
                <label>Profile picture:</label>
                <input
                    type='url'
                    placeholder="Paste a URL here"
                    onChange={e => setUserPicture(e.target.value)}
                />
            </fieldset>
            <button>Post</button>
        </form>
    )
}

export default UserName
