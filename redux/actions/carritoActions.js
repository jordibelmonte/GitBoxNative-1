import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
const setLS = async (carrito,total) => {
  try {
    await AsyncStorage.setItem('total', JSON.stringify(total))
    await AsyncStorage.setItem('carrito', JSON.stringify(carrito))
  } catch (e) {
    console.log(e)
  }
}
const carritoActions = {
  agregarAlCarrito: ({nombre,_id,cantidad,precio,descripcion,imagen}) => {
    return async (dispatch, getState) => {
      dispatch({type:"AGREGAR_AL_CARRITO", payload: {nombre,_id,cantidad,precio,descripcion,imagen}})
      AsyncStorage.clear()
      setLS(getState().carritoReducer.carrito,getState().carritoReducer.total)
  
    }
  }, 
  eliminarDelCarrito: ({_id,precio,cantidad})=>{
    return async (dispatch, getState) => {
      setLS()
      dispatch({type:"ELIMINAR_DEL_CARRITO", payload: {_id,precio,cantidad}})
      // AsyncStorage.setItem("carrito",JSON.stringify(getState().carritoReducer.carrito));
      // AsyncStorage.setItem("total",JSON.stringify(getState().carritoReducer.total));
    }
  },
  actualizarCarrito: ({_id},numero)=>{
    return async (dispatch, getState) => {
      AsyncStorage.setItem("carrito",JSON.stringify(getState().carritoReducer.carrito))
      AsyncStorage.setItem("total",JSON.stringify(getState().carritoReducer.total));
      dispatch({type:"ACTUALIZAR_CARRITO", payload: {_id,numero}})
    }
  },
  carritoDelLS:()=>{
    return async (dispatch,getState)=>{
      const carritoLS=await AsyncStorage.getItem('carrito')
      const total = await  AsyncStorage.getItem('total')
      if(carritoLS!=undefined && total!=undefined ){
      dispatch({type:"CARRITO_LS", payload:{carritoLS,total}})
      }
    }
  }

}
export default carritoActions;