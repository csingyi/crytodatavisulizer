/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// import fetch from 'better-fetch';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './src';

export default class CryptoVizDataApp extends Component {


  
  render() {
    return (
     <App />
    );
  }
}


AppRegistry.registerComponent('CryptoVizDataApp', () => CryptoVizDataApp);
