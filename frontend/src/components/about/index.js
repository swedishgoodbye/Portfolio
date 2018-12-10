import React, { Component } from 'react';
import {Link} from 'react-router-dom';


import './about.css';

class About extends Component{

    render(){
        return(
            <div className='about-page main-item'>

                <div className='about-display'>
                                <Link className='about-exit' to={{pathname: `/`}}>
                        X
                    </Link>

                    <div className='about-display-inner'>

                        <div className='about-content'>

                            <h1 className='about-name'>
                                <a className='about-name about-link' href='https://www.linkedin.com/in/brett-sullivan-a40445104/'>
                                    Brett Sullivan
                                </a>
                            </h1>

                            <h2 className='about-title'>
                                <a href='https://github.com/swedishgoodbye' className='about-title about-link'>
                                    Web Developer
                                </a>
                            </h2>

                            <ul className='about-info'>
                                <li className='about-location info-item list-item'><a href='https://goo.gl/maps/2fqUPj7VPyu' className='about-location info-item about-link'>Location: Chicago, Il, USA</a></li>
                                <li className='about-education info-item list-item'><a href='https://www.lambdaschool.com' className='about-education info-item about-link'>Education: Lambda School</a></li>
                                <li className='about-status info-item list-item'><a href="https://drive.google.com/open?id=1_CryoXmoUZFBhMoppo_xVjiGS6bFHzis" className='about-status info-item about-link'>Status: Self-Educating / Seeking Employment</a></li>
                            </ul>

                        </div>

                    </div>

                </div>
                
            </div>
        );
    };
};

export default About;
