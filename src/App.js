/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';
import {AppContainer} from './navigation/index';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component{
  componentDidMount(){
    SplashScreen.hide();
  }
  render(){
    return  <AppContainer />
            
    
  }
}