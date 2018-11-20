import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';

import {getProjects} from '../../actions';
import './portfolio.css';

class Portfolio extends Component {
  constructor (props) {
    super (props);
    this.props.getProjects ();
    this.state = {
      toggle: false,
      projects: this.props.projects,
      projectIndex: 0,
    //   currentProject: this.props.projects[this.projectIndex],
      started: false,
    };

    // this.clickRightHandler = this.clickRightHandler.bind (this);
  }

  projectSelector = () => {
    let projects = this.props.projects;
    // console.log ('fp', this.state.firstProject++);
    

    let i = 0;

    // let selected;

    if (this.state.started == false) {
     return this.setState ({
        started: true,
        // currentProject: this.props.projects[this.state.projectIndex],
      });
    //   console.log('x', this.state.currentProject);
    }

    // if(this.state.selector = 1){
    //     for(i; i < this.props.projects[i].length + 1; i++ ){
    //         if(projects[i].length + 1 < projects[projects.length - 1]){
    //             console.log('maxed');
    //         }

    //         else{
    //             return ++projects[i]
    //         }
        
    //     }

    // }


    

    // return this.props.projects
    // console.log ('selected', this.state.started);

    // for (let i in projects) {
    //   while ((this.state.selector = 1)) {
    //     ++i;
    //     this.setState = {
    //       selector: 0,
    //     };
    //     // this.setState.selector = 0;
    //     return i;
    //   }

    //   while ((this.state.selector = -1)) {
    //     --i;

    //     if (i < 0) {
    //       console.log ('You are at the first project');

    //       this.setState ({
    //         selector: 0,
    //       });
    //       return (i = 0);
    //     } else {
    //       return i;
    //     }

    //     this.setState ({
    //       selector: 0,
    //     });
    //   }
    // }
  };

  clickRightHandler = () => {
    // this.setState({toggle: !this.state.toggle});
    console.log ('right', this);
    // console.log ('fp', this.props.projects[0 + 1]);
    // this.setState = {
    //   selector: 1,
    // };

    // this.projectSelector();

    console.log ('right', this.props.projects[this.state.projectIndex]);
    console.log('r1', this.props.projects)
    console.log('r2', this.state.projectIndex)

    if(this.state.projectIndex == this.props.projects.length - 1){
        return console.log('last item');
    }
    else{

        return ++this.state.projectIndex;
    }
    // console.log (this.state.selector);
  };
  clickLeftHandler = () => {
    // this.setState({toggle: !this.state.toggle});
    // this.projectSelector();
    console.log ('left', this.props.projects[this.state.projectIndex]);
    console.log('l1', this.props.projects)
    console.log('l2', this.state.projectIndex)

    if(this.state.projectIndex == 0){
        return console.log('first item')
    }

    else{
        return --this.state.projectIndex;
    }
  };
  clickHandler = () => {
    // this.setState({toggle: !this.state.toggle});
    console.log ('click', this);
  };

  componentDidMount () {
    this.setState = {
      current: this.props.projects[0],
    };

    console.log ('selectedF', this.state.started);
  }

  render () {
    this.projectSelector();

    console.log (this.props.projects);
    console.log ('curr', this.state.projectIndex);

    return (
      <div className="portfolio-page">

        <div className="portfolio-display">

          <Link className="page-exit" to={{pathname: `/`}}>
            {/* <img src={require('../../media/x.png')}/> */}
            X
          </Link>
          <div className="portfolio-display-inner">
            <div
              onClick={this.clickLeftHandler}
              className="portfolio-display-arrow-left"
            />

            <div className="portfolio-projects">

              <a
                href="http://www.lambdarandomizer.com"
                className="project-link"
              >
                <img
                  className="project-img"
                  src={require ('../../media/randproj.PNG')}
                />
              </a>
              <div className="project-name">
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

export default connect (mapStateToProps, {getProjects}) (Portfolio);
