import React, { createContext, useReducer, useEffect } from 'react'
import FacebookData from '../Facebook.json'
import UserData from '../UserData.json'

const GlobalContext = createContext()

function GlobalContextProvider({ children }) {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'LOAD_JSON_DATA': {
                return {
                    ...state,
                    loading: false,
                    posts: FacebookData,
                    users: UserData,
                }
            }
            default:
                log.error('No action defined', action.type)
                break;
        }
        return state
    }, {
        loading: true,
        posts: [],
        users: [],
        currentUser: '',
    })

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: "LOAD_JSON_DATA" })
        }, 1000)
    }, [])

    return <GlobalContext.Provider
        value={{ state, dispatch }}
    > {children}

    </GlobalContext.Provider>
}

export { GlobalContextProvider, GlobalContext }