import axios from 'axios'

const paqueteActions = {
  obtenerTodosLosPaquetes: () => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.get('https://backend-giftbox.herokuapp.com/api/paquetes')
        dispatch({ type: 'TODOS_PAQUETES', payload: response.data.response })
      } catch (error) {
        console.log(error)
      }
    }
  },
  obtenerPaquetesPorCategoria: (categoria) => {
    return (dispatch, getState) => {
      try {
        dispatch({ type: 'PAQUETES_CATEGORIA', payload: categoria })
      } catch (error) {
        console.log(error)
      }
    }
  },
  obtenerPaquetePorId: (_id) => {
    return (dispatch, getState) => {
      try {
        dispatch({ type: 'PAQUETE_ID', payload: _id })
      } catch (error) {
        console.log(error)
      }
    }
  },
  filtrarPaquetesMasReg: () => {
    return (dispatch, getState) => {
      try {
        dispatch({ type: 'PAQUETES_MAS_REG', payload: getState })
      } catch (error) {
        console.log(error)
      }
    }
  },
  filtrarPaquetes: (valor) => {
    return (dispatch, getState) => {
      try {

        // return (
        //   getState().paqueteReducer.todosLosPaquetes.filter(paquete => paquete.nombre.toLowerCase().includes(valor.toLowerCase().trim()) || paquete.cantidadPersonas === valor.trim() || paquete.ubicacion.toLowerCase().includes(valor.toLowerCase().trim()) || paquete.categoria.toLowerCase().includes(valor.toLowerCase().trim()))
        // )
        dispatch({ type: 'FILTRO', payload: valor })

      } catch (error) {
        console.log(error)
      }
    }
  },
  agregarComentario: nuevoComentario => {
    const { comentarioUsuario, idUsuario, imagenUsuario, nombreUsuario,token, paqueteId } = nuevoComentario
    console.log("1111111111111111111")
    console.log(nuevoComentario)
    return async (dispatch, getState) => {
      try {
        const response = await axios.post(`https://backend-giftbox.herokuapp.com/api/paquete/comentario`, { comentarioUsuario,idUsuario,imagenUsuario,nombreUsuario, paqueteId },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          console.log(response.data)
        dispatch({ type: 'ENVIAR_COMENTARIO', payload: response.data.response })
      } catch (error) {
        console.log(error)
      }

    }
  },
  eliminarComentario: comentarioAEliminar => {
    console.log(comentarioAEliminar)

    const { comentarioId, paqueteId, token } = comentarioAEliminar
    return async (dispatch, getState) => {
      try {
        const response = await axios.delete(`https://backend-giftbox.herokuapp.com/api/paquete/comentario/${paqueteId}/${comentarioId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        dispatch({ type: 'ELIMINAR_COMENTARIO', payload: response.data.response })
      } catch (error) {
        console.log(error)
      }

    }
  },
  editarComentario: comentarioAEditar => {
    console.log(comentarioAEditar)
    const { comentarioId, paqueteId, comentarioEditado, token } = comentarioAEditar
    return async (dispatch, getState) => {
      try {
        const response = await axios.put(`https://backend-giftbox.herokuapp.com/api/paquete/comentario`, { comentarioId, paqueteId, comentarioEditado },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        dispatch({ type: 'EDITAR_COMENTARIO', payload: response.data.response })
      } catch (error) {
        Swal.fire('ENTRE EN EL ERROR DE EDITAR COMENTARIO')
      }
    }
  }


}
export default paqueteActions;