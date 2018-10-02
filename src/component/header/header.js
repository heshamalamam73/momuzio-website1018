import React  from 'react';
import './header.css';
import {NavLink} from 'react-router-dom';

const Header = ()=>{
        return(
            
                <header>
                    <div className='logo'>
                    <h2><a href='/'>momuzio</a></h2>
                    </div>
                    <ul className='item'>
                    <li> <NavLink exact to='/'>home</NavLink></li>
                    <li> <NavLink exact to='/about'>about</NavLink></li>
                    <li> <NavLink exact to='/portfolio'>portfolio</NavLink></li>
                    </ul>
                </header>
        
        )
    }

export default Header;