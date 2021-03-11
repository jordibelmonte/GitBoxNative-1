import React from 'react';
import { Text } from 'react-native';
import Home from './views/Home';
import Registro from './views/Registro'
import IniciarSesion from './views/IniciarSesion'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Paquete from './Paquete'
import Paquetes from './views/Paquetes'
import Carrito from './views/Carrito'
import AsyncStorage from '@react-native-async-storage/async-storage';
import carritoActions from './redux/actions/carritoActions';
import { connect } from 'react-redux';
import userActions from './redux/actions/userActions';

const Stack = createStackNavigator()
const Nav =({carritoDelLS,loggedUser,logFromLS})=>{
    carritoDelLS()
    {!loggedUser && logFromLS()}
    console.log(loggedUser)
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle:{
                    height:80,
                    backgroundColor:'red'
                }
            }}>
                <Stack.Screen name='Home' component ={Home} />
                <Stack.Screen name='registro' component ={Registro} />
                <Stack.Screen name='iniciarSesion' component ={IniciarSesion} />
                <Stack.Screen name='paquete' component={Paquete}/>
                <Stack.Screen name='paquetes' component={Paquetes} />
                <Stack.Screen name='carrito' component={Carrito} />
            </Stack.Navigator>            
        </NavigationContainer>
    )

}
const mapStateToProps=(state)=>{
    return {
      loggedUser:state.userReducer.loggedUser
    }
  }
  const mapDispatchToProps={
    logFromLS:userActions.logFromLS,
    carritoDelLS:carritoActions.carritoDelLS
  }
export default connect(mapStateToProps,mapDispatchToProps)(Nav)