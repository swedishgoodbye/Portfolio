import React from 'react';
import { NavLink } from 'react-router-dom';

import { Front, About } from '../components/'

import './index.css';

const Nav = props => {
    return (
        <div className = 'navbar' id = 'nav'>
             {/* Home */}
            <NavLink to={"#front"} activeClassName='act' activeStyle={{display: 'none'}}>
                <a className='navbar-link'>Home</a>
            </NavLink> 
            {/* About */}
            <NavLink to={"/about"} activeClassName='act' activeStyle={{display: 'none'}}>
                <a className='navbar-link'>About</a>
            </NavLink>
            {/* Portfolio */}
            <NavLink to={"/portfolio"} activeClassName='act' activeStyle={{display: 'none'}}>
                <a className='navbar-link'>Portfolio</a>
            </NavLink> 
            {/* Music */}
            <NavLink to={"/music"} activeClassName='act' activeStyle={{display: 'none'}}>
                <a className='navbar-link'>Music</a>
            </NavLink>
            <NavLink to={"/contact"} activeClassName='act' activeStyle={{display: 'none'}}>
                <a className='navbar-link'>Contact</a>
            </NavLink>
        </div>
    )
}

export default Nav;