import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Alert, ToastAndroid, Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import userActions from '../redux/actions/userActions';
import Header from './Header';


const Registro = (props) => {
  // console.log(props)
  const [error, setError] = useState({})
  const [nuevoUsario, setNuevoUsario] = useState({
    nombre: '',
    apellido: '',
    cuenta: '',
    password: '',
    googleUser: false,
  })
  const leerInput = (name, value) => {
    setNuevoUsario({ ...nuevoUsario, [name]: value })
  }

  const validar = async () => {
    setError([])

    if (nuevoUsario.nombre === '' || nuevoUsario.apellido === '' || nuevoUsario.cuenta === '' || nuevoUsario.password === '') {
      ToastAndroid.show('Todos los campos son requeridos',
        ToastAndroid.TOP, 25,
        50)
      return false
    }

    const res = await props.crearCuenta(nuevoUsario)

    console.log("MENSAJE RANDOM ANTES DEL IF")
    console.log(res)

    if (res && !res.success) {
      setError(res.error)
      console.log("MENSAJE RANDOM ERROR")
      console.log(res)
      //  console.log(res.error)
      // ToastAndroid.show('Usuario y/o contraseña incorrecto',
      // ToastAndroid.TOP,25,
      // 50)
    }
    else {
      console.log("MENSAJE RANDOM")
      console.log(res)
      props.navigation.navigate('Home')
      //     ToastAndroid.show('Bienvenido',
      //     ToastAndroid.TOP,25,
      // 50)
    }

  }

  return (
    <ImageBackground source={{ uri: 'https://fotos.subefotos.com/e719e5d0fda1b617dd60b277756e64c7o.jpg' }} resizeMode='cover' style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
        <Header/>
      <View style={styles.vista}>
        <Text style={{fontSize: 30, fontWeight:'bold', marginBottom:25}}>Regístrate</Text>
        <TextInput
          placeholder='Nombre'
          onChangeText={(value) => leerInput('nombre', value)}
          style={styles.inputs}
          placeholderTextColor='white'
        />
        <TextInput
          placeholder='Apellido'
          onChangeText={(value) => leerInput('apellido', value)}
          style={styles.inputs}
          placeholderTextColor='white'
          
        />
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
          <Text >Crear cuenta</Text>
        </View>
      </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  vista: {
    flex:.9,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputs: {
    backgroundColor: '#fafafa',
    color: 'white',
    fontSize:50,
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
    width: 150,
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
  crearCuenta: userActions.crearCuenta
}

export default connect(mapStateToProps, mapDipachToProps)(Registro)