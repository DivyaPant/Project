import React from "react";
import "./index.css";
import dice from "../../assets/projects/dice-challange.png";
import template1 from "../../assets/projects/template-1.png";
import template2 from "../../assets/projects/template-2.png";
import socialMedia from "../../assets/projects/social-media-template.png";
import ecom from "../../assets/projects/ecom-template.png";
import background from "../../assets/projects/background.jpg";

const MyProjects = (props) => {
  const { projectsRef } = props;
  return (
    <div
      className={"work common-background"}
      ref={projectsRef}
      id="projects-ref"
    >
      <div className="heading">My Projects</div>
      <div className="myProjects max-width">
        {content.map((item, i) => {
          return (
            <div className="projBox border-radius" key={i}>
              <div className="overlay border-radius"></div>
              <div className="content">
                <span className="content-heading">{item.name}</span>
                <span className="content-description">
                  ({item.stack})
                </span>
              </div>
              <span className="img-container border-radius">
                <img src={item.img} alt={item.name} />
              </span>
              <div className="view-container border-radius">
                <img src={background} alt={"background"} />
                <div className="view">
                  <div className="view-content">
                    <span>{item.description}</span>
                  </div>
                    <a href={item.href} target="_blank">
                   <span className="view-btn"> View</span></a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyProjects;

const content = [
  {
    name: "Social media template",
    description: "This is a single-page static project that emulates a social media platform. It has been created using HTML, CSS, JavaScript, and jQuery.",
    stack: "HTML,CSS,Javascript,JQuery",
    href: "https://divyapant.github.io/social-media",
    img: socialMedia,
  },
  {
    name: "E-commerce template",
    description: "Check out my e-commerce layout project, a simple yet functional web page with some interactions. It has been built with HTML, CSS, Javascript and jQuery.",
    stack: "HTML,CSS,Javascript,JQuery",
    href: "https://divyapant.github.io/ecom-template",
    img: ecom,
  },
  {
    name: "Reference Template: W3Schools",
    description: "A static web page, inspired by a reference template, and has been built using plain HTML and CSS. ",
    stack: "HTML,CSS",
    href: "https://divyapant.github.io/template-1",
    img: template1,
  },
  {
    name: "Reference Template: W3Schools",
    description: "Another static web page, inspired by a reference template, and has been built using plain HTML and CSS. ",
    stack: "HTML,CSS",
    href: "https://divyapant.github.io/template-2",
    img: template2,
  },
  {
    name: "Dice Challenge",
    description: "A small dice game that I built in my free time using Javascript, HTML and CSS.",
    stack: "JavaScript Html CSS",
    href: "https://divyapant.github.io/dice-game",
    img: dice,
  },
];
