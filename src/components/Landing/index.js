import React, { useEffect, useState, useRef } from 'react';
import './index.css';
import HomePage from '../Home';
import LeftNav from '../Leftnav';

const LandingPage = ()=>{
  // Define all refs here

  const skillsRef= useRef();
  const aboutRef= useRef();
  const contactRef= useRef();
  const projectsRef= useRef();

    const [isLandingPage, setIsLandingPage] = useState(true);
    const [activeComponent, setActiveComponent] = useState('');

    const handlePageFlip =()=>{
        document.querySelector(".img .box").style.display="none";
        document.querySelector(".flip").style.transform="rotateX(180deg)";
        setIsLandingPage(false);
    };


    useEffect(()=>{
      if(!isLandingPage) {
        document.querySelector(".other").style.transform="rotateX(180deg)";
      }
      
    }, [isLandingPage])

    return (
        <>
        <LeftNav skillsRef={skillsRef} projectsRef={projectsRef} 
      aboutRef={aboutRef} contactRef={contactRef} activeComponent={activeComponent}
      />
        <div className="main">
  <div className="flip" >
    {isLandingPage? 
      <div className="img">
         <div className="box">
            <h1>DIVYA PANT</h1>
            <p>Web Developer</p>
            <button id="view" onClick={handlePageFlip}>View</button>
         </div>
      </div> : <HomePage skillsRef={skillsRef} projectsRef={projectsRef} 
      aboutRef={aboutRef} contactRef={contactRef} setActiveComponent={setActiveComponent}/>
      }
  </div>
 

  
</div></>
    )
};

export default LandingPage;