import React, { Component } from 'react';

import './about.css';

class About extends Component{

    render(){
        return(
            <div className='about-page'>
                <p class="about-text">
        
        <div class="about-text p-left">
            I am a web development and programming student at Lambda School.
           </div>

            <br />
            

        <div class="about-text p-right">
           Within the last few months I have learned various languages and frameworks including: JavaScript, C, Python, React, Redux, and more.
        </div> 

            <br />
            

            <div class="about-text p-left">
            Upon completion of my courses, I will focus on front-end development. That doesn't mean I will stop expanding my knowledge and interests with my future experiences and ongoing education.
            </div>
            
            <br />
            

            <div class="about-text p-right">
            Aside from programming I play music. I am self taught in almost all the instruments I play (guitar, bass guitar, drums, keyboard). An additional skill I have been working on as a hobby is audio recording and production.
            </div>
            
            <br />
            

            <div class="about-text p-left">
            In the hardcore band Dead Split Egos, I have toured and played in cities on both the East and West coasts, including Brooklyn, Seattle, and Denver. 
            </div>

            <br />
            

            <div class="about-text p-right">  
            My life aspiration is a pursuit of balance between my passion for technology and music. 
            </div>
            

            </p>
            
            </div>
        )
    }
}

export default About;