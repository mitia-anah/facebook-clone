import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from './FacebookContext'


const FormStyle = styled.form`
    display: grid;
    gap: 10px;

    `;

function AddPost() {
    const [postContent, setPostContent] = useState('')
    const [postImage, setPostImage] = useState('')

    const { state, dispatch, currentUser } = useContext(GlobalContext)

    function handleNewPost(e) {
        e.preventDefault()
        const newPost = {
            postId: new Date(),
            date: new Date(),
            image: postImage,
            description: postContent,
            likes: [],
            comments: '',
            userId: currentUser
        }
        dispatch({ type: 'ADD_NEW_POST', newPost: newPost })
        resetForm()
    }
    function resetForm() {

    }

    return (
        <div>
            <h1>Add post</h1>
            <FormStyle onSubmit={handleNewPost}>
                <label>New post content</label>
                <textarea
                    placeholder='Say what is in your mind...?'
                    value={postContent}
                    onChange={e => setPostContent(e.target.value)}
                />
                <label>New Post Image</label>
                <input
                    placeholder='Paste a URL'
                    value={postImage}
                    onChange={e => setPostImage(e.target.value)}
                />

                <button>Post</button>
            </FormStyle>
        </div>
    )
}

export default AddPost
