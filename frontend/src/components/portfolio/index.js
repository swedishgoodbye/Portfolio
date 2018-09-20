import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getProjects } from '../../actions';
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

                <h1 className="portfolio-title">Portfolio</h1>

                <div className="portfolio-panels">

                    <div id="portfolio-panel" className="portfolio-panel random-panel">

                    </div>

                    <div id="portfolio-panel" className="portfolio-panel port-panel">

                    </div>
                    
                    <div id="portfolio-panel" className="portfolio-panel git-panel">

                    </div>
                </div>

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
