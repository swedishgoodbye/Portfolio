import React, { Component } from 'react';

import { connect } from 'react-redux';

import './portfolio.css';


class Portfolio extends Component{

    constructor(props){
        super(props);
        this.props.getProjects();
        this.state = {

        };

    }



    render(){

        return(
            <div className="portfolio-page">     
     


            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projects
    };
};

export default connect(
    mapStateToProps,
        { getProjects })(Portfolio);
