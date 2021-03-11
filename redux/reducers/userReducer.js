import AsyncStorage from '@react-native-async-storage/async-storage';
const initialState = {
    loggedUser: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INICIAR_SESION':
            AsyncStorage.setItem('nombre', action.payload.response.nombre)
            AsyncStorage.setItem('token', action.payload.response.token)
            AsyncStorage.setItem('imagen', action.payload.response.imagen)
            AsyncStorage.setItem('id', action.payload.response.id)
            AsyncStorage.setItem('googleUser', action.payload.response.googleUser)
            return {
                ...state,
                loggedUser: action.payload.response
            }   
        case 'LOG_OUT':
            AsyncStorage.clear();
            return {
                ...state,
                loggedUser:null
            }
        case 'INICIAR_GOOGLE':
            return{
                ...state,
                loggedUser:action.payload
            }
        default:
        
        return state
    }
}

module.exports = userReducer