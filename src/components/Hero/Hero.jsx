import React from "react";
import "./Hero.css"
import HeroImg from "../../assets/Hero.svg"
export default function Hero(){
    return(
        <>
        <div className="hero">
            <img src={HeroImg} className="heroImg"></img>
        </div>
        
        <div className="article">
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
        </>
    )
}