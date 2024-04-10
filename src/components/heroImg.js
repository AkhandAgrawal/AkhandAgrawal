import "./heroImgStyles.css";
import IntroImg from "../assets/project1.jpg";

import React from 'react'
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg" />

        </div>
        <div className="content">
            <p>HI, I'M AKHAND</p>
            <h1>Developer.</h1>
            <div>
                <Link to="/projects" className="btn">Projects</Link>
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg