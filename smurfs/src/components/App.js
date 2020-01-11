import React, { useState, useEffect } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import FormikFormComponent from './Form';

const App = ({ getSmurfs, error, isFetching, smurfs }) => {
  useEffect( () => {
    console.log('here!');
    getSmurfs();
  }, [getSmurfs])

  return (
    <div className='App'>
      <h1>SMURFS! 2.0 W/ Redux</h1>
      {smurfs.map(smurf => 
      <div>
        <h3>name: {smurf.name} </h3>
        <p>height: {smurf.height}</p>
        <p>age: {smurf.age}</p>
      </div>)}
      <button onClick={getSmurfs}>Update Smurfs</button>
      <FormikFormComponent />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getSmurfs })(App);