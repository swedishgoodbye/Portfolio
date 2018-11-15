import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { getProjects } from '../../actions';
import './portfolio.css';


class Portfolio extends Component{

    constructor(props){
        super(props);
        this.props.getProjects();
        this.state = {
            toggle: false,
            testArr: this.props.projects
        };

    }

    clickRightHandler = () => {
        // this.setState({toggle: !this.state.toggle});
        console.log('right', this);
    }
    clickLeftHandler = () => {
        // this.setState({toggle: !this.state.toggle});
        console.log('left', this);
    }
    clickHandler = () => {
        // this.setState({toggle: !this.state.toggle});
        console.log('click', this);
    }




    render(){

        console.log(this.props.projects);

        return(
            <div className="portfolio-page">     


                <div className="portfolio-display">

                    <Link className='page-exit' to={{pathname: `/`}}>
                        {/* <img src={require('../../media/x.png')}/> */}
                        X
                    </Link> 
                <div className="portfolio-display-inner">
                    <div onClick={this.clickLeftHandler} className="portfolio-display-arrow-left">
                    </div>
                    <div onClick={this.clickRightHandler} className="portfolio-display-arrow-right">
                    </div>
                </div>
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
