import React, { Component } from 'react';
import {Link} from 'react-router-dom';


import './about.css';

class About extends Component{

    render(){
        return(
            <div className='about-page main-item'>

            {/* <div className="about-content"> */}

                <div className="about-display">
                                <Link className='page-exit' to={{pathname: `/`}}>
                        {/* <img src={require('../../media/x.png')}/> */}
                        X
                    </Link>


                    


                </div>
                
                {/* </div> */}
            </div>
        )
    }
}

export default About;