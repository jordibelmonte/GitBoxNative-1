import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const userActions = {
    crearCuenta: (nuevoUsario) => {

        return async (dispatch,getstate) => {
            try{
              const data = await axios.post("https://backend-giftbox.herokuapp.com/api/usuarios",nuevoUsario); 
              if (data.data.success){                
                dispatch({type:'INICIAR_SESION', payload:data.data})
                return data.data.response
              } else{
                return data.data
              }
              }catch(error){
                const data =[{errors:'Paso algo...'}]
                return data.data
              }
          }
       
    },
    cerrarSesion: () => {
        return (dispatch, getState) => {
            dispatch({type: 'CERRAR_SESION'})
        }
    },
    logFromLS: () => {
        return async (dispatch, getState) => {
            const token = await AsyncStorage.getItem("token")
            if(token!==null){
                try {
                    const respuesta = await axios.post('https://backend-giftbox.herokuapp.com/api/usuarios/ls', {token}, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                    dispatch({type: 'INICIAR_SESION', payload: {response: {...respuesta.data.response}}})
                } catch(err) {
                    AsyncStorage.clear()
                }
            }

        }
    },
    
    logOut:()=>{
        return (dispatch, getState)=>{
            try{
                dispatch({type:"LOG_OUT"})
            }
            catch(err){
                console.log(err)
            }
        }
      },

    iniciarSesion: (usuario) => {
        return async (dispatch, getState) => {
            const respuesta = await axios.post('https://backend-giftbox.herokuapp.com/api/login', usuario)
            if (!respuesta.data.success) {
                return respuesta.data
            }
            dispatch({type:'INICIAR_SESION', payload: respuesta.data})
        }
    },
    editUsuarioPass : (editUsuario, id) => {
        return async (dispatch, getState)=> {
            const respuesta = await axios.put(`https://backend-giftbox.herokuapp.com/api/usuarios/${id}`, editUsuario)
            if(!respuesta.data.success){
            return respuesta.data 
        }
        }
    },
    editarUsuarioImg : (formNuevaImg, id) => {
        return async (dispatch, getState)=> {
            const respuesta = await axios.put(`https://backend-giftbox.herokuapp.com/api/imagen/${id}`, formNuevaImg)
            if(!respuesta.data.success){
            return respuesta.data 
        }
        }
    },
    loginGoogle:(name)=>{
        return async(dispatch,getState)=>{
            dispatch({type:'INICIAR_GOOGLE',payload:name})
        }
        
    }
}
export default userActions;

