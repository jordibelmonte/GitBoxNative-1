const initialState = {
  todosLosPaquetes: null,
  paquetesPorCategoria: [],
  paquetePorId: null,
  paquetesFiltrados: [],
  paquetesMasRegalados: []
}
const paqueteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TODOS_PAQUETES':
      return {
        ...state,
        todosLosPaquetes: action.payload
      }
    case 'PAQUETES_CATEGORIA':
      return {
        ...state,
        paquetesPorCategoria: state.todosLosPaquetes.filter(paquete => paquete.categoria === action.payload)
      }
    case 'PAQUETE_ID':
      return {
        ...state,
        paquetePorId: state.todosLosPaquetes.find(paquete => paquete._id === action.payload)
      }
    case 'FILTRO':
      console.log(action.payload)
      return {
        ...state,
        paquetesFiltrados: state.todosLosPaquetes.filter(paquete => paquete.nombre.toLowerCase().includes(action.payload.toLowerCase().trim()) || paquete.cantidadPersonas === action.payload.trim() || paquete.ubicacion.toLowerCase().includes(action.payload.toLowerCase().trim()) || paquete.categoria.toLowerCase().includes(action.payload.toLowerCase().trim()))
      }
    case 'PAQUETES_MAS_REF':
      return {
        ...state,
        paquetesMasRegalados: action.payload
      }
    case 'ENVIAR_COMENTARIO':

      return {
        ...state,
        paquetePorId: { ...action.payload, promedio: state.paquetePorId.promedio },
        todosLosPaquetes: state.todosLosPaquetes.map(paquete => paquete._id === action.payload._id ? action.payload : paquete)
      }
    case 'ELIMINAR_COMENTARIO':
      return {
        ...state,
        paquetePorId: { ...action.payload, promedio: state.paquetePorId.promedio },
        todosLosPaquetes: state.todosLosPaquetes.map(paquete => paquete._id === action.payload._id ? action.payload : paquete)
      }
    case 'EDITAR_COMENTARIO':
      console.log(action.payload)
      return {
        ...state,
        paquetePorId: { ...action.payload, promedio: state.paquetePorId.promedio },
        todosLosPaquetes: state.todosLosPaquetes.map(paquete => paquete._id === action.payload._id ? action.payload : paquete)
      }
    default:
      return state;
  }

}
export default paqueteReducer;