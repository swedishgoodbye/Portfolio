import React, { Component } from 'react';


import { getProjects } from '../../actions';
import { connect } from 'react-redux';
import { Modal } from 'reactstrap';

import './portfolio.css';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '90%',
      height                : '90%'
    }
  };
  


class Portfolio extends Component{

    constructor(props){
        super(props);
        this.state = {
            // projects: []
            modal: false
        };
        this.props.getProjects();
        this.toggle = this.toggle.bind(this);
        // this.state={
        //     project_name: "test",
        //     project_thumb: URL,
        // }
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
            <div onClick={this.openModal} className="project-card-outer">
            <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                // className = 'portfolio-modal'
                contentLabel="Example Modal"
            >

                      <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                        <button onClick={this.closeModal}>close</button>
                         <div>I am a modal</div>
            </Modal>

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
