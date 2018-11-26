import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import Modal from 'react-modal';

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
      modalIsOpen: false,
      started: false,
    };
  };

  openModal = () => {
    this.setState({ modalIsOpen: true});
  };


  closeModal = () => {
    this.setState({ modalIsOpen: false});
  };
  
  componentDidMount() {
    this.props.getProjects();
  };

  clickRightHandler = () => {
    if (this.state.projectIndex <= this.props.projects.length - 1) {
      return ++this.state.projectIndex;
    };
  };

  clickLeftHandler = () => {
    if (this.state.projectIndex >= 0) {
      return --this.state.projectIndex;
    };
  };


  render() {

    return (

      <div className="portfolio-page">

        <div className="portfolio-display">

          <Link className="portfolio-page-exit" to={{ pathname: `/` }}>
            X
          </Link>

          <div className="portfolio-display-inner">

            <div className="portfolio-display-arrow-left" 
            onClick={this.clickLeftHandler}
            />

            <div className="portfolio-projects">

              {this.props.projects.map(project => {

                return(

                <div className="project-thumbnail">

                  <img
                    className="project-img"
                    src={project.image}
                    onClick={this.openModal}
                  />

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
