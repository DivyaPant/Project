import React, {useEffect, useState, useRef} from 'react';
import About from '../About';
import Skills from '../Skills';
import Experience from '../Experience';
import MyProjects from '../MyProjects';
import Contact from '../Contact';

import './index.css';

const HomePage = (props)=>{

  const {skillsRef, aboutRef, contactRef, projectsRef} = props;

  const [transitioned, setTransitioned] = useState(false);
  
  useEffect(()=>{
    document.querySelector(".flip").addEventListener("transitionend", ()=>{
      setTransitioned(true);
      document.querySelector(".flip").style.transition="none";
      document.querySelector(".flip").style.transform="rotateX(-360deg)";
      document.querySelector(".other").style.transition="none";
      document.querySelector(".other").style.transform="rotateX(360deg)";
      document.querySelector(".other").style.height="100%";
      document.querySelector('.nav-container').style.display= "block";
    });
    return ()=>{
      document.querySelector(".flip").removeEventListener("transitionend", ()=>{
      })
    }
  }, []);
  

    return (
      <>
      
     <About aboutRef={aboutRef} transitioned={transitioned}/>
   {transitioned && 
   <>
   <Skills skillsRef={skillsRef} projectsRef={projectsRef} 
      aboutRef={aboutRef} contactRef={contactRef} setActiveComponent={props.setActiveComponent}/>
   <MyProjects projectsRef={projectsRef} />
   <Contact contactRef={contactRef} />
   </>
   }
   
  
   </>
    )
};

export default HomePage;