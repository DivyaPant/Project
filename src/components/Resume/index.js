import React, {useRef} from "react";
import "font-awesome/css/font-awesome.min.css";
import html2pdf from 'html2pdf.js';
import "./index.css";
import "./download.css";

const Resume = () => {
    const contentRef = useRef(null);
    const [isDownloaded, setIsDownloaded] = React.useState(false);
    
    const handleDownload= ()=>{
        const reportName = 'Divya_Pant_Software_Developer_Resume';
        const content = contentRef.current;
        content.className += ' download-pdf';
    const options = { 
        filename: reportName,
        margin:       0,
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in',  orientation: 'portrait' } };
    html2pdf().from(content).set(options).save();
    setIsDownloaded(true);
    };
    
    React.useEffect(()=>{
        if(isDownloaded) contentRef.current.classList.remove('download-pdf');
        setIsDownloaded(false);
    },[isDownloaded]);

  return (
    <>
      <div className="resume-header">
        <a href="/">
          <i className="fa fa-home"></i>
        </a>
        <div style={{float: 'right'}} onClick={handleDownload}>
        <i className="fa fa-download" aria-hidden="true"></i>
        </div>
      </div>
      <div className="resume-main" ref={contentRef}>
        <div className="resume-left">
          <div className="resume-box">
            <div className="summary">
              <h2 align="left">Divya Pant</h2>
              <p className="text-opacity">
              Forward-looking web developer with over 2.5 years of experience in developing responsive web applications using react and node. Believes in 
writing clear, concise code that is simple, reliable, user-friendly and is easy to maintain and troubleshoot while staying Up-to-Date with emerging 
technologies to deliver cutting-edge solutions. Experienced in working with both small and large teams across multiple projects. 

{" "}
              </p>
            </div>
            <div className="resume-contact text-opacity">
              <span>
                <i className="fa fa-briefcase"></i>Web Development
              </span>
              <span>
                <i className="fa fa-map-marker"></i>Gurugram, Haryana
              </span>
              <span>
                <i className="fa fa-envelope"></i>divyapant369@gmail.com
              </span>
            </div>
          </div>
          <div className="resume-box common-box-padding">
            <h2 align="left">
              {/* <i className="fa fa-asterisk"></i> */}
              Skills
            </h2>
            <div className="resume-skills-container text-opacity">
              Technical Skills
              <ul>
                <li>ReactJs</li>
                <li>NodeJs</li>
                <li>Redux/Redux toolkit</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS/SCSS</li>
                <li>MongoDB</li>
                <li>DynamoDB</li>
                <li>AWS</li>
                <li>Unit Testing</li>
              </ul>
              Soft Skills
              <ul>
                <li>Communication</li>
                <li>Problem Solving</li>
                <li>Adaptability</li>
                <li>Attention to detail</li>
                <li>Time Management</li>
                <li>Team Work</li>
                <li>Leadership</li>
              </ul>
            </div>
          </div>
          <div className="resume-box common-box-padding">
            <h2 align="left">Education</h2>
            <div className="text-opacity resume-education">
                <div>
                <b>Maharaja Agrasen Institute of Technology, New Delhi</b>
                <br/>
                <span> 
                <i className="fa fa-calendar"></i> 2012-2016 </span>
                <br />
             <br />
             B.Tech - EEE
                </div>
             
            </div>
          </div>
          <div className="resume-box common-box-padding">
            <h2 align="left">Languages</h2>
            {["English", "Hindi"].map((item, i) => (
              <span key={i} className="resume-languages text-opacity">
                {item}{" "}
              </span>
            ))}
          </div>
          <div className="resume-box common-box-padding">
            <h2 align="left">Hobbies</h2>
            {["Travelling", "DIYs", "Water Activities"].map((item, i) => (
              <span key={i} className="resume-languages text-opacity">
                {item}{" "}
              </span>
            ))}
          </div>
        </div>
        <div className="resume-right">
          <div className="resume-box common-box-padding">
            <h2 align="left">Work Experience</h2>
            <div className="resume-experience text-opacity">
              <b>Piktorlabs (a UST Global subsidiary)</b>
              <div className="resume-roles">
                <div className="resume-roles-container">
                  <span className="resume-roles-header">
                    Lead 1 - Software Engineering
                  </span>

                  <span>
                    <i className="fa fa-calendar"></i> March 2019-August 2019
                  </span>
                </div>
                <ul>
                  <li>
                    As a key member of the development team, successfully
                    delivered a new web application from <b>inception to deployment
                    within a tight 4-week timeline</b>, surpassing the original 3-
                    month project estimation.
                  </li>
                  <li>
                    Ensured adherence to <b>best coding practices</b> and unwavering
                    <b> standards</b> for <b> code quality</b> and <b> security</b> throughout the
                    project lifecycle, resulting in a code <b>review score of 90% </b>
                     and zero major vulnerabilities.
                  </li>
                  <li>
                    Led the frontend team in building and successfully launching
                    a new feature in an existing project which <b>automated the
                    process of API data collection</b> from the swagger file,
                    harvesting it and then producing a report that highlighted
                    the violations.
                  </li>
                  <li>
                    This resulted in <b>increasing the user interaction by approx.
                    20%</b> and reduction of the avg time taken to perform the same
                    process manually <b>from 2 hours to 20 minutes</b>.
                  </li>
                  <li>
                    Tech stack - <b>ReactJs, Redux, NodeJs, Lambda functions,
                    Serverless, AWS</b>
                  </li>
                </ul>
              </div>
              <div className="html2pdf__page-break"></div>

              <div className="resume-roles">
                <div className="resume-roles-container">
                  <span className="resume-roles-header">
                    Senior Software Engineer
                  </span>

                  <span>
                    <i className="fa fa-calendar"></i> Oct 2022 - Jan 2023{" "}
                  </span>
                </div>
              
                <ul>
                  <li>
                    Enhanced the functionality of an existing project through
                    the development of new components and implementation of
                    additional features, with a focus on user interface <b>
                        (UI)
                        optimization
                    </b> which <b>
                        improved the app load time by approx.
                        30%
                    </b>.
                  </li>
                  <li>
                    Tested the existing code for bugs and <b>
                        reduced the reported
                        number by nearly 50%
                    </b>.
                  </li>
                  <li>
                    Led the <b>migration of 2 projects</b> while <b>
                        independently migrated
                        2 others
                    </b> from jazz (internal tool) hosted serverless
                    platform into Node and Express app hosted on tke platform
                    using <b>kubernetes</b> to <b>reduce the cloud costs by 25%</b> for the
                    clients.
                  </li>
                  <li>
                    <b>Mentored</b> 4 junior developers and 3 interns and helped them
                    write code following the best practices as per the company
                    standards.
                  </li>
                  <li>
                    Streamlined the code reviewing process for 10 co-workers,
                    <b>reducing review times by 40%</b>, while maintaining a 50%
                    increase in code quality.
                  </li>
                  <li>
                    Have been a part of the technical interview panel,
                    conducting over <b>20 interviews</b>.
                  </li>
                  <li>
                    Tech stack - <b>
                        ReactJs, Redux, NodeJs, Gitlab CI/CD,
                        Serverless, AWS
                    </b>{" "}
                  </li>
                </ul>
              </div>
              <div className="resume-roles">
                <div className="resume-roles-container">
                  <span className="resume-roles-header">Software Engineer</span>

                  <span>
                    <i className="fa fa-calendar"></i> Dec 2020 - Oct 2022{" "}
                  </span>
                </div>
                

                <ul>
                  <li>
                    Worked in <b>4 long term projects</b> and developed multiple
                    robust, reusable and reliable features and components for
                    customer facing web apps thus enhancing the client's
                    platform and services.
                  </li>
                  <li>
                    Developed scalable and maintainable code, <b>
                        optimized
                        performance hy 30%
                    </b>, and resolved any existing issues.
                  </li>
                  <li>
                    Assisted in the development of <b>RESTful APIs</b> and
                    <b>Microservices</b>.
                  </li>
                  <li>
                    Implemented unit testing using <b>Jest</b> and <b>
                        Enzyme/React Testing
                        Library
                    </b>, achieving over <b>85% code coverage</b>.
                  </li>
                  <li>
                    Contributed to <b>documentation</b> and knowledge sharing efforts
                    to facilitate future maintenance and development of the
                    apps.
                  </li>
                  <li>
                    Collaborated closely with cross-functional teams, including
                    product managers, designers, and QA analysts, to drive
                    project success and ensure alignment with business
                    objectives.
                  </li>
                  <li>Tech stack - <b>ReactJs, Redux, NodeJs</b></li>
                </ul>
              </div>
              <br/>
              <b>Wipro technologies</b>
              <div className="resume-roles">
                <div className="resume-roles-container">
                  <span className="resume-roles-header">
                  IT Consultant
                  </span>

                  <span>
                    <i className="fa fa-calendar"></i> March 2019-August 2019
                  </span>
                </div>
                <ul>
                  <li>
                  Worked with technical/IT team to provide software support 
                  and resolve complex technical issues for the end users.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="resume-box common-box-padding">
            <h2 align="left">Training/Certifications</h2>
            <div className="text-opacity">
        <b style= {{fontSize: '1.125rem'}}>Web Development - Aptron Solutions pvt ltd, Delhi</b>
        <ul>
            <li>
            6 months certification on web development in a classroom based program.
            </li>
        </ul>
      </div>
      <div className="text-opacity">
        <b style= {{fontSize: '1.125rem'}}>Communication Skills  - British Council Institute, New Delhi </b>
        <ul>
            <li>
            Successfully completed a communication skills program with an A grade.
            </li>
        </ul>
      </div>
            </div>
            
        </div>
      </div>
    </>
  );
};

export default Resume;