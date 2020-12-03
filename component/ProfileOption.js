import React, { useState, useContext, useEffect, } from 'react'
import { GlobalContext } from './FacebookContext'

function ProfileOption() {
    const { state, dispatch } = useContext(GlobalContext)
    const { users, currentUser } = state
    const [userName, setUserName] = useState('')
    const [profilePictureUrl, setProfilePictureUrl] = useState('')

    const currentUserObj = users.find(user => user.userId === currentUser) || {
        userName: '',
        profilePictureUrl: '',
    }

    useEffect(() => {
        setUserName(currentUserObj.userName)
        setProfilePictureUrl(currentUserObj.profilePictureUrl)
    }, [users])
    function handleNewOptions(e) {
        e.preventDefault()
        dispatch({ type: "UPDATE_CURRENT_USER", userName, profilePictureUrl })
    }

    return (
        <div>
            <h1>Profile Option</h1>
            <form onSubmit={handleNewOptions}>
                <input type='text' value={userName} onChange={e => setUserName(e.target.value)} />
                <input type='url' value={profilePictureUrl} onChange={e => setPictureUrl(e.target.value)} />
                <button>Save</button>
            </form>
        </div>
    )
}

export default ProfileOption
