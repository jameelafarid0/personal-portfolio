import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Resume.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Spring } from 'react-spring/renderprops';

const Resume = () => {
    return (
        <div>
            <Header></Header>
            <Spring
                from={{ opacity: 0, marginTop: -800 }}
                to={{ opacity: 1, marginTop: 0 }}
            >
                {props => (
                    <div style={props}>
                        <div className="container">
                <div className="style justify-content-md-center ml-5 mt-t-5 mb-5">
                    <div style={{ display: "flex" }}>
                        <div>
                            <h1 style={{color:"white"}}>Jameela Farid Ahammed</h1>
                        </div>
                        <div style={{ marginLeft: "300px" }} >
                            <p>Front-end web developer</p>
                            <a className="margin" width="200px" href="https://github.com/jameelafarid0"><FontAwesomeIcon className="fab" icon={faGithub} /> </a>
                            <a className="margin" href="https://www.linkedin.com/in/jameela-farid-ahammmed-968aaa1b1/"><FontAwesomeIcon className="fab" icon={faLinkedin} /> </a>
                            <a className="margin" href="jameelafarid9@gmail.com"><FontAwesomeIcon className="fab" icon={faEnvelope} /> </a>
                        </div>
                    </div>
                    <br />
                    <button class="btn btn-primary"><a className="hover" href="https://drive.google.com/file/d/1UGzT6EONu6tZf9Gn39Ki85psm7arf63t/view?usp=sharing">Download Resume</a></button>
                    <br />
                    <br/>

                    <h2>Skills</h2>
                    <ul style={{ color: "white" }}>
                        <li>Html, CSS, ES6, Rest API</li>
                        <li>Bootstrap, Material UI</li>
                        <li>JavaScript, React, Node JS, Express, MongoDB</li>
                        <li>Firebase, Netlify, Heroku</li>
                    </ul>
                    <br />

                    <h2>Projects</h2>
                    <br/>
                    <ol style={{ color: "white" }}>
                        <li><h3>Creative Agency</h3> | <a href="https://agency-8d527.web.app/">Website</a></li>
                        <ul style={{ color: "white" }}>
                            <li>you can place an order for a service</li>
                            <li>user can provide their feedback, view it in UI</li>
                            <li>admin can append services, make new admin, and see all orders.</li>
                        </ul>
                        <br/>
                        <h5>GitHub:</h5>
                        <a href="https://github.com/jameelafarid0/AGENCY-SERVER">github server code</a> |
                    <a href="https://github.com/jameelafarid0/AGENCY-CLIENT"> github client code</a>
                        <br />
                        <br />
                        <li><h3>Volunteer network</h3> | <a href="https://volunteer-network-1e937.web.app/">Website</a></li>
                        <ul style={{ color: "white" }}>
                            <li>user can participate in many volunteer events.</li>
                            <li>user can view all the registered events and delete it if needed.</li>
                            <li>Google authentication appended.</li>
                        </ul>
                        <br/>
                        <h5>GitHub:</h5>
                        <a href="https://github.com/jameelafarid0/VOLUNTEER-SERVER">github server code</a> |
                    <a href="https://github.com/jameelafarid0/VOLUNTEER-NETWORK"> github client code</a>
                        <br />
                        <br />
                        <li><h3>Travel guru</h3> | <a href="https://travel-guru-app-81e8c.web.app/">Website</a></li>
                        <ul style={{ color: "white" }}>
                            <li>you can choose a destination and book your date.</li>
                            <li>it will show the hotels specified to your destination.</li>
                            <li>Facebook and Google authentication embedded.</li>
                        </ul>
                        <br/>
                        <h5>GitHub:</h5>
                        <a href="https://github.com/jameelafarid0/travel-guru"> github client code</a>
                    </ol>
                    <br />
                    <h2>Experience</h2>
                    <ul style={{ color: "white" }}>
                        <li>I completed the front-end-development course in 3 and a half months. I built multiple projects and gained skills in programming</li>
                    </ul>
                    <br />
                    <h2>Education</h2>
                    <ul style={{ color: "white" }}>
                        <li>I am currently doing my O levels.</li>
                    </ul>

                </div>
            </div>
                       
                    </div>
                )}
            </Spring>
            
            
        </div>
    );
};

export default Resume;