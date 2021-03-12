import React from 'react'
import { ImageBackground, Text, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native"
import LosMasRegalados from './LosMasRegalados'
import Prueba2 from './Prueba2'
import Header from './Header'
import paqueteActions from '../redux/actions/paqueteActions'
import { connect } from 'react-redux'
import userActions from '../redux/actions/userActions'

const Home = (props) => {
  console.log('HOME')
  if (props.loggedUser) console.log(props.loggedUser.nombre)

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <ImageBackground source={{ uri: 'https://fotos.subefotos.com/e719e5d0fda1b617dd60b277756e64c7o.jpg' }} resizeMode='cover' style={{ width: '100%', height: 736, justifyContent: 'center' }}>
          <View style={{ marginTop: -25, marginBottom:20 }} >
            <Header navigation={props.navigation} />
          </View>
          <View style={styles.contenedor}>
            <Text style={styles.titulo} >Regala experiencias</Text>
            <Text style={styles.subtitulo}>Sorprendé con momentos para vivir dentro y fuera de casa</Text>
            <TouchableOpacity>
              <View style={styles.boton}>
                <Text style={{ fontSize: 20, width: 150, textAlign: 'center', fontWeight: 'bold' }}>Regala una GiftBox</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.boton1}>
                <Text style={{ color: 'white', fontSize: 20, width: 150, textAlign: 'center', fontWeight: 'bold' }}>Abre tu regalo</Text>
              </View>
            </TouchableOpacity>
          </View>
          {props.loggedUser
            ? <TouchableOpacity onPress={() => props.logOut()}>
              <View style={styles.boton2}>
                <Text style={{ color: 'white', fontSize: 20, width: 120, textAlign: 'center', fontWeight: 'bold' }}>Cerrar sesión</Text>
              </View>
            </TouchableOpacity>
            :
            <View style={{ flexDirection: 'row', height: 130, justifyContent: 'space-evenly', alignItems: 'flex-end' }}>
              <TouchableOpacity onPress={() => props.navigation.navigate('registro')}>
                <View style={styles.boton2}>
                  <Text style={{ color: 'white', fontSize: 20, width: 120, textAlign: 'center', fontWeight: 'bold' }}>Registrarse</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate('iniciarSesion')}>
                <View style={styles.boton2}>
                  <Text style={{ color: 'white', fontSize: 20, width: 130, textAlign: 'center', fontWeight: 'bold' }}>Iniciar Sesion</Text>
                </View>
              </TouchableOpacity>
            </View>
          }
        </ImageBackground>
        <View style={{ backgroundColor: '#dcbdbd' }}>

          <Text style={{ color: '#464646', fontSize: 40, paddingLeft: '5%', paddingVertical: '5%', fontWeight: 'bold' }}>Categorias</Text>
          <Prueba2 navigation={props.navigation} />
          {/* <Prueba navigation={props.navigation}/> */}
          <Text style={{ color: '#464646', fontSize: 40, paddingLeft: '5%', paddingVertical: '5%', fontWeight: 'bold' }}>Los Mas regalados</Text>
          <LosMasRegalados />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    width: '80%',
    marginLeft: '10%',
  },
  titulo: {
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -2, height: 1 },
    textShadowRadius: 8
  },
  subtitulo: {
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -2, height: 1 },
    textShadowRadius: 8,
    fontSize: 25,
    marginBottom: 30
  },
  boton: {
    backgroundColor: 'white',
    width: '70%',
    paddingHorizontal: '15%',
    paddingVertical: '4%',
    textAlign: 'center',
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,.8)'
  },
  boton1: {
    borderWidth: 2,
    width: '70%',
    paddingHorizontal: '15%',
    paddingVertical: '7%',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
    borderColor: 'white',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  boton2: {
    backgroundColor: 'rgba(0,0,0,.5)',
    borderWidth: 2,
    width: 160,
    height: 50,
    paddingHorizontal: '10%',
    justifyContent: 'center',
    paddingVertical: '7%',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
    borderColor: 'white'
  }
})
const mapStateToProps = state => {
  return {
    loggedUser: state.userReducer.loggedUser
  }
}

const mapDispatchToProps = {
  obtenerTodosLosPaquetes: paqueteActions.obtenerTodosLosPaquetes,
  logOut: userActions.logOut

}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
