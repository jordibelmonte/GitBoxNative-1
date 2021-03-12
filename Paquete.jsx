import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image, KeyboardAvoidingView, TextInput, ToastAndroid } from 'react-native';
import paqueteActions from './redux/actions/paqueteActions'
import carritoActions from './redux/actions/carritoActions'
import { connect } from 'react-redux'
import Loader from "./views/Loader";
import { Icon } from 'react-native-elements';
import Comentario from './views/Comentario';
import Header from './views/Header';

const Paquete = (props) => {
  const [valor, setValor] = useState(0)
  const [ultimoValor, setUltimoValor] = useState(0);
  const [visible, setVisible] = useState(false)
  const [comentario, setComentario] = useState({})
  useEffect(() => {
    props.filtraPaquete(props.route.params.paqueteId)
  }, [])

  // useEffect(() => {
  //   if (props.paqueteId) { obtenerProductosPorPaquete(props.paqueteId._id) }
  // }, [])

  if (!props.paqueteId) { return <Loader /> }
  const agregarCarrito = () => {
    props.agregarAlCarrito(props.paqueteId)
    props.navigation.navigate("carrito")
  }

  let promedioValoraciones = 0
  var valoracionPaquete = 0
  if (props.paqueteId) props.paqueteId.valoracion.map(valoracion => {
    valoracionPaquete = valoracionPaquete + valoracion.valor
  })
  promedioValoraciones = (valoracionPaquete / props.paqueteId.valoracion.length)
  
  const leerInput = (nombre, nuevoComentario) => {
    setComentario({
      ...comentario,
      paqueteId: props.paqueteId._id,
      idUsuario: props.loggedUser.id,
      token: props.loggedUser.token,
      imagenUsuario: props.loggedUser.imagen,
      nombreUsuario: props.loggedUser.nombre,
      [nombre]: nuevoComentario
    })
  }
  
  const enviarComentario = () => {
    if (!props.loggedUser) {
      ToastAndroid.show('Login successful', ToastAndroid.TOP, 25, 50)
      props.navigation.navigate("iniciarSesion")
    } else if (!comentario.comentarioUsuario) {
      ToastAndroid.show('Login successful', ToastAndroid.TOP, 25, 50)
    } else {
      props.agregarComentario(comentario)
      // document.getElementById("inputComentario").value = ""
    }
  }
  
  console.log(props.paqueteId)
  console.log(promedioValoraciones)
  
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.containerKeyboard}>
      <ScrollView>
        <View style={{ marginTop: 20 }}>
          <Header />
        </View>
        <View style={styles.container}>
          <View style={styles.titulo}>
            <Text style={styles.tituloTitulo}>{props.paqueteId.nombre}</Text>
            <Text style={styles.tituloPuntuacion}>{promedioValoraciones.toFixed(2)}⭐</ Text>
          </View>
          <View style={styles.imageContainer}>
            <View style={styles.descripcionContenedor}>
              <Text style={styles.descripcion}>{props.paqueteId.descripcion.slice(0,20)}</Text>
            </View>
            <Image source={{ uri: `${props.paqueteId.imagen}` }} style={styles.image} />
          </View>
        </View>
        <View style={styles.container2}>
          <View style={styles.acercaDe} >
            <Text style={styles.acercaDeTitulo}>Acerca de esta GiftBox</Text>
            <View style={styles.textoAcercaDePadre}>
              <Text style={styles.textoAcercaDe}>👥 {props.paqueteId.cantidadPersonas}</Text>
              <Text style={styles.textoAcercaDe}>📅 Se puede user hasta el 03/09/2021</Text>
              <Text style={styles.textoAcercaDe}>🎁 {props.paqueteId.ubicacion} </Text>
              <Text style={styles.textoAcercaDe}>🔁 Se puede cambiar por otra GiftBox</Text>
            </View>
          </View>
          <View style={styles.precioPadre}>
            <Text style={styles.precio}>${props.paqueteId.precio}</Text>
          </View>
          <View style={styles.comprarBoton}>
            <Text onPress={() => agregarCarrito()} style={styles.comprarBotonTexto}>Comprar esta GiftBox</Text>
          </View>
          <View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 25, alignItems: 'center' }}>
            <TextInput style={{ borderBottomWidth: 1, marginRight: 15, height: 40 }} name='comentarioUsuario' onChangeText={value => leerInput('comentarioUsuario', value)} placeholder='Ingrese un comentario'></TextInput>
            <Icon name='send' iconStyle={{ fontSize: 25, color: '#FF2a2a' }} onPress={() => { enviarComentario() }} />
          </View>
          <View style={styles.opiniones}>
            {props.paqueteId.opiniones.length === 0
              ? <View>
                <Text style={styles.opinionesTitulo}>Aún no hay opioniones</Text>
                <Text style={styles.opinionesTexto}>Esta GiftBox es muy nueva no hay opiniones todavía</Text>
              </View>
              : props.paqueteId.opiniones.map(opinion => {
                return (
                  <Comentario comentario={opinion} key={`op${opinion._id}`} />
                )
              })
            }
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const mapStateToProps = state => {
  return {
    paqueteId: state.paqueteReducer.paquetePorId,
    loggedUser: state.userReducer.loggedUser
  }
}

const mapDispatchToProps = {
  filtraPaquete: paqueteActions.obtenerPaquetePorId,
  agregarComentario: paqueteActions.agregarComentario,
  agregarAlCarrito: carritoActions.agregarAlCarrito,
}
export default connect(mapStateToProps, mapDispatchToProps)(Paquete)

const styles = StyleSheet.create({
  containerKeyboard: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    /*     marginTop:'10%' */
  },
  titulo: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tituloTitulo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'rgb(63,63,63)'
  },
  tituloPuntuacion: {
    fontSize: 20,
    color: '#F9C53B',
    marginLeft: '5%',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FBFBFB',

  },
  image: {
    marginVertical: '5%',
    resizeMode: 'contain',
    height: 300,
    width: 300,
  },
  descripcionContenedor: {
    marginVertical: '5%',
    flex: 1,
    width: '100%',
    height: '100%'
  },
  descripcion: {
    fontSize: 18,
    flex: 1,
    width: 300,
    height: '100%'
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  acercaDe: {
    flex: 1,
  },
  acercaDeTitulo: {
    marginVertical: '5%',
    fontSize: 25,
    fontWeight: 'bold'
  },
  comprarBoton: {
    backgroundColor: '#FF2A2A',
    paddingHorizontal: '5%',
    paddingVertical: '2%',
    borderRadius: 5,
  },
  comprarBotonTexto: {

    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  },
  precio: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  precioPadre: {
    marginVertical: '5%',
    alignItems: 'flex-start'
  },
  textoAcercaDe: {
    fontSize: 20,
    marginBottom: 8
  },
  imagenTarjetas: {
    marginBottom: '5%',
    resizeMode: 'contain',
    height: 100,
    width: 300,
  },
  opiniones: {
    paddingVertical: '5%',
    paddingHorizontal: '5%',
    marginBottom: '5%',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  opinionesTitulo: {
    fontSize: 20,
    fontWeight: '700'
  }
});
