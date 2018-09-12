import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {ScrollableAnchor} from 'react-scrollable-anchor';

import Nav from './navigation/';
import { Front, About, Portfolio, Music, Contact } from './components/'
import scrollToComponent from 'react-scroll-to-component';

import './App.css';



class App extends Component {

  componentDidMount(){
    scrollToComponent(this.Front, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
  }

  render() {
    return (
      <Router>
      <div className="App">
        {/* <Nav /> */}
        <div className='temp-nav'>
          <button onClick={() => scrollToComponent(this.Front, { offset: 0, align: 'top', duration: 800})} className='nav-button'>Start</button>
          <button onClick={() => scrollToComponent(this.About, { offset: 0, align: 'top', duration: 800})} className='nav-button' >About</button>
          <button onClick={() => scrollToComponent(this.Portfolio, { offset: 0, align: 'top', duration: 800})} className='nav-button'>Portfolio</button>
          <button onClick={() => scrollToComponent(this.Music, { offset: 0, align: 'top', duration: 800})} className='nav-button'>Music</button>
          <button onClick={() => scrollToComponent(this.Contact, { offset: 0, align: 'top', duration: 800})} className='nav-button'>Contact</button>
        </div>
        <div className='main'>
        <Route href="#start" ref={(section) => { this.Front = section; }} render={() => <Front />} />
        <Route href="#about" ref={(section) => { this.About = section; }} render={() => <About />} />
        <Route href="#portfolio" ref={(section) => { this.Portfolio = section; }} render={() => <Portfolio />} />
        <Route href="#music" ref={(section) => {this.Music = section;}} render={() => <Music />} />
        <Route href="#contact" ref={(section) => {this.Contact = section;}} render={() => <Contact />} /> 
         {/* test */}
         {/* <br />
         <br />
         <br />
         <br /> */}
        {/* <Front /> */}
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
