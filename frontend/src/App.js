import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';


import { Front, About, Portfolio, Music, Contact } from './components/'

import './App.css';



class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">

          <Route exact path={"/"} render={() => <Front />} />
          <Route exact path={"/about"} render={() => <About />} /> 
          <Route exact path={"/projects"} render={props => <Portfolio {...props} />}/>
          <Route exact path={"/contact"} render={() => <Contact />} />

        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects,
  }
}


export default connect(
  mapStateToProps,
  { }
)(App);