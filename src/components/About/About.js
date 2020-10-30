import React from 'react';
import './About.css'
import { Navbar } from 'react-bootstrap';
import Header from '../Header/Header';

const About = () => {
    return (
        <div>
            <Header></Header>
            <div  className="d-flex justify-content-center row mt-5 pt-5">
                <div className="col-md-4" >
                <img className="imgMe2" src={'https://i.imgur.com/X7CF6Ad.png'} alt="" />
                </div>
                
                <div className="positon col-md-6 pl-3">
                <h4>A diligent Front End Developer. Acquiring skills in technology has always been my interest therefore I approached a course and soon found myself getting engrossed in it, where I gained lots of skills and knowledge in web programming.</h4>
                <br/>
                <h5>Skills</h5>
                    <ul style={{ color: "white" }}>
                        <li>Html, CSS, ES6, Rest API</li>
                        <li>Bootstrap, Material UI</li>
                        <li>JavaScript, React, Node JS, Express, MongoDB</li>
                        <li>Firebase, Netlify, Heroku</li>
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default About;