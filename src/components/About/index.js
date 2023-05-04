import React from "react";
import myImg from "../../assets/myImg.jpg";
import TypingEffect from "./typing";
import check from '../../assets/global-icons/check.svg';
import "./index.css";

const About = (props) => {
  const { aboutRef, transitioned } = props;

  return (
    <div className="other" >
      <div className="about max-width" ref={aboutRef} id="about-ref">
        <div className="banner-container">
          <div className="banner-headline border-radius">
            <div className="heading heading-about">
              {transitioned && (
                <TypingEffect
                  string={"Hey, I'm Divya, your Next Problem Solver!"}
                  speed={20}
                />
              )}
            </div>
          </div>
          <div className="banner-body">
          <div className="resume">
          <a href="Project/resume" target="_blank">
              Résumé
            </a>
          </div>
          <div className="banner-description">
            <div className="left">
              <p>
                {/* I’ve always sought out opportunities and challenges that are
                meaningful to me. Web programming is a creative outlet to bring
                alive my thoughts and ideas. As a web developer, I enjoy using
                my obsessive attention to detail, my unequivocal love for making
                things, and my mission-driven work ethic to change things. */}
                As a web developer, I thrive on tackling intricate challenges 
                and leveraging my expertise to craft cutting-edge solutions. 
                Whether it's coding, troubleshooting, 
                or collaborating with a team, I revel in the process of creating 
                dynamic web experiences that deliver exceptional results. <br/> 
                <br/>
                I understand the significance of 
                continuous learning to remain current with the latest industry trends and 
                technologies. Therefore, I am committed to expanding my knowledge and skills to stay 
                ahead of the curve and achieve greater success in my field.
                {" "}
              </p>
            
              <ul>
                <li><img src={check} alt=""/>
                  FrontEnd Developer</li>
                <li><img src={check} alt=""/>MERN Stack</li>
                <li><img src={check} alt=""/>Mentor & Code Reviews</li>
              </ul>
              
            </div>
            
          </div>
          <div className="image">
            <img src={myImg} alt="img" className="border-radius" />
            <a href="Project/resume" target="_blank">
              Résumé
            </a>
          </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
