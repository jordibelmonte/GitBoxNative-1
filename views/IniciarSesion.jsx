import React, { useEffect, useState } from 'react';
import {TouchableOpacity,Alert,ToastAndroid, Image, ImageBackground, StyleSheet, Text, TextInput,View } from 'react-native';
import { connect } from 'react-redux';
import userActions from '../redux/actions/userActions';
import * as Google from 'expo-google-app-auth'


const IniciarSesion =(props)=>{
    console.log(props)
    const [error, setError] = useState({})
    const [nuevoUsario, setNuevoUsario] = useState({
        cuenta:'',
        password:'',
        name:'',
        photoUrl:''
    })
    const leerInput = (name, value)=>{
        setNuevoUsario({...nuevoUsario, [name]:value})
    }
    const validar = async () =>{
        if(nuevoUsario.cuenta ==='' || nuevoUsario.password ===''){
            ToastAndroid.show('Todos los campos son requeridos',
            ToastAndroid.TOP,25,
            50)
            return false   
          }
        const res = await props.iniciarSesion(nuevoUsario)
        if(res && !res.success){
            ToastAndroid.show('Usuario y/o contraseña incorrecto',
            ToastAndroid.TOP,25,
            50)
            }else{
                props.navigation.navigate('Home')
                ToastAndroid.show('Bienvenido',
                ToastAndroid.TOP,25,
            50)
            }      
    }
    async function signInWithGoogleAsync() {
        try {
            const result = await Google.logInAsync({
              androidClientId: "799511075036-b8oechliernvv2t2gj2ng5qbbmjhn3vi.apps.googleusercontent.com",
              scopes: ['profile', 'email'],
            });
            if(result.type ==='success'){
                var name = result.user
                props.navigation.navigate('Home')
            }
            if (result.type === 'success') {
              return result.accessToken;
            } else {
              console.log('cancelled')
            }
          } catch (e) {
            console.log('error',e)
          }
        const googlee = await props.iniciarGoogle(name)

    }


    return(
        <ImageBackground source={{uri:'https://fotos.subefotos.com/e719e5d0fda1b617dd60b277756e64c7o.jpg'}} resizeMode='cover' style={{width:'100%', height:'100%', justifyContent:'center'}}>
            <View style={{paddingLeft:30}}>
                <TextInput
                    placeholder='cuenta'
                    onChangeText={(value) => leerInput('cuenta',value)}
                    style={styles.inputs}
                    />
                <TextInput
                    placeholder='Password'
                    secureTextEntry
                    onChangeText={(value) => leerInput('password',value)}
                    style={styles.inputs}
                    />
            </View>
                <TouchableOpacity onPress={validar}>
                    <View style={styles.boton} >
                        <Text Text>Inciar sesion</Text>
                    </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={signInWithGoogleAsync}>
                    <View style={styles.boton} >
                        <Text Text>Inciar sesion con Google</Text>
                    </View>
              </TouchableOpacity>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    inputs:{
        backgroundColor:'#fafafa',
        color:'black',
        width:'70%',
        marginBottom:'5%',
        padding:10,
        borderRadius:8,
        fontSize:15
    },
    boton:{
        backgroundColor:'white',
        borderWidth: 2,
        width:'50%',
        paddingVertical:'7%',
        alignItems:'center',
        borderRadius:5,
        marginTop:10,
        marginLeft:30
    }

  })
  const mapStateToProps = state =>{
      return{
          loggedUser:state.loggedUser
      }
  }
  const mapDipachToProps ={
    iniciarSesion:userActions.iniciarSesion,
    iniciarGoogle:userActions.loginGoogle
  }
 

  export default connect(mapStateToProps,mapDipachToProps)(IniciarSesion)