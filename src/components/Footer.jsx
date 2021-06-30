import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            <div className="top">
                <Link to='/' className="logo">
                <img src={logo} alt="logo"/>
                <h2>Billie's Confectionaries</h2>
                </Link>

                <div className="contactLinks">
                    <a href="mailto: annabelkambilivictor@gmail.com">
                        <EmailIcon />
                    </a>
                    <a href="tel: +2348144536318">
                        <PhoneIcon />
                    </a>
                    <a href="https://www.facebook.com/103596845103683/posts/103597295103638/?substory_index=0&app=fbl">
                        <FacebookIcon />
                    </a>
                </div>
            </div>

            <p className="conclusion">Made by <a href="https://cyril.herokuapp.com">Cyril™</a>. Copyright ©{year}. All Right Reserved</p>
        </div>
    )
}

export default Footer;