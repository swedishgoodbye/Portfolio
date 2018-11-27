import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import Modal from 'react-modal';

import { getProjects } from '../../actions';
import './portfolio.css';

// Modal.setAppElement('#yourAppElement')

class Portfolio extends Component {
  constructor(props) {
    super(props);
    // this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
    this.state = {
      toggle: false,
      projects: this.props.projects,
      projectIndex: 0,
      url: '',
      modalIsOpen: false,
      selected: {},
    };


  }

  openModal = () => {
    this.setState({ modalIsOpen: true});
    console.log(this.state.modalIsOpen);
  }


  closeModal = () => {
    this.setState({ modalIsOpen: false});
    console.log(this.state.modalIsOpen);
  }
  
  componentDidMount() {
    this.props.getProjects();

          // this.setState = {
          //   projectIndex: 0,
          //   projects: this.props.projects,
          // };
        }

  initialSelector = () => {
    if(this.props.projects.length > 0){
      console.log('innernit', this.props.projects);
      // this.setState = {
      //     projects: this.props.projects,
        
      // }
    }
  };

  clickRightHandler = () => {
    if (this.state.projectIndex <= this.props.projects.length - 1) {
      return ++this.state.projectIndex;
    } else {
      return console.log('last item');
    }
  };

  clickLeftHandler = () => {
    if (this.state.projectIndex >= 0) {
      return --this.state.projectIndex;
    } else {
      return console.log('first item');
    }
  };

  imgSelectHandler = e => {
    this.setState({ [this.state.selected]: e.target.value })
  }

  render() {
    this.initialSelector();

    let projects = this.props.projects;
    let projectIndex = this.state.projectIndex;

    return (
      <div className="portfolio-page">

        <div className="portfolio-display">

          <Link className="portfolio-page-exit" to={{ pathname: `/` }}>
            {/* <img src={require('../../media/x.png')}/> */}
            X
          </Link>
          <div className="portfolio-display-inner">
            <div
              onClick={this.clickLeftHandler}
              className="portfolio-display-arrow-left"
            />

            <div className="portfolio-projects">

<<<<<<< Updated upstream
            {this.props.projects.map(project => {
              return(
              <div className="project-thumbnail">
              {/* <a href={`./`} className="project-link"> */}
                <img
                  className="project-img"
                  src={project.image}
                  onClick={this.openModal}
                />
                <Modal
                  isOpen={this.state.modalIsOpen}
                  // onAfterOpen={this.afterOpenModal}
                  // onRequestClose={this.closeModal}
                  className={'project-modal'}
                  overlayClassName={'project-overlay'}
                  >

                  <div className='modal-exit' onClick={this.closeModal}>
                    X
                  </div> 
                
                </Modal>
              {/* </a> */}
              {/* <div onClick={this.clickHandler} className="project-name">
                {project.title}
              </div>
              <div className="project-description">
                {project.description}
              </div>
              <ul className="project-stack">
                <li className="stack-item">React</li>
              </ul> */}

              </div>
            )})}
=======
              {this.props.projects.map(project => {

                return(

                <div className="project-thumbnail">
                
                <Link
                  to={{
                  pathname: `/projects/${project.id}`,
                  state: {
                      project: project
                    }
                  }}
                >
                  <img
                    className="project-img"
                    src={project.image}
                    onClick={this.openModal}
                    alt={project.title}
                  />
                  </Link>

                  <Modal
                    isOpen={this.state.modalIsOpen}
                    className={'project-modal'}
                    overlayClassName={'project-overlay'}
                    >

                    <div className='modal-exit' onClick={this.closeModal}>
                      X
                    </div> 
                  
                  </Modal>

                </div>

                );

              })}
>>>>>>> Stashed changes

            </div>
            {/* <div className="portfolio-projects">
              <a
                href={this.props.projects[projectIndex].link}
                className="project-link"
              >
                <img
                  className="project-img"
                  src={require ('../../media/randproj.PNG')}
                />
              </a>
              <div onClick={this.clickHandler} className="project-name"> */}
                {/* Project Name: Lambda Randomizer */}
                {/* {this.props.projects[this.state.projectIndex].title}
              </div>
              <div className="project-description">
                A really cool and in depth description for this project that's holding the place for the real cool and in depth description for this project.
              </div>
              <ul className="project-stack">
                <li className="stack-item">React</li>
              </ul> 

            </div> */}
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
