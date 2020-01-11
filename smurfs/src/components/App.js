import React, { useState, useEffect } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

const App = ({ getSmurfs, error, isFetching, smurfs }) => {
  useEffect( () => {
    console.log('here!');
    getSmurfs();
  }, [getSmurfs])

  return (
    <div className='App'>
      <h1>SMURFS! 2.0 W/ Redux</h1>
      {isFetching && <p>Loading...</p>}
      {error !== '' && <p>{`ERROR: ${error}`}</p>}
      {smurfs.map(smurf => 
      <div>
        <h3>name: {smurf.name} </h3>
        <p>height: {smurf.height}</p>
        <p>age: {smurf.age}</p>
      </div>)}
      <button onClick={getSmurfs}>Update Smurfs</button>

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