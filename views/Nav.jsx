import React from 'react';
import { Text } from 'react-native';
import Home from './Home';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()
const Nav =()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component ={Home} />
            </Stack.Navigator>            
        </NavigationContainer>
    )

}
export default Nav