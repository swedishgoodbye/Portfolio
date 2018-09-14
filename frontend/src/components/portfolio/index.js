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

        let req = require.context('../../media/', false, /.*\.jpg$/)
        req.keys().forEach(function(key){
            req(key);
          });
          console.log('mount', this);
    }


    render(){
        console.log('port state', this)
        // const data = this.props.data;
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
                        {/* <img src='https://photos.google.com/u/1/photo/AF1QipOWPVvBb0b7gIbuD4_xhgvBQ63rCWt4OZ1ibQuU'/> */}
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
