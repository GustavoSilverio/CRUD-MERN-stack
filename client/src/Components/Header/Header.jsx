import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
 
const Header = () => {
    return (
        <navbar>
            <Link to='/'><h1 className='logo'>ICODE</h1></Link>
            <div className="menu">
                <ul className='lista-menu'>
                    <Link to='/projects'><li>Projects</li></Link>
                    <Link to='/about'><li>About</li></Link>
                </ul>
            </div>
        </navbar>
    );
}
 
export default Header;