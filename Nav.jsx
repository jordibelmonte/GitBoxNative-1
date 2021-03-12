import React from 'react';
import {StatusBar} from 'react-native';
import Home from './views/Home';
import Registro from './views/Registro'
import IniciarSesion from './views/IniciarSesion'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Paquete from './Paquete'
import Paquetes from './views/Paquetes'
import Carrito from './views/Carrito'
import carritoActions from './redux/actions/carritoActions';
import { connect } from 'react-redux';
import userActions from './redux/actions/userActions';
import Envio from './views/Envio';
import Tarjeta from './views/Tarjeta';

const Stack = createStackNavigator()
const Nav = ({ navigation, carritoDelLS, loggedUser, logFromLS }) => {
  carritoDelLS()
  { !loggedUser && logFromLS() }
  return (
    <NavigationContainer>
      <StatusBar hidden={false}  />
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='registro' component={Registro} />
        <Stack.Screen name='iniciarSesion' component={IniciarSesion} />
        <Stack.Screen name='paquete' component={Paquete} />
        <Stack.Screen name='paquetes' component={Paquetes} />
        <Stack.Screen name='carrito' component={Carrito} />
        <Stack.Screen name='envio' component={Envio} />
        <Stack.Screen name='tarjeta' component={Tarjeta} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}
const mapStateToProps = (state) => {
  return {
    loggedUser: state.userReducer.loggedUser
  }
}
const mapDispatchToProps = {
  logFromLS: userActions.logFromLS,
  carritoDelLS: carritoActions.carritoDelLS
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)