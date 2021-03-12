import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import regaloActions from "../redux/actions/regaloActions";
import Header from './Header';

const Envio = ({ navigation,carrito, total, modificarRegalo }) => {
  const [tipoEnvio, setTipoEnvio] = useState("")
  const [paraQuien, setParaQuien] = useState("")
  const [mailDestinatario, setMailDestinatario] = useState("");
  const [errores, setErrores] = useState([]);
  const [asunto, setAsunto] = useState("")
  const [visible, setVisible] = useState(false)

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
    <View style={{ width: '100%', alignItems: 'center' }}>
      <View style={{ marginTop: 35, marginLeft: -30, marginBottom: 20 }}>
        <Header />
      </View>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Elegí un método de pago</Text>
        <View style={{ width: '95%', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginVertical: 15 }}>
          <TouchableOpacity style={{backgroundColor: '#FF2A2A',
    paddingHorizontal: '5%',
    paddingVertical: 10, width: 140, alignItems:'center', height: 58,justifyContent:'center', 
    borderRadius: 5,}}>
            <Text style={{color:'white', fontWeight:'bold',fontSize:15}}>Envío por mail</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#FF2A2A',
    paddingHorizontal: '5%',
    paddingVertical: 10, width: 140, alignItems:'center', 
    borderRadius: 5,}}>
            <Text style={{color:'white', fontWeight:'bold',textAlign:'center',fontSize:15}}>Retira por tienda fisica</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{fontSize:18,fontWeight:'bold'}}>¿A quién se lo envías?</Text>
          <View style={{ width: 300, flexDirection: 'row', justifyContent: 'space-around', marginVertical:20 }}>
            <TouchableOpacity style={{backgroundColor: '#FF2A2A',
    paddingHorizontal: '5%',
    paddingVertical: 10, width: 140, alignItems:'center', 
    borderRadius: 5,}} onPress={() => setVisible(!visible)}><Text style={{color:'white', fontWeight:'bold',fontSize:15}}>Es para regalar</Text></TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: '#FF2A2A',
    paddingHorizontal: '5%',
    paddingVertical: 10, width: 140, alignItems:'center',
    borderRadius: 5,}} onPress={() => navigation.navigate('tarjeta')}><Text style={{color:'white', fontWeight:'bold',fontSize:15}}>Es para mí</Text></TouchableOpacity>
          </View>
          <View>
            {visible
              && <View>
                <TextInput
                  placeholder='De:'
                  // onChangeText={(value) => leerInput('cuenta', value)}
                  style={styles.inputs}
                  placeholderTextColor='white'
                />
                <TextInput
                  placeholder='Para:'
                  secureTextEntry
                  // onChangeText={(value) => leerInput('password', value)}
                  style={styles.inputs}
                  placeholderTextColor='white'
                />
                <TextInput
                  placeholder='Mensaje:'
                  secureTextEntry
                  // onChangeText={(value) => leerInput('password', value)}
                  style={styles.inputs}
                  placeholderTextColor='white'
                />
                <TouchableOpacity onPress={() => navigation.navigate('tarjeta')} style={{backgroundColor: '#FF2A2A', 
    paddingHorizontal: '5%',
    paddingVertical: 10, width: 140, alignItems:'center', height: 58,justifyContent:'center', 
    borderRadius: 5,marginTop:15, alignSelf:'center'}}><Text style={{color:'white', fontWeight:'bold',fontSize:15}}>Continuar</Text></TouchableOpacity>
              </View>
            }
          </View>
        </View>
      </View>
    </View>

  )
}
const styles = StyleSheet.create({
  inputs: {
    backgroundColor: '#fafafa',
    color: 'white',
    fontSize: 50,
    width: 280,
    marginBottom: '5%',
    padding: 10,
    borderRadius: 10,
    fontSize: 15,
    borderWidth: 2,
    paddingHorizontal: '2%',
    paddingVertical: '5%',
    alignItems: 'center',
    marginTop: 10,
    borderColor: 'white',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.3)',
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