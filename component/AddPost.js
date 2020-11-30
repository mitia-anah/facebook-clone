import React from 'react'

function Post() {
    return (
        <form className="new-post">
            <div className="form-group">
                <label>New Post:</label>
                <textarea className="text" placeholder="Say what's in your mind" ></textarea>
            </div>
            <div>
                <label>Picture Url:</label>
                <input placeholder="" />
            </div>
            <button>Post</button>

        </form>
    )
}

export default Post
