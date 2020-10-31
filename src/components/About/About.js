import React from 'react';
import './About.css'
import { Navbar } from 'react-bootstrap';
import Header from '../Header/Header';

const About = () => {
    return (
        <div>
            <Header></Header>
            <div className="d-flex justify-content-center row mt-5 pt-5">
                
                <div className="col-md-4" >
                    <img className="imgMe2" src={'https://i.imgur.com/X7CF6Ad.png'} alt="" />
                </div>

                <div className="positon col-md-6 pl-3">
                    <h4 className="h4" style={{color:" #192841"}}>A diligent Front End Developer. Acquiring skills in technology has always been my interest therefore I approached a course and soon found myself getting engrossed in it, where I gained lots of skills and knowledge in web programming.</h4>
                    <br />
                    <h5 className="h5">Skills</h5>
                    <ul style={{ color: " #192841" }}>
                        <div className="box2">
                            <span className="box1">html</span>
                            <span className="box1">CSS</span>
                            <span className="box1">ES6</span>
                            <span className="box1">Bootstarp</span>
                            <span className="box1">MaterialUI</span>
                        </div>
                        <div className="box2">
                            <span className="box1">Javascript</span>
                            <span className="box1">React</span>
                            <span className="box1">Node JS</span>
                            <span className="box1">Express</span>
                        </div>
                        <div className="box2">
                            <span className="box1">Mongodb</span>
                            <span className="box1">Firebase</span>
                            <span className="box1">Netlify</span>
                            <span className="box1">Heroku1</span>
                        </div>

                    </ul>
                </div>

            </div>

        </div>
    );
};

export default About;