import React, {useEffect} from 'react';
import './index.css';
import SkillsContent from './content';

const Skills = (props)=>{
    const {skillsRef, aboutRef, contactRef, projectsRef, setActiveComponent} = props;
    useEffect(()=>{
        const observer = new IntersectionObserver(
            entries => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveComponent(entry.target.id)
                  
                }
              });
            },
            { threshold: 0.5 }
          );
        
          observer.observe(aboutRef?.current);
          observer.observe(skillsRef?.current);
          observer.observe(projectsRef?.current);
          observer.observe(contactRef?.current);
        
          return () => {
            observer.unobserve(aboutRef?.current);
            observer.unobserve(skillsRef?.current);
            observer.unobserve(projectsRef.current);
            observer.unobserve(contactRef?.current);
          };
      },[])
    return (
    <div className='skills-container common-background' ref={skillsRef} id="skills-ref">
        <div className='heading'>I work with</div>
               <div className='skills-description max-width'>
                {
                    SkillsContent.map((item,i)=>{
                        return (
                            <div className='skill' key={i}>
                            <img src = {item.img} alt={item.stack}/>
                            <span>{item.stack}</span>
                            <div className='outer'>
                                <div className='progress' style={{width: item.width}}></div>
                            </div>
                            </div>
                        )
                    })
                }
                
               </div>
    </div>
    );
}

export default Skills;