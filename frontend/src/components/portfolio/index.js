import React, { Component } from 'react';

import { connect } from 'react-redux';
import Modal from 'react-modal';

import { getProjects } from '../../actions';
import './portfolio.css';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

class Portfolio extends Component{

    constructor(props){
        super(props);
        this.state = {
            modal: false
        };
        this.props.getProjects();
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        // this.state={
        //     project_name: "test",
        //     project_thumb: URL,
        // }
    }

    openModal() {
        this.setState({modalIsOpen: true});
      }

      afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
      }
    
      closeModal() {
        this.setState({modalIsOpen: false});
      }
    

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

    render(){
        console.log('port state', this)
        // const data = this.props.data;
        return(
            <div className="portfolio-page">     
                <div className="project-card-outer">
                {/* <button onClick={this.openModal}>Open Modal</button> */}
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>



                    {this.props.projects.map(projItem => { 
                        return ( 
                            <div className="project-card"> 
                                <div className="project-name"> 
                                <div className="project-thumb"> 
                                    {this.state.project_thumb} 
                                    <img src={projItem.image}/> 
                                    {/* <img src='https://photos.google.com/u/1/photo/AF1QipOWPVvBb0b7gIbuD4_xhgvBQ63rCWt4OZ1ibQuU'/> */}
                                 </div> 
                                <button onClick={this.openModal}>{projItem.title}</button>                                      
                                </div> 
                             </div>); 
                     })}
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
