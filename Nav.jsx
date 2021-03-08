import React from 'react';
import { Text } from 'react-native';
import Home from './views/Home';
import Registro from './views/Registro'
import IniciarSesion from './views/IniciarSesion'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Paquete from './Paquete'
import Paquetes from './views/Paquetes'

const Stack = createStackNavigator()
const Nav =()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component ={Home} />
                <Stack.Screen name='registro' component ={Registro} />
                <Stack.Screen name='iniciarSesion' component ={IniciarSesion} />
<<<<<<< HEAD
                <Stack.Screen name='SignIn' component={Paquete}/>
=======
                <Stack.Screen name="SignIn" component={Paquete}/>
                <Stack.Screen name='paquetes' component={Paquetes} />
>>>>>>> 7afd418e0e1e5501fc32c0b6c2b9f89649d57b10
            </Stack.Navigator>            
        </NavigationContainer>
    )

}
export default Nav