import { connect } from "react-redux";
import React, { useEffect } from 'react'
import { Button, ImageBackground, Text, View } from "react-native";
import Loader from "./Loader";
import { useState } from "react";
import { FlatList, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import carritoActions from "../redux/actions/carritoActions";
import Header from "../views/Header";
import { Icon } from "react-native-elements";

const Carrito = ({ navigation, carrito, total, actualizarCarrito, eliminarDelCarrito }) => {
  const [carrito1, setCarrito1] = useState(null)

  useEffect(() => {
    setCarrito1(carrito)
    // actualizarCarrito()
  }, ["", carrito])

  const eliminarPaquete = (paquete) => {
    eliminarDelCarrito(paquete)
  }


  return (
    <>
      <ScrollView>
        <View style={{ marginTop: 20 }}>
          <Header />
        </View>
        <View style={{ flex: 1, paddingBottom: 50, alignItems: 'center' }}>
          <View >
            <Text style={{ fontSize: 40, fontWeight: 'bold', paddingVertical: 20 }}> Tu carrito</Text>
          </View>
          <View style={{ height: '100%', width: '100%', alignItems: 'center' }}>
            <View >

              {carrito1 && carrito1.map((paquete) => {
                return (<View key={`a${paquete._id}`}>

                  <View style={{ marginTop: 18, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'coral', marginLeft: 15, marginRight: 15, borderTopEndRadius: 10, borderTopStartRadius: 10, height: 30 }} >
                    <Text>{paquete.nombre}</Text>
                    <TouchableOpacity onPress={() => eliminarPaquete(paquete)}>
                      <Icon name='delete' />
                    </TouchableOpacity>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 15, marginRight: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 18 }}>
                      <ImageBackground style={{ width: 100, height: 100 }} source={{ uri: paquete.imagen }} resizeMode='cover'>
                      </ImageBackground>
                      <View style={{ justifyContent: 'space-evenly', alignItems: 'center', width: 250, height: 100 }}>
                        <Text>{`👥 Para ${paquete.cantidadPersonas} personas:`}</Text>
                        <View style={{ width: 200, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                          <Text style={{ fontSize: 22 }}>${paquete.precio}</Text>
                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 20, height: 20, backgroundColor: 'coral', borderRadius: 3 }} onPress={() => actualizarCarrito(paquete, -1)}>
                              <Text style={{ fontSize: 25, color: 'white', paddingBottom: 4 }}>-</Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 22, marginHorizontal: 5 }}>{paquete.cantidad}</Text >
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 20, height: 20, backgroundColor: 'coral', borderRadius: 3 }} onPress={() => actualizarCarrito(paquete, 1)}>
                              <Text style={{ fontSize: 20, color: 'white', paddingBottom: 2 }}>+</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>)
              })}
              <View style={{ width: 380, alignItems: 'center' }}>
                <Text style={{
                  fontSize: 22, marginLeft: 15,
                  marginVertical: 12, fontWeight: 'bold'
                }}>Resumen de compra</Text>
                <View style={{ width: 380, alignItems: 'center', borderBottomWidth: 2 }}>

                  {carrito1 && carrito1.map((paquete) => {
                    return (
                      <View key={paquete._id} style={{ flexDirection: 'row', justifyContent: 'space-between', width: '75%', paddingVertical: 5 }}>
                        <Text style={{ width: '55%', fontSize: 22 }}>{paquete.nombre}</Text>
                        <Text style={{ width: 80, fontSize: 22, textAlign: 'right' }}>${paquete.precio}</Text>
                      </View>
                    )
                  })}
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text>TOTAL</Text>
                  <Text>{total}</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={{ width: 300, height: 100 }}>
              <Text onPress={() => navigation.navigate('envio')}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

    </>
  )
}
const mapStateToProps = state => {
  return {
    carrito: state.carritoReducer.carrito,
    total: state.carritoReducer.total
  }
}

const mapDispatchToProps = {
  actualizarCarrito: carritoActions.actualizarCarrito,
  eliminarDelCarrito: carritoActions.eliminarDelCarrito
}


export default connect(mapStateToProps, mapDispatchToProps)(Carrito)