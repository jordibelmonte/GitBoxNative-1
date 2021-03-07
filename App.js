import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Nav from './Nav'
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import mainReducer from "./redux/reducers/mainReducer"

const App = () => {
  const myStore = createStore(mainReducer, applyMiddleware(thunk))
  return (
    <Provider store={myStore}>
      <Nav />
    </Provider>
  )
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
