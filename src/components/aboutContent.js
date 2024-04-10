import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './aboutContentStyles.css';
import img1 from '../assets/project4.jpg';
import img2 from '../assets/project5.jpg';

const AboutContent = () => {
  const [selectedTab, setSelectedTab] = useState('about');

  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <div className="tabs">
          <button className={`btn tab ${selectedTab === 'about' ? 'selected' : ''}`} onClick={() => setSelectedTab('about')}>About</button>
          <button className={`btn tab ${selectedTab === 'skills' ? 'selected' : ''}`} onClick={() => setSelectedTab('skills')}>Skills</button>
          <button className={`btn tab ${selectedTab === 'education' ? 'selected' : ''}`} onClick={() => setSelectedTab('education')}>Education</button>
        </div>
        {selectedTab === 'about' &&
          <div className='about-content'>
            <p>I'm an undergraduate Student at SRM Institute of Science and Technology pursuing B. Tech in Computer Science and Engineering.</p>
          </div>
        }
        {selectedTab === 'skills' &&
          <div className='skills-content'>
            <h4>Web Development</h4>
            <p >HTML, CSS, JS, React JS, Node Js, Express Js, MongoDB </p>
            <h4>Data Analytics</h4>
            <p>SQL, Python, Excel, Power BI, Data Cleaning, Web Scraping </p>
          </div>
        }
        {selectedTab === 'education' &&
          <div className='education-content'>
            <h4>2020-2024</h4>
            <p>SRM Institute of Science and Technology </p>
            <h4>2018-2020</h4>
            <p>St. John's Sr. Sec. School</p>
            <h4>2015-2018</h4>
            <p>Delhi Public School</p>
          </div>
        }
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={img1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={img2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;


// import { Link } from "react-router-dom"
// import "./aboutContentStyles.css"
// import React from 'react'
// import img1 from "../assets/project4.jpg"
// import img2 from "../assets/project5.jpg"


// const AboutContent = () => {
//   return (
//     <div className="about">
//         <div className="left">
//             <h1>Who Am I?</h1>
//             <p>I'm an undergraduate Student at SRM Institute of Science and Technology pursuing B. Tech in Computer Science and
//                 Engineering.</p>
//             <Link to="/contact">
//                 <button className="btn">Contact</button>
//             </Link>
//         </div>
//         <div className="right">
//             <div className="img-container">
//                 <div className="img-stack top">
//                     <img src={img1} className="img" alt="true" />
//                 </div>
//                 <div className="img-stack bottom">
//                     <img src={img2} className="img" alt="true" />
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default AboutContent