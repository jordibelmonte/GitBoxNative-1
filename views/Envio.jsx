import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
// import { Link } from "react-router-dom"
import regaloActions from "../redux/actions/regaloActions";

const Envio = ({ carrito, total, modificarRegalo }) => {
  const [tipoEnvio, setTipoEnvio] = useState("")
  const [paraQuien, setParaQuien] = useState("")
  const [mailDestinatario, setMailDestinatario] = useState("");
  const [errores, setErrores] = useState([]);
  const [asunto, setAsunto] = useState("")

  const continuar = () => {
    let lastAtPos = mailDestinatario.lastIndexOf('@');
    let lastDotPos = mailDestinatario.lastIndexOf('.');
    if (!(lastAtPos < lastDotPos && lastAtPos > 0 && mailDestinatario.indexOf('@@') == -1 && lastDotPos > 2 && (mailDestinatario.length - lastDotPos) > 2)) {
      setErrores(["Email no valido"])
    }
    else {
      modificarRegalo({
        email: {
          emailDestinatario: mailDestinatario,
          asunto,
        }, carrito
      })
      setErrores([])
    }
  }
  return (
    <View style={{width:'100%', alignItems:'center'}}>
      <View>

        <Text>CARRITO HEAD</Text>
        <Text>BARRA</Text>
      </View>
      <View style={{width:'100%', alignItems:'center'}}>
        <Text style={{fontWeight:'bold', fontSize:18}}>Elegí un método de pago</Text>
        <View style={{width:'95%', flexWrap: 'wrap', flexDirection:'row',justifyContent:'space-around', alignItems:'center', marginVertical: 15}}>
          <View style={styles.botonEnvio}><Text style={styles.textoBotonEnvio}>Envío por mail</Text></View>
          {/* <View style={styles.botonEnvio}><Text style={styles.textoBotonEnvio}>Envío por whatsapp</Text></View> */}
          {/* <View style={styles.botonEnvio}><Text style={styles.textoBotonEnvio}>Envío físico por correo</Text></View> */}
          <View style={styles.botonEnvio}><Text style={styles.textoBotonEnvio}>Retira por tienda fisica</Text></View>
        </View>
        <View style={{alignItems:'center'}}>
          <Text>¿A quién se lo envías?</Text>
          
          <CheckBox title='Es para regalar'></CheckBox>
          <CheckBox title='Es para mí'></CheckBox>
        </View>
        

      </View>
    </View>

  )
}
const styles = StyleSheet.create({
  botonEnvio: {
    justifyContent:'center',
    width:'46%',
    height: 40,
    marginVertical: 8,
    alignItems: 'center',
    borderRadius:5,
    borderWidth:2,
    borderColor:'red',
  },
  textoBotonEnvio: {
    fontSize:15

  }
})
const mapStateToProps = state => {
  return {
    carrito: state.carritoReducer.carrito,
    total: state.carritoReducer.total,
    regalo: state.regaloReducer.regalo
  }
}
const mapDispatchToProps = {
  modificarRegalo: regaloActions.modificarRegalo
}

export default connect(mapStateToProps, mapDispatchToProps)(Envio)