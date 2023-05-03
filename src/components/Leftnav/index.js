import React, {useEffect, useState} from "react";
import "./index.css";

const LeftNav = (props) => {
  const { skillsRef, aboutRef, contactRef, projectsRef, activeComponent } =
    props;

  const [dynamicClass, setDynamicClass] = React.useState({});
  const [shouldScroll, setShouldScroll] = React.useState(true);
  const [isClickedComponent, setIsClickedComponent] = useState('');

  useEffect(()=>{
    if(shouldScroll) setDynamicClass({[activeComponent]: 'active'});
    if(isClickedComponent === activeComponent) setShouldScroll(true);
  },[activeComponent]);
  
  const handleClick = (ref, str) => {
    if(activeComponent === str) return;
    setIsClickedComponent(str);
    setShouldScroll(false);
    ref.current.scrollIntoView({ behavior: "smooth" });
    setDynamicClass({[str]: 'active'});  
  };

  return (
    <div className="nav-container">
      <ul>
        <li
          className={dynamicClass['about-ref']}
          onClick={() => handleClick(aboutRef, 'about-ref')}
        >
          About
        </li>
        <li
          className={dynamicClass['skills-ref']}
          onClick={() => handleClick(skillsRef, 'skills-ref')}
        >
          Skills
        </li>
        <li
          className={dynamicClass['projects-ref']}
          onClick={() => handleClick(projectsRef, 'projects-ref')}
        >
          Projects
        </li>
        <li
          className={dynamicClass['contact-ref']}
          onClick={() => handleClick(contactRef, 'contact-ref')}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default LeftNav;
