import React, { useContext } from 'react'
import styled from 'styled-components';
import { Context } from '../FacebookContext'

const Profile = styled.img`
max-width: 30px;
min-width: 30px;
border-radius: 50%;
`;

const UserPhoto = styled.img`
    max-width: 30px;
    min-width: 30px;
border-radius: 50%;
`;

function Feed() {
    const { state, dispatch, like, comment, handleChange, addComment, addLike } = useContext(Context)
    const { posts } = state
    console.log(posts);
    return (
        <div>
            {posts.map(post =>
                <div key={post.postId} >
                    <div className="post-details" >
                        <ul className='profile'>
                            <li className="user">
                                <Profile className="small" src={post.photo} />
                                <span>{post.userId}</span>
                            </li>
                            <li>{post.date}</li>
                        </ul>
                        <div className="post">
                            <p>{post.description}</p>
                            <picture>
                                <img src={post.image} />
                            </picture>
                        </div>
                        <div>
                            <button onClick={addLike}>Like Btn </button>
                            <span>nbLikes:{like}</span>
                        </div>
                    </div>

                    <form onSubmit={addComment}>
                        <ul key={post.userId} className="comments">
                            <li className="user">
                                <p></p>
                            </li>
                            <li className="user">
                                <Profile className="small" src={post.photo} />
                                <span>{post.userId}</span>
                            </li>
                        </ul>
                        <fieldset>
                            <input
                                placeholder="Add a comment"
                                type="text"
                                name="comments"
                                value={comment}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                            <button type="submit">Post</button>
                        </fieldset>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Feed
