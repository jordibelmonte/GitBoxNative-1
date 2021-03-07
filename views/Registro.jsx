import React, { useEffect, useState } from 'react';
import {TouchableOpacity,Alert,ToastAndroid, Image, ImageBackground, StyleSheet, Text, TextInput,View } from 'react-native';


const Registro =(props)=>{
    const [error, setError] = useState({})
    const [nuevoUsario, setNuevoUsario] = useState({
        nombre: '',
        apellido:'',
        cuenta:'',
        password:''
    })
    const leerInput = (name, value)=>{
        setNuevoUsario({...nuevoUsario, [name]:value})
    }
    const validar = async () =>{
        
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
                <TouchableOpacity>
                    <View style={styles.boton} >
                        <Text Text>Crear cuenta</Text>
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
//   const mapStateToProps = state =>{
//       return{
//           loggedUser:state.loggedUser
//       }
//   }
 

  export default Registro