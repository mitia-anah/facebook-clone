import React, { useContext, useState } from 'react'
import { Context } from '../FacebookContext'

function Post() {
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const { state, dispatch } = useContext(Context)

    function addNewPost(e) {
        e.preventDefault()
        let newPost = {
            postId: Date.now(),
            date: Date.now(),
            description: description,
            image: image,
            comments: [],
            likes: [],
            userId: ''
        };
        dispatch({ type: 'ADD_NEW_POST', newPost })
    }

    // }
    return (
        <form className="new-post" onSubmit={addNewPost}>
            <div className="form-group">
                <label>New Post:</label>
                <textarea
                    className="text"
                    placeholder="Say what's in your mind..."
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} >
                </textarea>
            </div>
            <div>
                <label>Picture Url:</label>
                <input
                    placeholder="Paste an URL"
                    value={image}
                    onChange={(e) => setImage(e.terget.value)} />
            </div>
            <button>Post</button>

        </form>
    )
}

export default Post
