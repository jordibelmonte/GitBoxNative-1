import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Paquete from './Paquete'


const Stack = createStackNavigator();

const Navigator =() => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTitleStyle:{color:'white', fontWeight:'bold'},
        headerStyle:{
          backgroundColor:'#FF2A2A',}}}>     
        <Stack.Screen name="SignIn" component={Paquete}/>
      </Stack.Navigator>        
    </NavigationContainer>
  )
}


export default Navigator