import "./footerStyles.css"
import {FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/> 
                    <div>
                        <p>Roorkee</p>
                        <p>India</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>+91 8954324913</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>akhandaggi@gmail.com</h4>
                </div>

            </div>
            <div className="right">
                <h4>Thank you for visiting!</h4>
                <p>Explore more projects or get in touch to collaborate. Let's bring ideas to life!</p>
                <div className="social">
                    <a href="https://github.com/AkhandAgrawal" target="_blank" rel="noopener noreferrer"><FaGithub size={30} style={{color: "#fff", marginRight: "1rem"}}/></a>
                    <a href="https://twitter.com/AgrawalAkhand" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}}/></a>
                    <a href="https://www.linkedin.com/in/akhand-agrawal-b31a70bb/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/></a>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Footer