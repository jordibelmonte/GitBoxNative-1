import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './views/Home'
import Nav from './Nav';
import {applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import userReducer from './redux/reducers/userReducers'
import thunk from 'redux-thunk'

const miStore = createStore(userReducer,applyMiddleware(thunk))

const App =()=> {
  return (
    <Provider store={miStore}>
      <Nav />
    </Provider> 
  );
}
export default App