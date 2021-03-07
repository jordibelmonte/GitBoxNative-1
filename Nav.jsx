import React from 'react';
import { Text } from 'react-native';
import Home from './views/Home';
import Registro from './views/Registro'
import IniciarSesion from './views/IniciarSesion'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Paquete from './Paquete'

const Stack = createStackNavigator()
const Nav =()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component ={Home} />
                <Stack.Screen name='registro' component ={Registro} />
                <Stack.Screen name='iniciarSesion' component ={IniciarSesion} />
                <Stack.Screen name="SignIn" component={Paquete}/>
            </Stack.Navigator>            
        </NavigationContainer>
    )

}
export default Nav