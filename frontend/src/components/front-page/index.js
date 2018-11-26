import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getProjects } from '../../actions';
import ReactCursorPosition from 'react-cursor-position';



class Front extends Component{

    constructor(props){
        super(props);
        this.state = {
            toggleBg: true,
            toggleOptions: false,
        };

    }

    componentDidMount() {
        this.props.getProjects();
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
                    <Link className='nav-item' to={{pathname: `/about`}} >About</Link>
                    <Link className='nav-item' to={{pathname: `/projects`}}>Projects</Link>
                    {/* <a onClick={() => scrollToComponent(this.Music, { offset: 0, align: 'top', duration: 800})} className='nav-item'>Music</a> */}
                    <Link className='nav-item' to={{pathname: `/contact`}}>Contact</Link>
                </div>
                {/* </ReactCursorPosition> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      projects: state.projects,
    };
  };
  
export default connect(mapStateToProps, { getProjects })(Front);

// export default Front;