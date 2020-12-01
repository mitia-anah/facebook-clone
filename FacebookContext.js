import React, { useState, useEffect, useReducer } from 'react'
import FakeData from './fakeData.json'
import User from './User.json'

const Context = React.createContext()
let data = FakeData;
let user = User

function FacebookContext({ children }) {
    const [post, setPost] = useState([])
    const [comment, setComment] = useState('')
    const [users, setUser] = useState([])
    const [like, setLike] = useState(false)

    useEffect(() => {
        setPost(data)
        setUser(user)
        setComment(comment)
    })

    const handleChange = e => {
        console.log(e.target);
        setComment(e.target.value);
    };
    function addComment(e) {
        e.preventDefault()
        const userComments = e.target.value
        e.preventDefault()
        let newComment = {
            userComments,
            textId: Date.now(),
        };

        setComment([...post, newComment]);
    }
    function onSubmit(e) {
        e.preventDefault()
        if (e.target) return;
        addComment()
        setPost('')
    }
    function addLike() {
        const findDataId = data.find(data => data.postId)
        const dataId = findDataId.likes
        const findLikeId = dataId.find(like => like.likeId)
        if (findLikeId) {
            setLike(like + 1)
        }
    }

    return (
        <Context.Provider value={{ post, users, like, comment, handleChange, onSubmit, addComment, addLike }}>
            {children}
        </Context.Provider>
    )
}

export { FacebookContext, Context };

