import React from 'react'
import { Link } from 'react-router-dom'
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

function Menu() {
    return (
        <div>
            <h1>OnjaBook</h1>
            <NavStyles className='menu-bar'>
                <ul className='menu-list'>
                    <li className="menu"><Link to="/">Feed</Link></li>
                    <li className="menu"><Link to="/add">Add a post</Link></li>
                    <li className="menu"><Link to='/options'>Options</Link></li>
                </ul>
            </NavStyles>
        </div>
    )
}

export default Menu
