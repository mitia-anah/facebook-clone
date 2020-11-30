import React from 'react'

function UserName() {
    return (
        <form>
            <h2>Options:</h2>
            <fieldset>
                <label>Username:</label>
                <input placeholder="Type your username here" />
            </fieldset>
            <fieldset>
                <label>Profile picture:</label>
                <input placeholder="Paste a URL here" />
            </fieldset>
            <button>Post</button>
        </form>
    )
}

export default UserName
