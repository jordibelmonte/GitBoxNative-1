const initialState = {
    loggedUser: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INICIAR_SESION':
            return {
                ...state,
                loggedUser: action.payload.response
            }   
        case 'LOG_OUT':
            localStorage.clear();
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