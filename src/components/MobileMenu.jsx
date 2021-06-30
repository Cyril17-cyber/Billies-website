import React from "react";
import { Link } from "react-router-dom";

function Mobilemenu(props) {
    return (
        <div className="mobilemenu" onClick={props.clickBurger}>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/work'>Work</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}

export default Mobilemenu;