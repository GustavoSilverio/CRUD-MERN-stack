import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
 
const Header = () => {
    return (
        <navbar>
            <h1 className='logo'>ICODE</h1>
            <div className="menu">
                <ul className='lista-menu'>
                    <Link to='/'><li>Projects</li></Link>
                    <Link to='/'><li>About</li></Link>
                </ul>
            </div>
        </navbar>
    );
}
 
export default Header;