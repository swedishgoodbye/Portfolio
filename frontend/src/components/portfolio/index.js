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

                                <a href="http://www.lambdarandomizer.com/" className="card-link">URL</a>

                                    

                            </div>

                             <div className="card-bottom">

                                <ul className="card-stack"> Current Tech Stack:
                                    <li>Bootstrap</li>
                                    <li>Javascript</li>
                                    <li>React / Redux</li>
                                    <li>Node.js / MongoDB</li>
                                    <li>Git</li>
                                    <li>Mongoose</li>
                                    <li>Axios</li>
                                    <li>Jquery</li>
                                    <li>Heroku</li>
                                    
                                </ul>
                            

                                <p className="card-desc">

                                    I worked on this app with a team of four other students for our Capstone Project at the end of the Lambda School course. 
                                    It's an app geared towards teachers that allows them to input the students in their class and randomly select their students to
                                    participate.
                                    <br/>

                                    Currently it features an "All Go" mode that makes sure every student is called before reshuffling the class and picking through it again;
                                    as well a mode that tracks a class's participation over time on a graph.



                                </p>

                                                      

                            </div> 


                        </div>

                    </div>

                    <div id="portfolio-panel" className="portfolio-panel port-panel">

                        <div className="portfolio-card port-card">

                            <div className="card-top port-card-top">

                                <h3 className="card-title"> This Website </h3>

                            </div>

                            <div className="card-bottom">

                                <ul className="card-stack"> Current Tech Stack:
                                    <li>HTML / CSS</li>
                                    <li>Javascript</li>
                                    <li>React / Redux</li>
                                    <li>Node.js / MongoDB</li>
                                    <li>Git</li>
                                    <li>Mongoose</li>
                                    <li>Heroku</li>
                                </ul>

                                <p className="card-desc">

                                    This website is rebuilt from my original personal one. 
                                    I have reworked it into a React / Redux app that utilizes a MongoDB backend. 
                                    <br/>
                                    In between other projects I will be expanding upon this website and adding more features to 
                                    show off what I've been learning. Check back occasionally and you'll see something new.

                                </p>

                            </div>


                        </div>

                    </div>
                    
                    <div id="portfolio-panel" className="portfolio-panel git-panel">

                        <div className="portfolio-card git-card">

                            <div className="card-top">

                                <h3 className="card-title"> Github Username: </h3>

                                    <p>swedishgoodbye</p>

                                <h3 className="card-link">URL:</h3>

                                    <a href="https://github.com/swedishgoodbye"><p>https://github.com/swedishgoodbye</p></a>

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
