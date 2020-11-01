import React from 'react';
import { Spring } from 'react-spring/renderprops';
import Header from '../Header/Header';
import './Home.css'


const Home = () => {
    return (
        <div className="body">
            <Header></Header>
            <div style={{ marginTop: "200px" }} className="text">
                

                <Spring

                    from={{ opacity: 0 , marginTop: -300}}
                    to={{ opacity: 1 , marginTop:0 }}
                    
                    
                >
                    {props => (
                        <div style={props}>
                            <h1 className="font" style={{ textAlign: "center", marginTop: "30px" }}>Hi, I am Jameela farid Ahammed,<br />
                              I am a Web Developer</h1>
                            <button style={{ marginTop: "10px" }} class="btn btn-primary"><a className="hover" href="https://drive.google.com/file/d/1UGzT6EONu6tZf9Gn39Ki85psm7arf63t/view?usp=sharing">Download Resume</a></button>
                            <button style={{ marginLeft: "10px", marginTop: "10px" }} class="btn btn-primary"><a className="hover" href="/contact">Contact me</a></button>

                        </div>
                    )}
                </Spring>


            </div>

        </div>
    );
};

export default Home;