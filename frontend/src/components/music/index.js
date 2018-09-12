import React, { Component } from 'react';

import './music.css';

class Music extends Component{
    render(){
        return(
            <div className="music-page">
                <ul className="music-items">
                <li><a href="https://deadsplitegos.bandcamp.com/" target="_blank" className="bandcamp-links" ><img src="ecdysis.jpg" className="responsive" id="deadsplitegos"/></a></li>
                </ul>
            </div>
        )
    }
}

export default Music;