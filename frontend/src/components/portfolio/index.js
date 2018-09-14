import React, { Component } from 'react';

import { getProjects } from '../../actions';
import { connect } from 'react-redux';

import './portfolio.css';


class Portfolio extends Component{

    constructor(props){
        super(props);
        this.state = {
            // projects: []
        };
        this.props.getProjects();
        // this.state={
        //     project_name: "test",
        //     project_thumb: URL,
        // }
    }

    componentDidMount(){
        // console.log(this.state);
    }


    render(){
        console.log('port state', this.props.projects)
        return(
            <div className="portfolio-page"> 
            {this.props.projects.map(projItem => {
                return (
                <div className="project-card">
                    <div className="project-name">
                        {projItem.title} 
                    </div>
                    <div className="project-thumb">
                        {/* {this.state.project_thumb} */}
                        <img src={projItem.image}/>
                    </div>
        
                </div>
            );
            })}
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
