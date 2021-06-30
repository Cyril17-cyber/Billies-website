import React from "react";
import svgContacts from "../images/svgContact.svg";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";

function Contacts() {
    return (
        <div className="contacts">
            <img src={svgContacts} alt=""/>
            <div className="texts">
                <h2>Trying to reach me?</h2>
                <h4>You could reach me through:</h4>
            </div>
            <div className="links">
                <a href="mailto: annabelkambilivictor@gmail.com">
                        <EmailIcon />
                        <h3>annabelkambilivictor@gmail.com</h3>
                </a>
                <a href="tel: +2348144536318">
                        <PhoneIcon />
                        <h3>+2348144536318</h3>
                </a>
                <a href="https://www.facebook.com/malt.ina.77">
                        <FacebookIcon />
                        <h3>Je-m'applle Annabelle</h3>
                </a>
            </div>
        </div>
    )
}

export default Contacts;