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
    // let projects = this.state.projects;



    for(let i = 0; i < this.state.projects.length; i++){
      console.log(i, this.state.projects[i].title)
      if(e.target.alt == this.state.projects[i].title){
        this.setState({
          selected: this.state.projects[i],
          modalIsOpen: true,
        })
      }
    }
    console.log(this.state)

      // this.setState({
      //       modalIsOpen: true,
      //       });   
    
    // console.log('targ', this.state.projects[0].title);
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
    };
  };

  clickLeftHandler = () => {
    if (this.state.projectIndex >= 0) {
      return --this.state.projectIndex;
    };
  };

  // imgSelectHandler = e => {
  //   this.setState({ [this.state.selected]: e.target.value })
  // }


  render() {

    let projects = this.props.projects;
    let projectIndex = this.state.projectIndex;
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

                
                {/* <Link
                  to={{
                  pathname: `/projects/${project.id}`,
                  state: {
                      project: project
                    }
                  }}
                > */}
      
                  <img
                    className="project-img"
                    src={project.image}
                    onClick={this.openModal}
                    alt={project.title}
                    obj={project.title}
                  />
                  {/* </Link> */}


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

                        <p className='project-description'>{selected.description}</p>


                      
                    </div>
                  
                  </Modal>

                </div>

                );

              })}

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
