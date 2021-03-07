import React, { useEffect, useState } from 'react';
import {TouchableOpacity,Alert,ToastAndroid, Image, ImageBackground, StyleSheet, Text, TextInput,View } from 'react-native';
import { connect } from 'react-redux';
import userActions from '../redux/actions/userActions';
// import {
//     GoogleSignin,
//     GoogleSigninButton,
//     statusCodes,
//   } from '@react-native-google-signin/google-signin';

const IniciarSesion =(props)=>{
    const [error, setError] = useState({})
    const [nuevoUsario, setNuevoUsario] = useState({
        cuenta:'',
        password:''
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
    // signIn = async () => {
    //     try {
    //       await GoogleSignin.hasPlayServices();
    //       const userInfo = await GoogleSignin.signIn();
    //       this.setState({ userInfo });
    //     } catch (error) {
    //       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //         // user cancelled the login flow
    //       } else if (error.code === statusCodes.IN_PROGRESS) {
    //         // operation (e.g. sign in) is in progress already
    //       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //         // play services not available or outdated
    //       } else {
    //         // some other error happened
    //       }
    //     }
    //   };

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
              <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={this._signIn}
                disabled={this.state.isSigninInProgress} />
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
    iniciarSesion:userActions.iniciarSesion
  }
 

  export default connect(mapStateToProps,mapDipachToProps)(IniciarSesion)