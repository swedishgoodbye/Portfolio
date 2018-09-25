import React, { Component } from 'react';



import './about.css';

class About extends Component{

    render(){
        return(
            <div className='about-page'>

            <h1 className="about-title"> About Me </h1>

            <div className="about-content">

                <div className="about-item about-summary">

                    {/* <h3>My name is Brett Sullivan...</h3> */}

                    <p>
                    I am a Full Stack Web Developer with a Front-End focus who excels at building clean and accessible user interfaces. Just as well I've learned that a well-written front-end is still highly dependent on a sturdy foundation. I can just as well dig into the backend and work with REST API's, MongoDB, Django, etc. I have recently graduated from Lambda School's Full-Stack Web & Computer Science course. Currently, I am looking to bring my innovative mindset, artful creativity, and efficient work ethic to a team that I can truly grow with.
                    </p>

                    <p>
                    Outside of programming, I have a very strong musical background. I play guitar in the band Dead Split Egos in which I have toured almost the entire United States. We are currently working to write our first full album. Being in this band for over eight years has given me a wealth of knowledge when it comes to working with a team to set and achieve goals, collaborate on ideas, and maintaining the group's morale so everyone stays on track. It also shows that when I passionately believe in what a team is doing I will stay dedicated and push it forward as far as it will go.
                    </p>
                </div>

                <div className="about-item about-media">

                    <div className="media-top">

                    <img src="https://lh3.googleusercontent.com/rf0oDMu1-N8QKRvA-7mbHGJLBGNUF9JBEFHWjgL2YjnafPYUYjWZcvDZru9ObdwsrIjy_hirdb74o96MjmkZvw5c3bx_L4dmDuux0RnK_q8do63HuYGgZ-sdYBnAaWY77peURn6B_UzmDQjrTSlS6exTzE7zI1TGZXdMvrNxfJSWTvPU2iyNurjdtrqGB0u0624clKtrDkSnUqkEJZIGaO-t6vPDuZ509fuhSBwbAhhEsOZiF6hr6FccBrxK-hLWIW-kPgEvmT4_dzhSlLdxizIPtKjGnxI0PBlwsox5ZiDE-jJWP08JoeMuskB4JQaTfCx4lai47mBykiV4syn5jnOhwFuN6rTWXRNl7DUz-ji5dvS-aJyqDrV4SsiThhfHR9Bs3pCbqbhUQl3Y9OzyInfrxSJb4B3gXLs1v_7E_XIjw-YNOcPnoyIceXj7sMJVnBCvnTS-AsnW_NtPWRDlc5kIdBfk-OU7GLatraKEnjaT4K4vh2stlBI9MNU5Etwk9r4IfH05VlS18hVMym3Jz242Ch3rDbrR-UYi1tYgrbu26DzX3Mw16uerlZa5eSn01jtc4WRgvb4D2MHw7rwD3OPQFZaaVRAihxxdp6lxXykBmY861aPNq_4eYW705g=w1346-h1009-no" />

                    <div>
                        <h3> Name: </h3>
                           <p> Brett Sullivan </p>
                        <h3>  URL:  </h3>
                            <p> Chicago, Illinois </p>
                        
                    </div>
                    </div>

                    <div className="media-bottom">
                        <ul className="tech-list"> Tech Stack:
                            <li>HTML / CSS</li>
                            <li>Javascript</li>
                            <li>C</li>
                            <li>Python</li>
                            <li>React  Redux</li>
                            <li>Django</li>
                            <li>Bootstrap</li>
                            <li>LESS</li>
                            <li>MongoDB</li>
                            <li>Axios</li>
                        </ul>
                        <ul className="soft-list"> Soft Skill Stack: 
                            <li>Efficient</li>
                            <li>Trained </li>
                            <li>Logical</li>
                            <li>Dependable</li>
                            <li>Leadership</li>
                            <li>Empathetic</li>
                            <li>Patient</li>
                            <li>Persistent</li>
                        </ul>
                    </div>


                </div>
                
                </div>
            </div>
        )
    }
}

export default About;