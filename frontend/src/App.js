import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {ScrollableAnchor} from 'react-scrollable-anchor';
import { connect } from 'react-redux';


import Nav from './navigation/';
import { Front, About, Portfolio, Music, Contact } from './components/'
import scrollToComponent from 'react-scroll-to-component';
import { getProjects } from './actions';

import './App.css';



class App extends Component {

  constructor(){
    super();
    this.state = {

    };
  }

  componentDidMount(){
    scrollToComponent(this.Front, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
  }

  render() {
    console.log('app state', this.state)
    return (
      <Router>
      <div className="App">
        {/* <Nav /> */}

        <div className='main'>
        <Route href="#start" ref={(section) => { this.Front = section; }} render={() => <Front />} />
        <Route href="#portfolio" ref={(section) => { this.Portfolio = section; }} render={props => <Portfolio {...props} />} />
        <Route href="#about" ref={(section) => { this.About = section; }} render={() => <About />} />
        {/* <Route href="#music" ref={(section) => {this.Music = section;}} render={() => <Music />} /> */}
        {/* <Route href="#contact" ref={(section) => {this.Contact = section;}} render={() => <Contact />} />  */}
         {/* test */}
         {/* <br />
         <br />
         <br />
         <br /> */}
        {/* <Front /> */}
        </div>
        <div className='temp-nav'>
          <button onClick={() => scrollToComponent(this.Front, { offset: 0, align: 'top', duration: 800})} className='nav-button'>Start</button>
          <button onClick={() => scrollToComponent(this.Portfolio, { offset: 0, align: 'top', duration: 800})} className='nav-button'>Portfolio</button>
          <button onClick={() => scrollToComponent(this.About, { offset: 0, align: 'top', duration: 800})} className='nav-button' >About</button>
          {/* <button onClick={() => scrollToComponent(this.Music, { offset: 0, align: 'top', duration: 800})} className='nav-button'>Music</button> */}
          {/* <button onClick={() => scrollToComponent(this.Contact, { offset: 0, align: 'top', duration: 800})} className='nav-button'>Contact</button> */}
        </div>
      </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    // projects: state.projects,
  }
}


export default connect(
  mapStateToProps,
  { }
)(App);

// export default App;