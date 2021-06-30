import React from "react";

function Projects(props) {
    return (
        <div className="mainprojects">
        <img className="svg" src={props.work.illustration} alt=""/>

        <h2>Best Of {props.work.name}</h2>

        <div className="images">
            {props.work.img.map((image, id) => {
                return (
                    <img key={id} src={image.image} alt=""/>
                )
            })}
        </div>
    </div>
    )
}

export default Projects;