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
      transform             : 'translate(-50%, -50%)',
      width                 : '50%'
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

    openModal = e => {
        // console.log(e.target.value)
        // console.log(this.state)
        // if(e.target.value == this.props.projects._id){
        // this.setState({modalIsOpen: true});

        for(let i = 0; i < this.props.projects.length; i++){
            if(e.target.value == this.props.projects[i]._id){
                this.setState({modalIsOpen: true})
            }
            else{
                this.setState({modalIsOpen: false})
            }
        }
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
                {/* <button onClick={this.openModal}>Open Modal</button> */}



                    {this.props.projects.map(projItem => { 
                     return ( 
                         
            
                         <div className="project-card"> 
                             <div className="project-name"> 
                             <div className="project-thumb"> 
                                 {this.state.project_thumb} 
                                 <img src={projItem.image}/> 
                                 {/* <img src='https://photos.google.com/u/1/photo/AF1QipOWPVvBb0b7gIbuD4_xhgvBQ63rCWt4OZ1ibQuU'/> */}
                              </div> 
                             <button value = {projItem._id} onClick={this.openModal}>{projItem.title}</button> 
                                     <Modal
                                         isOpen={this.state.modalIsOpen}
                                         onAfterOpen={this.afterOpenModal}
                                         onRequestClose={this.closeModal}
                                         style={customStyles}
                                         contentLabel="Example Modal"
                                         >
                                         <div className="modal-top">
                                         <img className='project-modal' src={projItem.image}/> 
                                         <h2 ref={subtitle => this.subtitle = subtitle}>
                                            {projItem.title} <br/> {projItem.link}
                                        </h2>
                                         
                                         </div>
                                         <div className="modal-bottom">
                                         <div>{projItem.description}</div>
                                         <button onClick={this.closeModal}>close</button>
                                         </div>
                                     </Modal>                                     
                             </div> 
                         </div>      
                     );})}
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
