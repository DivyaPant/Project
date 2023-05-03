import React from "react";
import './index.css';
import location from '../../assets/icons/location.png';
import linkedin from '../../assets/icons/linkedin.svg';
import email from '../../assets/icons/email.png';
import github from '../../assets/icons/github.svg';

const Contact = (props) => {
  const {contactRef} = props;
  return (
    <div className={"common-background"}>
      <div className="heading">Contact</div>
      <div className="contact max-width"  ref={contactRef} id="contact-ref">
        <div className="contact-left">
          <div className="details">
          <span><img src={email} alt=""/>
            divyapant369@gmail.com</span>
          <span><img src={location} alt=""/>
            Gurugram</span>
          
            <span>
            <img src={linkedin} alt=""/>
            <a href="https://www.linkedin.com/in/divya-pant-b0042217b" target="_blank">
            Linkedin
          </a>

            </span>
            <span>
            <img src={github} alt=""/>
            <a href="https://www.github.com/DivyaPant" target="_blank">
            Github
          </a>

            </span>
          </div>
        </div>

        <div className="contact-right">
          <div className="msg">
            <p>I'd love your feedback!</p>
            <textarea placeholder="Type your message here..." rows="6" cols="30"></textarea>
            <a href="mailto: divyapant369@gmail.com" id="btn">
              Send
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
