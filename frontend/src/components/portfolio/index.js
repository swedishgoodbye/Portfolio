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
      selected: {},
    };
  };

  openModal = e => {



    for(let i = 0; i < this.state.projects.length; i++){
      if(e.target.alt == this.state.projects[i].title){
        this.setState({
          selected: this.state.projects[i],
          modalIsOpen: true,
        })
      }
    }
  }



  closeModal = () => {
    this.setState({ modalIsOpen: false});
  };
  
  componentDidMount() {
    this.props.getProjects();
    this.setState ({
      projectIndex: 0,
      projects: this.props.projects,
    });        
  }

  render() {

    let selected = this.state.selected;

    return (

      <div className="portfolio-page">

        <div className="portfolio-display">

          <Link className="portfolio-page-exit" to={{ pathname: `/` }}>
            X
          </Link>

          <div className="portfolio-display-inner">

            {/* <div className="portfolio-display-arrow-left" 
            onClick={this.clickLeftHandler}
            /> */}


            <div className="portfolio-projects">

              {this.props.projects.map(project => {

                return(

                <div className="project-thumbnail">      

                  <img
                    className="project-img"
                    src={project.image}
                    onClick={this.openModal}
                    alt={project.title}
                    obj={project.title}
                  />

                    <Modal
                      isOpen={this.state.modalIsOpen}
                      className={'project-modal'}
                      overlayClassName={'project-overlay'}
                    >

                    <div className='modal-exit' onClick={this.closeModal}>
                      X
                    </div> 
                    <div className='modal-content'>
                    <a href={`http://www.${selected.link}`} className='project-link'>
                      <img src={selected.image} className='modal-img' alt={selected.title} />
                    </a>
                      <h1 className='project-name'>
                        {selected.title}
                      </h1>
                      <div className='modal-content'>

                        <a href={`http://www.${selected.link}`} className='project-link'>
                          <img src={selected.image} className='project-img' alt={selected.title} />
                        </a>
                        <h1 className='project-name'>
                          {selected.title}
                        </h1>

                        <p className='project-description'>{selected.description}</p>

                      </div>
                    </div>
                    </Modal>

                </div>

                );})}

            </div>

            {/* <div
              onClick={this.clickRightHandler}
              className="portfolio-display-arrow-right"
            /> */}

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
