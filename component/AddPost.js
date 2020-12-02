import React, { useContext, useState } from 'react'
import { Context } from '../FacebookContext'

function Post() {
    // console.log(newPost);
    const [description, setDescription] = useState('');
    const { addNewPost } = useContext(Context);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     let newPosts = {
    //         date: Date.now(),
    //         description,
    //         img: '',
    //         postId: Date.now(),
    //         comments: [],
    //         likes: [],
    //         userId: ''
    //     };
    // console.log(e.target.post.value);
    // post.push(newPost);
    // console.log(newPosts);
    // setPost([...post]);
    // addPost(newPosts);
    // }
    return (
        <form className="new-post" onSubmit={addNewPost}>
            <div className="form-group">
                <label>New Post:</label>
                <textarea
                    className="text"
                    placeholder="Say what's in your mind"
                    type="text"
                    name="posts"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} >
                </textarea>
            </div>
            <div>
                <label>Picture Url:</label>
                <input
                    placeholder=""
                    name="inputUrl" />
            </div>
            <button>Post</button>

        </form>
    )
}

export default Post
