import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Alert, ToastAndroid, Image, ImageBackground, StyleSheet, Text, TextInput, View, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import userActions from '../redux/actions/userActions';
import Header from './Header';

// import {
//     GoogleSignin,
//     GoogleSigninButton,
//     statusCodes,
//   } from '@react-native-google-signin/google-signin';

const IniciarSesion = (props) => {
  const [error, setError] = useState({})
  const [nuevoUsario, setNuevoUsario] = useState({
    cuenta: '',
    password: '',
    name: '',
    photoUrl: ''
  })
  const leerInput = (name, value) => {
    setNuevoUsario({ ...nuevoUsario, [name]: value })
  }
  const validar = async () => {
    if (nuevoUsario.cuenta === '' || nuevoUsario.password === '') {
      ToastAndroid.show('Todos los campos son requeridos',
        ToastAndroid.TOP, 25,
        50)
      return false
    }
    const res = await props.iniciarSesion(nuevoUsario)
    if (res && !res.success) {
      ToastAndroid.show('Usuario y/o contraseña incorrecto',
        ToastAndroid.TOP, 25,
        50)
    } else {
      props.navigation.navigate('Home')
      ToastAndroid.show('Bienvenido',
        ToastAndroid.TOP, 25,
        50)
    }
  }

  return (
    <ImageBackground source={{ uri: 'https://fotos.subefotos.com/e719e5d0fda1b617dd60b277756e64c7o.jpg' }} resizeMode='cover' style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>

      <View style={{ alignItems: 'center', flex: .9 }}>
        <View style={{marginLeft:-32, marginBottom: 50}}>
          <Header />
        </View>
        <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 25 }}>Iniciar sesión</Text>
        <TextInput
          placeholder='Correo electrónico'
          onChangeText={(value) => leerInput('cuenta', value)}
          style={styles.inputs}
          placeholderTextColor='white'
        />
        <TextInput
          placeholder='Contraseña'
          secureTextEntry
          onChangeText={(value) => leerInput('password', value)}
          style={styles.inputs}
          placeholderTextColor='white'
        />
        <TouchableOpacity onPress={validar}>
          <View style={styles.boton} >
            <Text Text>Inciar sesion</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground >
  )

}



const styles = StyleSheet.create({
  inputs: {
    backgroundColor: '#fafafa',
    color: 'white',
    fontSize: 50,
    width: 280,
    marginBottom: '5%',
    padding: 10,
    borderRadius: 10,
    fontSize: 15,
    borderWidth: 2,
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    alignItems: 'center',
    marginTop: 10,
    borderColor: 'white',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  boton: {
    backgroundColor: 'white',
    borderWidth: 2,
    width: 280,
    paddingVertical: '7%',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  }

})
const mapStateToProps = state => {
  return {
    loggedUser: state.loggedUser
  }
}
const mapDipachToProps = {
  iniciarSesion: userActions.iniciarSesion
}


export default connect(mapStateToProps, mapDipachToProps)(IniciarSesion)