import React, { Component } from 'react';
import '../components/App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="Header">
            <h1>Save Amber</h1>
          </div>
        </div>
      </Router>
    );
  }

}


const mapStateToProps = state => {
  return {

  }
}


export default connect (mapStateToProps, {}) (App);
