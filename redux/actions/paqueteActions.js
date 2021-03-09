import axios from 'axios'

const paqueteActions = {
  obtenerTodosLosPaquetes: () => {
    return async (dispatch, getState) => {
      fetch('https://backend-giftbox.herokuapp.com/api/paquetes')
        .then(response => response.json())
        .then(data => dispatch({type: 'TODOS_PAQUETES', payload: data}))

      // try {
      //   const response = await axios.get('https://backend-giftbox.herokuapp.com/api/paquetes')
      //   dispatch({type: 'TODOS_PAQUETES', payload: response.data.response})
      // } catch (error) {
      //   console.log(error)
      // }
    }
  },
  obtenerPaquetesPorCategoria: (categoria) => {
    return  (dispatch, getState) => {
      try {
        dispatch({type: 'PAQUETES_CATEGORIA', payload: categoria})
      } catch (error) {
        console.log(error)
      }
    }
  },
  obtenerPaquetePorId: (_id) => {
    return (dispatch, getState) => {
      try {
        dispatch({type: 'PAQUETE_ID', payload: _id})
      } catch (error) {
        console.log(error) 
      }
    }
  },
  filtrarPaquetesMasReg: () => {
    return (dispatch, getState) => {
      try {
        dispatch({type: 'PAQUETES_MAS_REG', payload: getState})
      } catch (error) {
        console.log(error)
      }
    }
  },
  filtrarPaquetes: (valor) => {
    console.log('OTRA COSA')
    console.log('ACTIONNNNNNNNNN')
    console.log(valor)
    return (dispatch, getState) => {
      try {
        
        // return (
        //   getState().paqueteReducer.todosLosPaquetes.filter(paquete => paquete.nombre.toLowerCase().includes(valor.toLowerCase().trim()) || paquete.cantidadPersonas === valor.trim() || paquete.ubicacion.toLowerCase().includes(valor.toLowerCase().trim()) || paquete.categoria.toLowerCase().includes(valor.toLowerCase().trim()))
        // )
        dispatch({type: 'FILTRO', payload: valor})
       
      } catch (error) {
        console.log(error)
      }
    }
  }
  
    
}
export default paqueteActions;