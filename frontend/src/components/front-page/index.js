import React, { Component } from 'react';

class Front extends Component{

    render(){
        return( 
            <div className = 'front-page'>
                <div className = 'front-text'>
                    Welcome
                </div>
                <div className='nav'>
                    <a className='nav-item'>Portfolio</a>
                    <a className='nav-item' >About</a>
                    {/* <a onClick={() => scrollToComponent(this.Music, { offset: 0, align: 'top', duration: 800})} className='nav-item'>Music</a> */}
                    <a className='nav-item'>Contact</a>
                </div>
            </div>
        )
    }
}

export default Front;