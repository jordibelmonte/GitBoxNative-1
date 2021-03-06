import React from 'react'
import { ImageBackground, Text, TouchableOpacity, View,StyleSheet, ScrollView } from "react-native"
import Carrusel from './Carrusel'
import Prueba from './Prueba'

const Home =()=>{
    return (
        <ScrollView>
            <View style={{flex:1}}>
                <ImageBackground source={{uri:'https://fotos.subefotos.com/e719e5d0fda1b617dd60b277756e64c7o.jpg'}} resizeMode='cover' style={{width:'100%', height:600,justifyContent:'center'}}>
                    <View style={styles.contenedor}>
                        <Text style={styles.titulo} >Regalá experiencias</Text>
                        <Text style={styles.subtitulo}>Sorprendé con momentos para vivir dentro y fuera de casa</Text>
                        <TouchableOpacity>
                            <View style={styles.boton}>
                                <Text>Regalá una GiftBox</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.boton1}>
                                <Text style={{color:'white'}}>Abrí ti regalo</Text>
                            </View>
                        </TouchableOpacity>
                    </View>            
                </ImageBackground>
                <Text style={{color:'#464646',fontSize:40,paddingLeft:'10%',paddingVertical:'5%',fontWeight:'bold'}}>Categorias</Text>
                {/* <Carrusel /> */}
                <Prueba />
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    contenedor:{
        width:'80%',
        marginLeft:'10%',
    }, 
    titulo:{
        color:'white',
        fontSize:45,
        fontWeight:'bold'
    },
    subtitulo:{
        color:'white'
    },
    boton:{
        backgroundColor:'white',
        width:'70%',
        paddingHorizontal:'15%',
        paddingVertical:'7%',
        textAlign:'center',
        borderRadius:5,
        marginTop:10
    },
    boton1:{
        borderWidth: 2,
        width:'70%',
        paddingHorizontal:'15%',
        paddingVertical:'7%',
        alignItems:'center',
        borderRadius:5,
        marginTop:10,
        borderColor:'white'
    }
})
export default Home
