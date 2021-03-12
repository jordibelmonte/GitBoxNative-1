import { ImageBackground, Text, View } from "react-native"
import { connect } from "react-redux"
import React, { useEffect, useState } from 'react'
import productoActions from '../redux/actions/productoActions'
import categoriaActions from '../redux/actions/categoriaActions'
import paqueteActions from '../redux/actions/paqueteActions'
import { Icon } from "react-native-elements"
import { TouchableOpacity } from "react-native-gesture-handler"

const Header = (props) => {
  useEffect(() => {
    props.obtenerTodosLosPaquetes()
    props.obtenerTodasLasCategorias()
  }, [])
  return (
    <View style={{ marginLeft: 50, marginBottom: 15 }}>

      <Text style={{ display: 'none' }}>header</Text>
      <View style={{ width: 300, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <ImageBackground style={{ width: 130, height: 65, resizeMode: 'cover' }} resizeMode='cover' source={{ uri: 'https://fotos.subefotos.com/494b09bafa683f18c63f2c7542c9f2b1o.png' }}></ImageBackground>
        <TouchableOpacity style={{ backgroundColor: '#FF2A2A', borderRadius: 10, padding: 5, elevation: 11 }} onPress={() => props.navigation.navigate('carrito')}><Icon iconStyle={{ fontSize: 36, color: 'white' }} name='shopping-cart' /></TouchableOpacity>
      </View>
    </View>
  )
}

const mapStateToProps = state => {
  return {
    todosLosPaquetes: state.paqueteReducer.todosLosPaquetes,
    paquetesPorCategoria: state.paqueteReducer.paquetesPorCategoria,
    todosLosProductos: state.productoReducer.todosLosProductos,
    productosDelpaquete: state.productoReducer.productosDelpaquete,
    todasLasCategorias: state.categoriaReducer.todasLasCategorias
  }
}

const mapDispatchToProps = {
  obtenerTodosLosPaquetes: paqueteActions.obtenerTodosLosPaquetes,
  obtenerPaquetesPorCategoria: paqueteActions.obtenerPaquetesPorCategoria,
  obtenerTodoslosProductos: productoActions.obtenerTodoslosProductos,
  obtenerProductosPorPaquete: productoActions.obtenerProductosPorPaquete,
  obtenerTodasLasCategorias: categoriaActions.obtenerTodasLasCategorias
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)