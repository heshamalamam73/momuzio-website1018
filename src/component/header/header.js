import React  from 'react';
// import './header.css';
import {NavLink} from 'react-router-dom';
import {BrowserRouter as Router } from 'react-router-dom'

const Header = ()=>{
        return(
                <nav className="navbar navbar-expand-lg  navbar-light bg-light ">
                    <NavLink className="navbar-brand" to="/">MOMUZIO</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav  mr-auto">
                        <li className="nav-item ">
                            {/* <NavLink className="nav-link" exact to='/'>home</NavLink>  */}
                            </li>
                            <li className="nav-item">
                            {/* <NavLink className="nav-link" exact to='/about'>about</NavLink> */}
                            </li>
                            <li className="nav-item">
                            {/* <NavLink  className="nav-link" exact to='/portfolio'>portfolio</NavLink> */}
                            </li>
                            </ul>
                    </div>
                </nav>

        
        )
    }

export default Header;