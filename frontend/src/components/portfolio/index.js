import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getProjects } from '../../actions';
import './portfolio.css';


class Portfolio extends Component{

    constructor(props){
        super(props);
        this.props.getProjects();
        this.state = {
            toggle: false,
        };

    }

    clickHandler = () => {
        this.setState({toggle: !this.state.toggle});
        console.log('click', this);
    }


    render(){

        return(
            <div className="portfolio-page main-item">     

                <h1 className="portfolio-title">Portfolio</h1>

                <div className="portfolio-display">

                    <div className="portfolio-display-top">

                        <div className="portfolio-display-item">

                        </div>

                        <div className="portfolio-disply-text">

                        </div>

                    </div>

                    <div className="portfolio-display-bottom">

                        <div className="portfolio-display-preview">

                        </div>
                    
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
