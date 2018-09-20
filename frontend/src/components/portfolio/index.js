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

                        <div className="portfolio-card random-card">

                            <div className="card-top">

                                <h3 className="card-title"> Project Name: </h3>

                                    <p> Lambda Randomizer </p>

                                <h3 className="card-link">URL:</h3>

                                    <a href="http://www.lambdarandomizer.com/">http://www.lambdarandomizer.com/</a>

                            </div>

                            <div className="card-bottom">

                                <ul className="card-stack"> Current Tech Stack:
                                    <li>HTML/CSS</li>
                                    <li>Bootstrap / Reactstrap</li>
                                    <li>Javascript</li>
                                    <li>React / Redux</li>
                                    <li>Node.js / MongoDB</li>
                                    <li>Git</li>
                                    <li>Mongoose</li>
                                    <li>Axios</li>
                                    <li>Jquery</li>
                                    <li>Heroku</li>
                                    
                                </ul>

                                <p className="card-desc"></p>                       

                            </div>


                        </div>

                    </div>

                    <div id="portfolio-panel" className="portfolio-panel port-panel">

                        <div className="portfolio-card port-card">

                            <div className="card-top">

                                <h3 className="card-title"> Project Name: </h3>

                                    <p> This Website! </p>

                                <h3 className="card-link">URL:</h3>

                                    <a href="">You're Here Already!</a>

                            </div>

                            <div className="card-bottom">

                                <ul className="card-stack"> Current Tech Stack:
                                <li>HTML/CSS</li>
                                    <li>HTML / CSS</li>
                                    <li>Javascript</li>
                                    <li>React / Redux</li>
                                    <li>Node.js / MongoDB</li>
                                    <li>Git</li>
                                    <li>Mongoose</li>
                                    <li>Heroku</li>
                                </ul>

                                <p className="card-desc"></p>

                            </div>


                        </div>

                    </div>
                    
                    <div id="portfolio-panel" className="portfolio-panel git-panel">

                        <div className="portfolio-card random-card">

                            <div className="card-top">

                                <h3 className="card-title"> Github Username: </h3>

                                    <p>swedishgoodbye</p>

                                <h3 className="card-link">URL:</h3>

                                    <a href="https://github.com/swedishgoodbye">https://github.com/swedishgoodbye</a>

                            </div>

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
