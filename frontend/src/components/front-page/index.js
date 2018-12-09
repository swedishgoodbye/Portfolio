import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getProjects } from '../../actions';


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
  
                <div className='nav'>
                    <Link className='nav-item' to={{pathname: `/about`}} >About</Link>
                    <Link className='nav-item' to={{pathname: `/projects`}}>Projects</Link>
                    <Link className='nav-item' to={{pathname: `/contact`}}>Contact</Link>
                </div>
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