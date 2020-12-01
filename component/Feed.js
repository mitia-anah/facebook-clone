import React, { useContext } from 'react'
import styled from 'styled-components';
import Maneva from '../image/maneva-crop.jpg'
import { Context } from '../FacebookContext'

const Profile = styled.img`
max-width: 30px;
min-width: 30px;
`;

const UserPhoto = styled.img`
max-width: 30px;
min-width: 30px;
border-radius: 50%;
`;

function Feed() {
    const { post, like, onSubmit, handleChange, comment, addLike } = useContext(Context)
    // console.log(post);
    return (
        <div>
            {post.map(data =>
                <div key={data.postId} >
                    <div className="post-details">
                        <ul className='profile'>
                            <li>
                                <Profile className="small" src={Maneva} />
                                <span>{data.userId}</span>
                            </li>
                            <li>{data.date}</li>
                        </ul>
                        <div className="post">
                            <p>{data.description}</p>
                            <picture>
                                <img src={data.img} />
                            </picture>
                        </div>
                        <div>
                            <button onClick={addLike}>Like Btn </button>
                            <span>nbLikes:{like}</span>
                        </div>
                    </div>

                    <form onSubmit={onSubmit}>
                        <fieldset>
                            <input
                                placeholder="Add a comment"
                                name="comments"
                                value={comment}
                                onChange={handleChange}
                            />
                            <button type="submit">Post</button>
                        </fieldset>
                        <ul key={data.userId} className="comments">
                            <li>
                                <h3>{data.userId}</h3>
                                <p>{comment}</p>
                            </li>
                            <li>
                                <Profile className="small" src={Maneva} />
                                <span>{data.userName1}</span>
                            </li>
                        </ul>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Feed
