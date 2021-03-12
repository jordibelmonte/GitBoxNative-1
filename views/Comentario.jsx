import React, { useState, useEffect } from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import paqueteActions from '../redux/actions/paqueteActions'

const Comentario = ({ paqueteId, comentario, loggedUser, eliminarComentario, editarComentario }) => {
  const [visible, setVisible] = useState(false)
  const [reComentar, setReComentar] = useState({})
  const [opiniones, setOpiniones] = useState([])

  useEffect(() => {
    if (paqueteId) setOpiniones(paqueteId.opiniones)
  }, [opiniones])

  // if (paqueteId) console.log(paqueteId)
  // if (loggedUser) console.log(loggedUser)
  console.log(comentario)
  console.log('CCCCCCCCCCCCCCCCCCCCC')
  console.log(reComentar)


  const enviarComentarioAEliminar = () => {
    eliminarComentario({
      paqueteId: paqueteId._id,
      token: loggedUser.token,
      comentarioId: comentario._id
    })
    setOpiniones(paqueteId.opiniones)
  }

  const modificarComentario = (nombre, nuevoComentario) => {
    setReComentar({
      ...reComentar,
      comentarioId: comentario._id,
      paqueteId: paqueteId._id,
      token: loggedUser.token,
      [nombre]: nuevoComentario
    })
    setVisible(true)
  }

  const actualizarComentario = async () => {
    if (reComentar.comentarioEditado === undefined) {
      setVisible(!visible)
      return false
    }
    await editarComentario(reComentar)
    setVisible(!visible)
  }

  return (
    <>
      {loggedUser.id === comentario.idUsuario
        && <View style={{ flexDirection: 'row' }} key={comentario._id}>
          <View>
            <ImageBackground resizeMode='cover' style={{ width: 100, height: 100, borderColor: 'black', borderWidth: 2 }} source={{ uri: `${comentario.imagenUsuario}` }}></ImageBackground>
            <Text>{comentario.nombreUsuario}</Text>
          </View>
          <View>
            <Text>{comentario.comentarioUsuario}</Text>
          </View>

          {!visible ?
            <View>


              <TouchableOpacity onPress={modificarComentario}>
                <Icon name='edit' />
              </TouchableOpacity>
              <TouchableOpacity onPress={enviarComentarioAEliminar}>
                <Icon name='delete' />
              </TouchableOpacity>

            </View>

            : <View>
              <TextInput defaultValue={comentario.comentarioUsuario} onChange={modificarComentario} name="comentarioEditado"></TextInput>
              <TouchableOpacity onPress={actualizarComentario}>
                <Icon name='check' />
              </TouchableOpacity>
              <TouchableOpacity onPress={setVisible(!visible)}>
                <Icon name='x' />
              </TouchableOpacity>


            </View>}
        </View>
      }
    </>
  )
}

const mapStateToProps = state => {
  return {
    loggedUser: state.userReducer.loggedUser,
    paqueteId: state.paqueteReducer.paquetePorId,
  }
}

const mapDispatchToProps = {
  obtenerPaquetePorId: paqueteActions.obtenerPaquetePorId,
  eliminarComentario: paqueteActions.eliminarComentario,
  editarComentario: paqueteActions.editarComentario
}

export default connect(mapStateToProps, mapDispatchToProps)(Comentario)