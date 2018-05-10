import React, { Component } from 'react';
import { GridLoader } from 'react-spinners';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loadingscreen-container"
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'red'
      }}>
        <GridLoader />
    </div>
  )}

export default LoadingScreen
