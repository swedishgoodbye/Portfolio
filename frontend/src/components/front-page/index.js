import React, { Component } from 'react';

import './front.css';

class Front extends Component{

    render(){
        return( 
            <div className = 'front-page main-item'>
                <div className = 'front-text'>
                    Welcome
                </div>
                <div className='temp-nav'>
                    <button  className='nav-button'>Start</button>
                    <button className='nav-button'>Portfolio</button>
                    <button className='nav-button' >About</button>
                    {/* <button onClick={() => scrollToComponent(this.Music, { offset: 0, align: 'top', duration: 800})} className='nav-button'>Music</button> */}
                    <button className='nav-button'>Contact</button>
                </div>
            </div>
        )
    }
}

export default Front;