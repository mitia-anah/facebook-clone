import React, { useState, useEffect, useReducer } from 'react'
import FakeData from './fakeData.json'
import userData from './User.json'

const Context = React.createContext()

function FacebookContext({ children }) {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'FACEBOOK_DATA': {
                return {
                    ...state,
                    posts: FakeData,
                    users: userData,
                    currentUser: '1'
                }
            }
            case 'ADD_NEW_POST': {
                return {
                    ...state,
                    posts: [...state.posts, action.newPost]
                }
            }
            case 'USERNAME': {
                const userArr = state.users.map(user => {
                    if (user.userId === state.currentUser) {
                        return {
                            ...user,

                            userPicture: action.userPicture,
                            userName: action.userName
                        }
                    }
                    return user
                })
                return {
                    ...state,
                    users: userArr
                }
            }
            default:
                break;
        }
        return state
    }, {
        posts: [],
        users: [],
    })

    useEffect(() => {
        dispatch({ type: 'FACEBOOK_DATA' })
    }, [])
    const [comment, setComment] = useState('')
    const [like, setLike] = useState(false)


    useEffect(() => {
        dispatch({ type: "FACEBOOK_DATA" })
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
        const findDataId = posts.find(data => data.postId)
        const dataId = findDataId.likes
        const findLikeId = dataId.find(like => like.likeId)
        if (findLikeId) {
            setLike(like + 1)
        }
    }


    return (
        <Context.Provider value={{ state, dispatch, like, comment, handleChange, onSubmit, addComment, addLike }}>
            {children}
        </Context.Provider>
    )
}

export { FacebookContext, Context };

