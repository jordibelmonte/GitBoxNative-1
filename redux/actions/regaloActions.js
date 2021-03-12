import axios from "axios"

const regaloActions={
    modificarRegalo:(regalo)=>{
        return (dispatch,getState)=>{
            dispatch({type:"MODIFICAR_REGALO",payload:regalo})
        }
    },
    enviarRegalo:()=>{
        return async(dispatch,getState)=>{
            try {
                const response= await axios.post(`http://localhost:4000/api/regalo`, getState().regaloReducer.regalo,
                  {
                    headers: {
                      Authorization: `Bearer ${getState().userReducer.loggedUser.token}`
                    }
                  })
              } catch (error) {
                console.log('ERROR AL ENVIAR REGALO')
              }
        }
    },
    obtenerRegalo:(_id)=>{
        return async(dispatch, getState) => {
        const response= await axios.get(`http://localhost:4000/api/regalos/${_id}`)
    }
    }
}
export default regaloActions