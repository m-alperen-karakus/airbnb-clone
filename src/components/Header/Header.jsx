import React from "react";
import "./Header.css"
import Logo from "../../assets/AirbnbLogo.svg"

export default function Navbar(){
    return(
        <nav>
            <div className="navbar">
                <img src={Logo} className="logo"></img>
            </div>
        </nav>
    )
}