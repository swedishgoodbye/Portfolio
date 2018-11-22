import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { getProjects } from '../../actions';
import './portfolio.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      projects: this.props.projects,
      projectIndex: 0,
      url: '',
      //   currentProject: this.props.projects[this.projectIndex],
      started: false,
      // currentProject:this.props.projects[this.state.projectIndex],
    };
    
    console.log('const', this.props)
    
    // this.clickRightHandler = this.clickRightHandler.bind (this);
  }
  
  componentDidMount() {
    this.props.getProjects();
          
          this.setState = {
            projectIndex: 0,
            projects: this.props.projects,
          };
      
          console.log('selectedF', this.state.started);
        }

  initialSelector = () => {
    if (this.state.started == false) {
      console.log('init');
      return this.setState({
        started: true,
        // currentProject:this.props.projects[0],
        url: this.props.projects[0],
      });
    }
  };

  clickRightHandler = () => {
    if (this.state.projectIndex == this.props.projects.length - 1) {
      return console.log('last item');
    } else {
      return ++this.state.projectIndex;
    }
  };
  clickLeftHandler = () => {
    if (this.state.projectIndex == 0) {
      return console.log('first item');
    } else {
      return --this.state.projectIndex;
    }
  };
  clickHandler = () => {
    console.log('click', this);
    console.log('lick', this.state.projectIndex);
    console.log('cick', this.props.projects[this.state.projectIndex].link);
  };


  render() {
    // this.initialSelector();

    let projects = this.props.projects;
    let projectIndex = this.state.projectIndex;

    return (
      <div className="portfolio-page">

        <div className="portfolio-display">

          <Link className="page-exit" to={{ pathname: `/` }}>
            {/* <img src={require('../../media/x.png')}/> */}
            X
          </Link>
          <div className="portfolio-display-inner">
            <div
              onClick={this.clickLeftHandler}
              className="portfolio-display-arrow-left"
            />


            {/* {this.props.projects[0].map(project => {
            <div className="portfolio-projects">

              <a href={`./`} className="project-link">
                <img
                  className="project-img"
                  src={require('../../media/randproj.PNG')}
                />
              </a>
              <div onClick={this.clickHandler} className="project-name">
                Project Name: Lambda Randomizer
              </div>
              <div className="project-description">
                A really cool and in depth description for this project that's holding the place for the real cool and in depth description for this project.
              </div>
              <ul className="project-stack">
                <li className="stack-item">React</li>
              </ul>


            </div>
            })} */}
            <div className="portfolio-projects">
              <a
                href={`./`}
                className="project-link"
              >
                <img
                  className="project-img"
                  src={require ('../../media/randproj.PNG')}
                />
              </a>
              <div onClick={this.clickHandler} className="project-name">
                Project Name: Lambda Randomizer
              </div>
              <div className="project-description">
                A really cool and in depth description for this project that's holding the place for the real cool and in depth description for this project.
              </div>
              <ul className="project-stack">
                <li className="stack-item">React</li>
              </ul> 

            </div>
            <div
              onClick={this.clickRightHandler}
              className="portfolio-display-arrow-right"
            />
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps, { getProjects })(Portfolio);
