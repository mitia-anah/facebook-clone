import React, { useState, useEffect, useReducer } from 'react'
import FakeData from './fakeData.json'

const Context = React.createContext()

function FacebookContext({ children }) {
    let data = FakeData;
    const [comment, setComment] = useState('')
    const [like, setLike] = useState(false)

    const [state, dispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                case 'POST': {
                    return { ...state, posts: data }
                }
                case 'ADD_NEW_COMMENT_TO_POST': {
                    const newPosts = state.posts.map(post => {
                        if (post.postId === action.postId) {
                            // update the post
                            return {
                                ...post,
                                comments: [...post.comments, action.comment],
                            };
                        }
                        return post;
                    });
                    return {
                        ...state,
                        posts: newPosts,
                    };
                }
                case 'ADD_NEW-POST': {
                    const addNewPosts = state.posts.map(post => {
                        if (post.postId === action.postId) {
                            // update the post
                            // recreate the new post collection
                            // we need the ID of the post we want to comment on
                            // dispatch({type: "ADD_NEW_COMMENT_TO_POST", postId: postId, comment: newComment})
                            //action.postId
                            //action.comment
                            // {
                            //     "commentId": 1,
                            //     "userId": "121212",
                            //     "date": 12423232423,
                            //     "commentTextContent": "Hello, super post.
                            return {
                                ...post,
                                comments: [...post.comments, action.comment],
                            };
                        }
                        return post;
                    });
                    return {
                        ...state,
                        posts: addNewPosts,
                    };
                }
            }
        },
        {
            posts: [],
            users: [],
            userLoggedIn: '',
        }
    );

    function addNewPost(e) {
        e.preventDefault()
        const form = e.target;
        const text = form.posts.value;
        const inputUrl = form.inputUrl.value

        let newPosts = {
            date: Date.now(),
            description: text,
            img: inputUrl,
            postId: Date.now(),
            comments: [],
            likes: [],
            userId: ''
        };
        dispatch([...state, newPosts])
    }

    useEffect(() => {
        dispatch({ type: "POST" })
    }, [])

    const handleChange = e => {
        console.log(e.target);
        setComment(e.target.value);
    };
    function addComment(e) {
        e.preventDefault()
        const form = e.target;
        const userComment = form.comments.value;
        console.log(userComment)
        e.preventDefault()
        let newComment = {
            userComments: userComment,
            textId: Date.now(),
        };

        dispatch([...state, newComment]);
    }
    function onSubmit(e) {
        e.preventDefault()
        if (e.target) return;
        addComment()
        // setComment('')
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
        <Context.Provider value={{ state, dispatch, like, comment, handleChange, onSubmit, addComment, addLike, addNewPost }}>
            {children}
        </Context.Provider>
    )
}

export { FacebookContext, Context };

