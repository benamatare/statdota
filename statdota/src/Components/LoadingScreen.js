import React, { Component } from 'react';
import { GridLoader } from 'react-spinners';
import './LoadingScreen.css';

// import { Spinner } from 'react-spinkit';

var Spinner = require('react-spinkit');

const LoadingScreen = () => {
  return (
    <div className="loadingscreen-container">
        {/* <GridLoader
          color="#FA0013"
        /> */}
        <Spinner
          name="cube-grid"
          color="#212121"
        />
    </div>
  )}

export default LoadingScreen
