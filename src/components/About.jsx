import React from "react";
import logo from "../images/logo.jpg";

function About() {
    return (
        <div className="about">
            <img src={logo} alt=""/>

            <div className="texts">
                <p>
                I'm Annabelle Kambilli Victor, the owner and manager of <span>Billie's Confectionaries.</span> A young female Nigerian business lady based in Kaduna state. 
                </p>
                <p>
                I'm also a student of the University of Jos, Plateau State, Nigeria 
                </p>
                <p>
                <span>Billie's Confectionaries</span> has been improving the value of life through her products and that has been our mission for the past 6 months and we ca definitly be trusted☺.
                </p>
            </div>
        </div>
    )
}

export default About;