import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from './FacebookContext'
import styled from 'styled-components'

const NavStyles = styled.nav`
ul{
    display: flex;
    flex-direction: row;
    paddind-inline-start: 0; 
    list-style: none;
    justify-content: space-between;
}
`;
const ProfileStyle = styled.li`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
gap: 15px;
img {
    width: 50px;
    height: 50px;
    border-radius: 50%
}
`;

function Menu() {
    const { state } = useContext(GlobalContext)
    const { users, currentUser } = state
    const currentUserObj = users.find(user => user.userId === currentUser)

    return (
        <div>
            <NavStyles className='menu-bar'>
                <ul className='menu-list'>
                    <li className="menu"><Link to="/">Feed</Link></li>
                    <li className="menu"><Link to="/add">Add a post</Link></li>
                    <ProfileStyle className="menu">
                        {currentUserObj && (
                            <Link to='/options'>
                                <span>{currentUserObj.userName}</span>
                                <img src={currentUserObj.profilePictureUrl}
                                />
                            </Link>)}
                    </ProfileStyle>
                </ul>
            </NavStyles>
        </div>
    )
}

export default Menu
