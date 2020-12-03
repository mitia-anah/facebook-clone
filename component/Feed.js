import React, { useContext } from 'react'
import { GlobalContext } from './FacebookContext'

function Feed() {
    const { state, dispatch } = useContext(GlobalContext)
    const { posts, loading } = state

    return (
        <div>
            <h2>Feed</h2>
            {loading && <p>Loading</p>}
            {!loading &&
                posts.map(post => (
                    <div key={post.postId}>
                        {post.description}
                    </div>
                ))}
        </div>
    )
}

export default Feed
