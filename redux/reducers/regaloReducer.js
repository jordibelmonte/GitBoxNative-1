const initialState = {
  regalo: {}
}

const regaloReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'MODIFICAR_REGALO':
          return {
              ...state,
              regalo: action.payload
          }   
      default:
      return state
  }
}

module.exports = regaloReducer