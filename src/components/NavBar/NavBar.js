import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'


const NavBar = () => {
    return (
        <div>
            
            <nav class="navbar">
                <img class="brand-img" src={"https://i.imgur.com/OIYcxL1.png"} alt=""/>
                <a href="#" class="toggle-button">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </a>
                <div class="navbar-links">
                    <ul>
                   
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About me</a></li>
                        <li><a href="/work">Work</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/resume">Resume</a></li>
                        <Link to="/contact">
                            <button className="marginLine btn btn-primary font-size" class="marginLine btn btn-primary">Contact me</button>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;