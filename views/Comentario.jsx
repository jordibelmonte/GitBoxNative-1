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
    <View style={{ borderBottomColor: 'black', borderRadius: 12, borderWidth: 1, height: 40, alignItems: 'center', marginBottom: 10 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: 350, height: 40, alignItems: 'center' }} key={comentario._id}>
        <View style={{ flexDirection: 'row', width: 200 }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, width: 80 }}>{`${comentario.nombreUsuario}:`}</Text>
          </View>
          <View>
            <Text>{comentario.comentarioUsuario}</Text>
          </View>
        </View>

        {loggedUser.id === comentario.idUsuario &&
          <View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={modificarComentario}>
                <Icon name='edit' iconStyle={{ fontSize: 25, color: '#FF2a2a' }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={enviarComentarioAEliminar}>
                <Icon name='delete' iconStyle={{ fontSize: 25, color: '#FF2a2a' }} />
              </TouchableOpacity>
            </View>

            <View>
              <TextInput defaultValue={comentario.comentarioUsuario} onChange={modificarComentario} name="comentarioEditado"></TextInput>
              <TouchableOpacity onPress={actualizarComentario}>
                <Icon name='check' />
              </TouchableOpacity>
              <TouchableOpacity onPress={setVisible(!visible)}>
                <Icon name='x' />
              </TouchableOpacity>

            </View>
          </View>
          }
      </View>

    </View>
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