import React, { Component } from 'react';
import { Link } from "react-router-dom";

import ReactCursorPosition from 'react-cursor-position';



class Front extends Component{

    constructor(props){
        super(props);
        this.state = {
            toggleBg: true,
            toggleOptions: false,
        };

    }

    render(){

        
        return( 
            <div className = 'front-page'>
                {/* <div className='settings'>
                    <img src={require('./baseline_help_outline_white_18dp.png')} className='settings-icon' />
                </div> */}
                {/* <ReactCursorPosition> */}
                {/* <div className = 'front-text'>
                    Welcome
                </div> */}
                <div className='nav'>
                    {/* <Link className='nav-item' to={{pathname: `/about`}} >About</Link> */}
                    <Link className='nav-item' to={{pathname: `/projects`}}>Projects</Link>
                    {/* <a onClick={() => scrollToComponent(this.Music, { offset: 0, align: 'top', duration: 800})} className='nav-item'>Music</a> */}
                    {/* <Link className='nav-item' to={{pathname: `/contact`}}>Contact</Link> */}
                </div>
                {/* </ReactCursorPosition> */}
            </div>
        )
    }
}

export default Front;