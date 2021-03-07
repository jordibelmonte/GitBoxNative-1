import axios from 'axios'

const userActions = {
    iniciarSesion: (usuario) => {
        
        return async (dispatch, getState) => {
            const respuesta = await axios.post('https://backend-giftbox.herokuapp.com/api/login', usuario)
            console.log(respuesta.data)
            if (!respuesta.data.success) {
                return respuesta.data
            }
            dispatch({type:'INICIAR_SESION', payload: respuesta.data})
        }
    },
    logoutUser: () =>{
        return (dispatch, getState) =>{
            dispatch({type: 'LOG_OUT_USER'})
        }
    }
}

export default userActions