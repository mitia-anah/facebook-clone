import React, { useState, useEffect, useReducer } from 'react'

const Context = React.createContext()

function FacebookContext(props) {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'INCREMENT': {
                return { ...state, likeBtn: state.count + 1 }
            }
            default: {
                return state
            }
        }
    })

    let likeBtn = state;
    let initialState = { likeBtn: 0 }

    function addLike() {
        dispatch({ type: "INCREMENT" })
    }
    return (
        <Context.Provider value={{}}>
            {props.children}
        </Context.Provider>
    )
}

export { FacebookContext, Context };

