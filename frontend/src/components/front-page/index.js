import React, { Component } from 'react';

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
                    <a className='nav-item' >About</a>
                    <a className='nav-item'>Portfolio</a>
                    {/* <a onClick={() => scrollToComponent(this.Music, { offset: 0, align: 'top', duration: 800})} className='nav-item'>Music</a> */}
                    <a className='nav-item'>Contact</a>
                </div>
                {/* </ReactCursorPosition> */}
            </div>
        )
    }
}

export default Front;