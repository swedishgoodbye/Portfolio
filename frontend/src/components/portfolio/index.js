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
            testArr: [null, '0', '1', '2', '3', null]
        };

    }

    clickRightHandler = () => {
        // this.setState({toggle: !this.state.toggle});
        console.log('right', this);
    }
    clickLeftHandler = () => {
        // this.setState({toggle: !this.state.toggle});
        console.log('left', this);
    }
    clickHandler = () => {
        // this.setState({toggle: !this.state.toggle});
        console.log('click', this);
    }


    render(){

        return(
            <div className="portfolio-page main-item">     

                <h1 className="portfolio-title">Portfolio</h1>

                <div className="portfolio-display">

                    <div className="portfolio-display-top">

                        <div className="portfolio-display-item">

                            <div className="portfolio-display-media">

                                <div className="portfolio-display-pic">
                                </div>

                                <div className="portfolio-display-title">
                                </div>

                            </div>

                        </div>

                        <div className="portfolio-display-text">

                        </div>

                    </div>

                    <div className="portfolio-display-bottom">

                        <div onClick={this.clickLeftHandler} className="portfolio-display-arrow-left">
                        </div>

                        <div className="portfolio-display-preview">

                            <div className="portfolio-display-thumbItem">
                                
                            </div>

                            <div className="portfolio-display-thumbItem">
                                
                            </div>

                            <div className="portfolio-display-thumbItem">
                                
                            </div>

                        </div>

                        <div onClick={this.clickRightHandler} className="portfolio-display-arrow-right">
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
