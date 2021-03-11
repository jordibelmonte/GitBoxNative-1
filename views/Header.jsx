import { Text } from "react-native"
import { connect } from "react-redux"
import React,{useEffect,useState} from 'react'
import productoActions from '../redux/actions/productoActions'
import categoriaActions from '../redux/actions/categoriaActions'
import paqueteActions from '../redux/actions/paqueteActions'

const Header =(props)=>{
    useEffect(() => {
        props.obtenerTodosLosPaquetes()
        props.obtenerTodasLasCategorias()
    }, [])
    return <Text style={{display:'none'}}>header</Text>
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