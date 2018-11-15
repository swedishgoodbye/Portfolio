import React, { Component } from 'react';



import './about.css';

class About extends Component{

    render(){
        return(
            <div className='about-page main-item'>


            {/* <div className="about-content"> */}

                <div className="about-item about-media">

                   <div className="media-top">
 {/* 
                    <img src="https://lh3.googleusercontent.com/rf0oDMu1-N8QKRvA-7mbHGJLBGNUF9JBEFHWjgL2YjnafPYUYjWZcvDZru9ObdwsrIjy_hirdb74o96MjmkZvw5c3bx_L4dmDuux0RnK_q8do63HuYGgZ-sdYBnAaWY77peURn6B_UzmDQjrTSlS6exTzE7zI1TGZXdMvrNxfJSWTvPU2iyNurjdtrqGB0u0624clKtrDkSnUqkEJZIGaO-t6vPDuZ509fuhSBwbAhhEsOZiF6hr6FccBrxK-hLWIW-kPgEvmT4_dzhSlLdxizIPtKjGnxI0PBlwsox5ZiDE-jJWP08JoeMuskB4JQaTfCx4lai47mBykiV4syn5jnOhwFuN6rTWXRNl7DUz-ji5dvS-aJyqDrV4SsiThhfHR9Bs3pCbqbhUQl3Y9OzyInfrxSJb4B3gXLs1v_7E_XIjw-YNOcPnoyIceXj7sMJVnBCvnTS-AsnW_NtPWRDlc5kIdBfk-OU7GLatraKEnjaT4K4vh2stlBI9MNU5Etwk9r4IfH05VlS18hVMym3Jz242Ch3rDbrR-UYi1tYgrbu26DzX3Mw16uerlZa5eSn01jtc4WRgvb4D2MHw7rwD3OPQFZaaVRAihxxdp6lxXykBmY861aPNq_4eYW705g=w1346-h1009-no" />

                    <div>
                        <h3> Name: </h3>
                           <p> Brett Sullivan </p>
                        <h3>  URL:  </h3>
                            <p> Chicago, Illinois </p>
                        
                    </div>*/}
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
                        </ul>{/*
                        <ul className="soft-list"> Soft Skill Stack: 
                            <li>Efficient</li>
                            <li>Trained </li>
                            <li>Logical</li>
                            <li>Dependable</li>
                            <li>Leadership</li>
                            <li>Empathetic</li>
                            <li>Patient</li>
                            <li>Persistent</li>
                        </ul>*/}
                    </div> 


                </div>
                
                {/* </div> */}
            </div>
        )
    }
}

export default About;