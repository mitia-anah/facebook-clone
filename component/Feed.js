import React from 'react'
import styled from 'styled-components';
import Maneva from '../image/maneva-crop.jpg'

const Profile = styled.img`
max-width: 20px;
min-width: 20px
`;

function Feed({ post }) {
    console.log(post);
    return (
        <div>
            {post.map(data =>
                <div key={data.id} >
                    <div className="post-details">
                        <div className='profile'>
                            <Profile className="small" src={Maneva} />
                            <span>{data.userName1}</span>
                        </div>
                        <div className="post">
                            <p>{data.description}</p>
                            <picture>
                                <img src={data.img} />
                            </picture>
                        </div>
                        <div>
                            <button>Like Btn </button>
                            <span>nbLikes:{data.nb_likes}🧡</span>
                        </div>
                    </div>

                    <form>
                        <ul className="comments">
                            <li>
                                <img src="" />
                                <span>{data.userName2}</span>
                            </li>
                            <li>
                                <Profile className="small" src={Maneva} />
                                <span>{data.userName1}</span>
                            </li>
                        </ul>
                        <fieldset>
                            <input placeholder="Add a comment" />
                            <button>Post</button>
                        </fieldset>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Feed
