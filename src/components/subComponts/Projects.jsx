import React from "react";
import { Link } from "react-router-dom";

function Projects(props) {
    return (
        <div className="projects">
            <img src={props.work.img[0].image} alt=""/>
            <div className="bottom">
                <h2>Best Of {props.work.name}</h2>
                <p>{props.work.description}</p>
                <Link to={props.work.link}>See Photos</Link>
            </div>
        </div>
    )
}

export default Projects;