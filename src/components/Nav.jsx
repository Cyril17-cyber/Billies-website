import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";

function Nav(props) {
    return (
        <nav>
            <Link to='/' className="logo">
                <img src={logo} alt="logo"/>
                <h2>Billie's Confectionaries</h2>
            </Link>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/work'>Work</Link>
                <Link to='/contact'>Contact</Link>
            </div>

            <div id="hamburger" onClick={props.clickBurger}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}

export default Nav;