import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { getProjects } from '../../actions';
import './portfolio.css';


class Portfolio extends Component{

    constructor(props){
        super(props);
        this.props.getProjects();
        this.state = {
            toggle: false,
            testArr: this.props.projects,
            current: [],
            selector: 0,
            
        };

    }

    projectSelector = () =>{
        let projects = this.props.projects

    //     if(this.state.toggle == false){
    //         this.setState({
    //             current: projects[0],
    //             toggle: true,
    //         });
    //     }

    //     for (let i in projects){

    //     while(this.state.selector = 1){
    //         projects[i] + 1;
    //         this.setState.selector = 0;
    //     }
    // }

    }

    clickRightHandler = () => {
        // this.setState({toggle: !this.state.toggle});
        console.log('right', this);
        this.setState({
            selector: 1,
        })
    }
    clickLeftHandler = () => {
        // this.setState({toggle: !this.state.toggle});
        console.log('left', this);
    }
    clickHandler = () => {
        // this.setState({toggle: !this.state.toggle});
        console.log('click', this);
    }

    componentDidMount(){
        this.setState = {
            current: this.props.projects[0]
        }

        
    }



    render(){

        console.log(this.props.projects);
        console.log('curr', this.state)

        return(
            <div className="portfolio-page">     


                <div className="portfolio-display">

                    <Link className='page-exit' to={{pathname: `/`}}>
                        {/* <img src={require('../../media/x.png')}/> */}
                        X
                    </Link> 
                <div className="portfolio-display-inner">
                    <div onClick={this.clickLeftHandler} className="portfolio-display-arrow-left">
                    </div>

                    <div className="portfolio-projects">

                        <a href="http://www.lambdarandomizer.com" className="project-link"><img className="project-img" src={require('../../media/randproj.PNG')}/></a>
                        <div className="project-name">Project Name: Lambda Randomizer</div>
                        <div className="project-description">A really cool and in depth description for this project that's holding the place for the real cool and in depth description for this project.</div>
                        <ul className="project-stack">
                            <li className="stack-item">React</li>
                        </ul>


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
