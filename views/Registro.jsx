import React, { useEffect, useState } from 'react';
import {TouchableOpacity,Alert,ToastAndroid, Image, ImageBackground, StyleSheet, Text, TextInput,View } from 'react-native';
import userActions from '../redux/actions/userActions';


const Registro =(props)=>{
    const [error, setError] = useState({})
    const [nuevoUsario, setNuevoUsario] = useState({
        nombre: '',
        apellido:'',
        cuenta:'',
        password:'',
        googleUser: false,
    })
    const leerInput = (name, value)=>{
        setNuevoUsario({...nuevoUsario, [name]:value})
        // NO HAY EVENTOS EN MOBILE
    }
    const validar = async () =>{
        setError([])
        e.preventDefault()

        const {nombre,apellido,cuenta,password} = nuevoUsario

        let imagen = { uri: source.uri}
        var formNuevoUsuario = new FormData();

        formNuevoUsuario.append("nombre", nombre)
        formNuevoUsuario.append("apellido", apellido)
        formNuevoUsuario.append("cuenta", cuenta)
        formNuevoUsuario.append("password", password)
        formNuevoUsuario.append("googleUser", false)

        if(nuevoUsario.nombre === '' || nuevoUsario.apellido === ''||nuevoUsario.cuenta ==='' || nuevoUsario.password ===''){
            ToastAndroid.show('Todos los campos son requeridos',
            ToastAndroid.TOP,25,
            50)
            return false   
        }
        const res = await props.crearCuenta(formNuevoUsuario)

        if(res && !res.success){
            // setError(res.error) COMO LOS TRAE EL BACK
            // ToastAndroid.show('Usuario y/o contraseña incorrecto', ESTO TIENE QUE MAPEAR LOS ERRORES
            // ToastAndroid.TOP,25,
            // 50)
            }else{
                props.navigation.navigate('Home')
                ToastAndroid.show('Bienvenido',
                ToastAndroid.TOP,25,
            50)
            }

    }
   
    return(
        <ImageBackground source={{uri:'https://fotos.subefotos.com/e719e5d0fda1b617dd60b277756e64c7o.jpg'}} resizeMode='cover' style={{width:'100%', height:'100%', justifyContent:'center'}}>
            <View style={{paddingLeft:30}}>
                <TextInput
                    placeholder='Nombre'
                    onChangeText={(value) => leerInput('nombre',value)}
                    style={styles.inputs}
                    />
                <TextInput
                    placeholder='Apellido'
                    onChangeText={(value) => leerInput('apellido',value)}
                    style={styles.inputs}
                    />
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
                        <Text >Crear cuenta</Text>
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
    crearCuenta: userActions.crearCuenta
  }
 
  export default connect(mapStateToProps,mapDipachToProps)(Registro)