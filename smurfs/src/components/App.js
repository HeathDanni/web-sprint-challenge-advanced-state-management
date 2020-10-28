import React, { Component } from "react";
import "./App.css";
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm'
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <SmurfForm />
        <Smurfs />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps)(App);
